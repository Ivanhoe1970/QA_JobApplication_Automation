// Import the MailSlurp client
import { MailSlurp } from "mailslurp-client";
import accountCreationPage from "../page_objects/accountCreationPage.js"; // Ensure this import exists
import { faker } from "@faker-js/faker";

describe("Amazon.jobs Account Creation & Application Submission", () => {
    let testUser;
    let verificationCode;
    let inboxId;
    let inboxEmail;

    beforeEach(() => {
        cy.fixture("userTestData").then((data) => {
            const mailslurp = new MailSlurp({ apiKey: Cypress.env("mailslurpApiKey") });

            return mailslurp.inboxController.createInboxWithDefaults().then((inbox) => {
                inboxId = inbox.id;
                inboxEmail = inbox.emailAddress;

                testUser = {
                    firstName: faker.person.firstName(),
                    lastName: faker.person.lastName(),
                    email: inboxEmail,
                    password: generateValidAmazonPassword(),
                    ...data
                };

                cy.wrap(testUser).should("have.property", "email").and("not.be.empty");
            });
        });
    });

    it("Creates an account, verifies email, and continues application", () => {
        cy.visit("https://passport.amazon.jobs/createaccount");

        cy.log("🔹 Creating an account...");
        cy.wrap(testUser).then((user) => {
            accountCreationPage.createAccount(user);
        });

        cy.log("⏳ Waiting for verification email...");
        cy.wait(10000);

        // Retrieve email from MailSlurp
        cy.wrap(null).then(() => {
            const mailslurp = new MailSlurp({ apiKey: Cypress.env("mailslurpApiKey") });

            return mailslurp.waitForLatestEmail(inboxId, 30000, true).then((email) => {
                if (!email) {
                    throw new Error("❌ No email received in MailSlurp.");
                }

                cy.log("✅ Email received. Extracting OTP...");
                const codeMatch = email.body.match(/\b\d{6}\b/);
                if (!codeMatch) {
                    throw new Error("❌ No verification code found in email.");
                }

                verificationCode = codeMatch[0];
                cy.log(`✅ Extracted OTP: ${verificationCode}`);

                cy.get("#verificationFormCodeInputField")
                    .should("be.visible")
                    .click()
                    .type(verificationCode, { delay: 200 })
                    .should("have.value", verificationCode);

                cy.log("✅ OTP Entered Successfully!");

                cy.get(':nth-child(4) > .btn').click();
                cy.log("✅ Email verified successfully!");
            });
        });

        // ✅ Ensure we are on the correct URL before proceeding
        cy.url().should("include", "passport.amazon.jobs/accountInfo");

        // ✅ Click "Go to My Applications"
        cy.get('#backToA2D1Link').should('be.visible').click();

        // ✅ Handle navigation to `account.amazon.jobs`
        cy.url().should("include", "account.amazon.jobs/en-US/applicant");

        // ✅ Step 4: Handle Cross-Origin Login on Amazon.jobs
        cy.log("🔹 Handling cross-origin login...");

        cy.origin("https://account.amazon.jobs", () => {
            cy.log("✅ Ensuring login form is visible...");
            
            // Wait for login form
            cy.get(".form-control", { timeout: 10000 }).should("be.visible");

            // Log in
            cy.get(".form-control").first().type(Cypress.env("amazonTestEmail"));
            cy.get("#ap_password").type(Cypress.env("amazonTestPassword"), { log: false });
            cy.get("#signInSubmit").click();
        });

        cy.log("✅ Successfully logged in after handling cross-origin login!");

        // ✅ Confirm navigation to applications page
        cy.url().should("include", "/applicant/applications");
        cy.log("✅ Confirmed application page loaded!");

        // ✅ Next steps: Continue filling the job application form
    });
});

/**
 * ✅ Generates a password that meets Amazon.jobs requirements
 */
function generateValidAmazonPassword() {
    const upper = faker.string.alpha(1).toUpperCase();
    const lower = faker.string.alpha(1).toLowerCase();
    const number = faker.string.numeric(1);
    const special = "!@#$%^&*()_+".charAt(Math.floor(Math.random() * 12));
    const rest = faker.string.alpha(6);

    return `${upper}${lower}${number}${special}${rest}`;
}
