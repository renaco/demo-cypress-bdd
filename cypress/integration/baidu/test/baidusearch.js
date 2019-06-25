import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';

const urlWeb = 'https://www.cypress.io/'
const titleWeb = 'JavaScript End to End Testing Framework | cypress.io'

Given('visit baidu', () => {
  cy.visit(urlWeb);
})

// When('search {string} via baidu', () => {
//   cy.baiduSearch(searchContent)
// })

Then('the title should contain {string}', () => {
  cy.title().should('include', titleWeb)
})
