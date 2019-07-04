import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

const url = "https://neoauto.com/";
const titlePortal = "Compra y Venta de autos y motos | NeoAuto"

Given('Abro el portal NeoAuto', () => {
  cy.visit(url);
});

Then('Debe tener el texto "Compra y Venta de autos y motos | NeoAuto" en el titulo', () => {
  cy.title().should('eq', titlePortal);
})