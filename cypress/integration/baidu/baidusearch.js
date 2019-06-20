import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
 
Given('visit baidu', () => {
  cy.visit('')
})
 
When('search {string} via baidu', () => {
  cy.baiduSearch(searchContent)
})
 
Then('the title should contain {string}', () => {
  cy.title().should('include', searchContent)
})