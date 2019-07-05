Feature: Cypress

  I want to open cypress.io

  Scenario: Example #1 Load Cypress
   Given visit cypress.io
   # When search 'cypress-test' via cypress.io
   Then the title should contain "JavaScript End to End Testing Framework | cypress.io"

  # @fouce
  Scenario: Example #2 Login Cypress
    Given load homepage
    Then login into dashboard
