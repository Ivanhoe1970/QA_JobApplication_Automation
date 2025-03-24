class ApplicationPage {
  openApplicationForm() {
    cy.get('div[data-ui="backdrop"]', { timeout: 10000 }).should('not.exist');
    cy.contains("Apply").click({ force: true });
    cy.get('#firstname', { timeout: 20000 }).should('be.visible');
  }

  fillPersonalInfo(data) {
    cy.get('#firstname').clear({ force: true }).type(data.firstName, { force: true });
    cy.get('#lastname').clear({ force: true }).type(data.lastName, { force: true });
    cy.get('#email').clear({ force: true }).type(data.email, { force: true });
    cy.get('input[name="phone"]').clear({ force: true }).type(data.phone, { force: true });
  }

  fillEligibility(isEligible) {
    if (isEligible) {
      cy.contains("YES", { timeout: 10000 })
        .should("be.visible")
        .click({ force: true });
    }
  }

  uploadResume(fileName) {
    cy.get('#description_input_BySIFqk0Ym5EZAec').attachFile(fileName);
  }

  submitApplication() {
    cy.get('button').contains('Submit application').click();
  }
}

export default new ApplicationPage();
