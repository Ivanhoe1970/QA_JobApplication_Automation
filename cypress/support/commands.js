const faker = require("@faker-js/faker");

Cypress.Commands.add("generateUser", () => {
    return {
        firstName: faker.person.firstName(),
        lastName: faker.person.lastName(),
        email: `test${Date.now()}@${Cypress.env("mailosaurServerId")}.mailosaur.net`,
        password: faker.internet.password({ length: 12, memorable: true, prefix: "Qa#" }),
        phone: faker.phone.number(),
        address: faker.location.streetAddress(),
        city: faker.location.city(),
        postalCode: faker.location.zipCode(),
        country: "Canada"
    };
});
