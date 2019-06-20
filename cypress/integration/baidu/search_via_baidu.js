import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
 
Given('visit baidu', () => {
  cy.visit('')
})
 
When('search cypress-test via baidu', ()=>{
  cy.baiduSearch('cypress-test')
})
 
Then('the title should contain cypress-test', ()=>{
  cy.title().should('include','cypress-test')
})