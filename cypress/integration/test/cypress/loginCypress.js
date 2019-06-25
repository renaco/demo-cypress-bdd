import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

Given('load homepage', () => {
  cy.visit('https://www.cypress.io/')
});

Then('login into dashboard', () => {
  cy.get('.header__HeaderContent-xi2ch0-1 > .header__AltMenu-xi2ch0-4 > .header__NavList-xi2ch0-5 > .header__NavItem-xi2ch0-6 > .Button__Link-sc-1jou7w8-0').click()
  cy.visit('https://dashboard.cypress.io/#/login')
  cy.get('.login-content > .login-right > form > .form-content > .btn-github').click()
  cy.visit('https://dashboard.cypress.io/#/projects/runs')
})