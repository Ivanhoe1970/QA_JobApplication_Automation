class CareerHomePage {
  get openRolesButton() {
    return cy.get('a[href="https://apply.workable.com/blacklinesafety/"]');
  }

  clickOpenRoles() {
    this.openRolesButton
      .first() 
      .invoke('removeAttr', 'target')
      .should("be.visible")
      .click();
  }
}

export default new CareerHomePage();
