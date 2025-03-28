class WorkableSearchPage {
  get searchInput() {
    return cy.get('input[placeholder="Search jobs…"]')};

  searchJob(jobTitle) {
    cy.get('div[data-ui="backdrop"]', { timeout: 10000 }).should('not.exist');
    this.searchInput.clear({ force: true }).type(jobTitle, { force: true });
  }

  clickQualityTechnician() {
    cy.get('[aria-labelledby="1F52CB43BB_title 1F52CB43BB_posted_on 1F52CB43BB_department 1F52CB43BB_locations"]', { timeout: 20000 })
    .scrollIntoView()  
    .should("be.visible")
    .click({ force: true });
  }
  
}

export default new WorkableSearchPage();
