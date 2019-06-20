Feature: Background Section

  Background:
   Given visit baidu
  
  Scenario: Basic example #1
   When search 'cypress-test' via baidu
   Then the title should contain 'cypress-test'

#  @fouce
#  Scenario: Basic example #2
#    When search 'nightwatch-test' via baidu
#    Then the title should contain 'nightwatch-test'
