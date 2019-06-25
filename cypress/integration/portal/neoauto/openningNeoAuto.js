import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = "https://neoauto.com/";
const titlePortal = "Compra y Venta de autos y motos | NeoAuto"

Given('I need open NeoAuto portal', () => {
  cy.visit(url);
});

Then('I will see "Compra y Venta de autos y motos | NeoAuto" in title', () => {
  cy.title().should('eq', titlePortal);
})