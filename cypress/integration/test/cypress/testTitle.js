import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const urlWeb = 'https://www.cypress.io/'
const titleWeb = 'JavaScript End to End Testing Framework | cypress.io'

Given('visit baidu', () => {
  cy.visit(urlWeb);
})

Then('the title should contain "JavaScript End to End Testing Framework | cypress.io"', () => {
  cy.title().should('include', titleWeb)
})
