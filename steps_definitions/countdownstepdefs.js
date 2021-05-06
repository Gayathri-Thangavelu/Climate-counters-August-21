const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { t } = require('testcafe');
const URL = 'https://climatecounters.prod.accesssky.com/'


Given ('I am on climate counters home page',async function(){
    await testController.navigateTo(URL);

});
When ('I click the countdownTimer link',async function(){
    await testController
    .click(Selector('a').withText('Countdown Timer'))
});
Then ('Then I should be able to see countdownTimer counter successfully',async function(){
  await testController.expect(document.querySelector("#root > div > div")().exists).ok;
  });