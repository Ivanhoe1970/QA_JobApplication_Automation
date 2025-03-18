import searchPage from "../page_objects/SearchPage";

describe("Amazon Job Search Test", () => {
  it("Searches for a QA job and navigates to job details", () => {
    cy.visit("https://www.amazon.jobs/en/");

    cy.log("Waiting for job search input...");
    cy.wait(2000); 

    searchPage.searchJob("QA Engineer");

    cy.log("Verifying search results are displayed...");
    cy.get('.job-tile')
      .should("exist")
      .and("be.visible");

    cy.log("✅ Job search results are visible!");

    cy.log("Clicking the first job link...");
    cy.get('.job-link').first().click({ force: true });

    cy.log("Waiting for navigation...");
    cy.wait(5000); // Allow time for page transition

    cy.log("Verifying we navigated to the job details page...");
    cy.url().should("match", /\/en\/jobs\/\d+/); // Match job details URL pattern

    cy.log("Clicking the Apply Now button...");
    searchPage.clickApplyNow();
  });
});
