Feature: Navigate to climate counters-countdownTimer 

Scenario: Navigate to countdownTimer page
Given I am on climate counters home page
When I click the countdownTimer link
Then I should be able to see countdownTimer counter successfully
When I click the source link
Then I should be able to see Concordia clock source page successfully