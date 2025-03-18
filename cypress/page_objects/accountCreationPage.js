class AccountCreationPage {
    createAccount(user) {
        cy.log("🔹 Filling out account details...");
        cy.get('[type="email"]').type(user.email);
        cy.get('#passwordFormNewPasswordInputField').type(user.password);
        cy.get('#passwordFormConfirmNewPasswordInputField').type(user.password);
        cy.get('[type="submit"]').click();
    }
}

export default new AccountCreationPage();
