import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = 'https://www.cypress.io/'
const titleWeb = 'JavaScript End to End Testing Framework | cypress.io'

Given('visit cypress.io', () => {
  cy.visit(url);
});

Then('the title should contain "JavaScript End to End Testing Framework | cypress.io"', () => {
  cy.title().should('include', titleWeb);
});
