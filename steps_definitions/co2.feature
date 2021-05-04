Feature: Navigate to climate counters-co2
Scenario: Navigate to co2Emission page
Given I am on climate counters home page
When I click the co2Emission link
Then I should be able to see co2Emission counter successfully
When I click the source link
Then I should be able to see https://www.globalwarmingindex.org/ source page successfully