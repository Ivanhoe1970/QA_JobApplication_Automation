export function getLatestEmail(emailAddress) {
    return cy.request({
        method: "GET",
        url: `https://mailosaur.com/api/messages?server=${Cypress.env("mailosaurServerId")}`,
        headers: {
            Authorization: `Basic ${btoa(Cypress.env("mailosaurApiKey"))}`
        }
    }).then((response) => {
        if (!response.body || response.body.items.length === 0) {
            return cy.wrap(null); // Return null if no emails are found
        }

        const latestEmail = response.body.items.find((email) => email.to[0].email === emailAddress);

        if (!latestEmail) {
            return cy.wrap(null); // Return null if no matching email
        }

        return cy.wrap(latestEmail); // ✅ Wrap email in Cypress chain
    });
}
