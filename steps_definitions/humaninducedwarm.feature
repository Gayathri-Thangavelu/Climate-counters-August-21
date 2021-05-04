Feature: Navigate to climate counters-humaninducedWarming

Scenario: Navigate to humaninducedWarming page
Given I am on climate counters home page
When I click the humaninducedWarming link
Then I should be able to see humaninducedWarming counter successfully
When I click the source link
Then I should be able to see https://www.globalwarmingindex.org/ source page successfully