import careerHomePage from "../page_objects/CareerHomePage";

function removeBackdropIfPresent() {
  cy.get('body').then(($body) => {
    const backdrop = $body.find('div[data-ui="backdrop"]');
    if (backdrop.length && backdrop.is(':visible')) {
      cy.wrap(backdrop).invoke('remove');
      cy.log("✅ Force-removed the backdrop overlay");
    }
  });
}

describe("Blackline Safety Careers Home Page", () => {
  beforeEach(() => {
    cy.visit("https://careers.blacklinesafety.com/home");
    removeBackdropIfPresent();
    cy.get("body").then(($body) => {
      if ($body.find(".primary--25RCR").length > 0) {
        cy.get(".primary--25RCR").click({ force: true });
      }
    });
  });

  it("Loads the home page and clicks 'Open roles'", () => {
    careerHomePage.clickOpenRoles();
    cy.wait(5000);
    cy.url().should("include", "apply.workable.com/blacklinesafety");
  });
});
