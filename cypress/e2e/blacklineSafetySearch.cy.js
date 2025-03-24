import workableSearchPage from "../page_objects/WorkableSearchPage";

function removeBackdropIfPresent() {
  cy.get('body').then(($body) => {
    const backdrop = $body.find('div[data-ui="backdrop"]');
    if (backdrop.length && backdrop.is(':visible')) {
      cy.wrap(backdrop).invoke('remove');
      cy.log("✅ Force-removed the backdrop overlay");
    }
  });
}

beforeEach(() => {
  cy.visit("https://apply.workable.com/blacklinesafety/");
  removeBackdropIfPresent();
  cy.get("body").then(($body) => {
    if ($body.find(".primary--25RCR").length > 0) {
      cy.get(".primary--25RCR").click({ force: true });
    }
  });
});

describe("Blackline Safety Careers - Search Functionality", () => {
  it("Searches for 'Quality Technician' and clicks the job listing", () => {
    workableSearchPage.searchJob("Quality Technician");
    workableSearchPage.clickQualityTechnician();
    cy.wait(5000);
    cy.url({ timeout: 10000 }).should("include", "/j/");
    cy.log("✅ Successfully navigated to a job detail page");
  });
});
