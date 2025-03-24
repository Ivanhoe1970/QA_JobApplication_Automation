const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1400,
    viewportHeight: 1200,
    chromeWebSecurity: false,
    experimentalSessionAndOrigin: true
  }
});
