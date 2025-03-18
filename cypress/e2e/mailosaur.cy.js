describe("Verify Mailosaur API Integration", () => {
    it("Should successfully connect to Mailosaur and retrieve emails", () => {
      cy.request({
        method: "GET",
        url: `https://mailosaur.com/api/messages`,
        headers: {
          Authorization: `Basic ${btoa(Cypress.env("mailosaurApiKey"))}`,
        },
        qs: {
          server: Cypress.env("mailosaurServerId"),
        },
      }).then((response) => {
        expect(response.status).to.eq(200);
        cy.log("✅ Mailosaur API is working!");
      });
    });
  });
  