import { faker } from "@faker-js/faker";

describe("Amazon Job Application", () => {
    before(() => {
        cy.log("🔹 Navigating to the job application page...");
        cy.visit("https://account.amazon.jobs/en-US/applicant/jobs/2909697/apply");
    });

    it("Fills out the job application form", () => {
        cy.log("✅ Filling in application details...");

        cy.get('[name="firstName"]').should("be.visible").type(faker.person.firstName());
        cy.get('[name="lastName"]').should("be.visible").type(faker.person.lastName());

        cy.get('[name="email"]').clear().type(Cypress.env("applicantEmail")); // ✅ Use email from the previous test

        cy.get('[name="phoneNumber"]').should("be.visible").type(faker.phone.number("+1##########"));
        cy.get('[name="addressLine1"]').should("be.visible").type(faker.location.streetAddress());
        cy.get('[name="city"]').should("be.visible").type(faker.location.city());
        cy.get('[name="postalCode"]').should("be.visible").type(faker.location.zipCode());

        cy.get('[name="country"]').should("be.visible").select("United States", { force: true });

        cy.log("📌 Clicking 'Save & Continue'...");
        cy.get('[type="submit"]').should("be.visible").click();

        cy.log("✅ Successfully submitted first step of job application!");
    });
});
