import applicationPage from "../page_objects/ApplicationPage";
import { faker } from "@faker-js/faker";

beforeEach(() => {
  cy.visit("https://apply.workable.com/blacklinesafety/j/1F52CB43BB/");

  cy.get("body").then(($body) => {
    if ($body.find(".primary--25RCR").length) {
      cy.get(".primary--25RCR").click({ force: true });
    }
  });
});

describe("Blackline Safety Careers - Application Form", () => {
  it("Opens and fills out the form, removing backdrops forcibly", () => {
    applicationPage.openApplicationForm();

    const formData = {
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      email: faker.internet.email(),
      phone: faker.phone.number("###-###-####")
    };

    applicationPage.fillPersonalInfo(formData);
    applicationPage.fillEligibility(true);

    cy.get('#firstname').should('have.value', formData.firstName);
    cy.get('#email').should('have.value', formData.email);

    cy.log("✅ Form filled successfully, no backdrop issues!");
  });
});
