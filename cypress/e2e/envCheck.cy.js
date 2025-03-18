describe("Verify Cypress Environment Variables", () => {
    it("Checks that environment variables are set", () => {
        cy.log("📌 Mailosaur Server ID:", Cypress.env("mailosaurServerId"));
        cy.log("📌 Mailosaur API Key:", Cypress.env("mailosaurApiKey"));
        
        expect(Cypress.env("mailosaurServerId")).to.not.be.undefined;
        expect(Cypress.env("mailosaurApiKey")).to.not.be.undefined;
    });
});
