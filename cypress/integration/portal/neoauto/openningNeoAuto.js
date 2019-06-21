import { Given } from "cypress-cucumber-preprocessor/steps";

const url = "https://neoauto.com";

Given('I need open NeoAuto portal', () => {
    cy.visit(url);
});