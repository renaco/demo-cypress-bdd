Feature: Test

  I want to open baidu

  Scenario: Basic example #1
   Given visit baidu
  #  When search 'cypress-test' via baidu
   Then the title should contain 'JavaScript End to End Testing Framework | cypress.io'

#  @fouce
#  Scenario: Basic example #2
#    When search 'nightwatch-test' via baidu
#    Then the title should contain 'nightwatch-test'
