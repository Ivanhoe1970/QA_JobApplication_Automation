const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.amazon.jobs/en/", // Main careers site
    viewportWidth: 1400,  // Updated width
    viewportHeight: 1200, // Updated height
    defaultCommandTimeout: 8000,
    retries: 2,
    setupNodeEvents(on, config) {
      // Implement node event listeners here
    },
  },
});
