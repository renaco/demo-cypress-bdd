Feature: Background Section
    
   Background:
    Given visit baidu
  
   Scenario: Basic example #1
     When search cypress-test via baidu
     Then the title should contain cypress-test