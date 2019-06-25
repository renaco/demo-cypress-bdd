Feature: Cypress

  I want to open cypress.io

  Scenario: Basic example #1
   Given visit cypress.io
  #  When search 'cypress-test' via cypress.io
   Then the title should contain 'JavaScript End to End Testing Framework | cypress.io'

#  @fouce
#  Scenario: Basic example #2
#    When search 'nightwatch-test' via cypress.io
#    Then the title should contain 'nightwatch-test'
