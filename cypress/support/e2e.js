import './commands'
import 'cypress-plugin-steps';
import "cypress-file-upload"


Cypress.on("uncaught:exception", (err, runnable) => {
    return false;
  });
  