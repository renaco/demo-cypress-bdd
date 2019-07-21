import { Given, Then } from 'cypress-cucumber-preprocessor/steps';

let sum = 0;

Given(`I add all following numbers:`, dataTable => {
  console.log("a", dataTable.rawTable.slice(1))
  cy.log("dataTable test");
});

Then(`I verify the datatable result is equal to {int}`, result => {
  expect(sum).to.equal(result);
});