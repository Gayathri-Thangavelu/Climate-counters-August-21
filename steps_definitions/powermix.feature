Feature: Navigate to climate counters-powermix
Scenario: Navigate to powerMix page
Given I am on climate counters home page
When I click the powerMix link
Then I should be able to see powerMix counter successfully
When I click the source link
Then I should be able to see https://carbonintensity.org.uk/ source page successfully