const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { t } = require('testcafe');
const URL = 'https://climatecounters.prod.accesssky.com/'


Given ('I am on climate counters home page',async function(){
    await testController.navigateTo(URL);

});
When ('I click the humaninducedWarming link',async function(){
    await testController
    .click(Selector('a').withText('Human Induced Warming'))
});
Then ('I should be able to see humaninducedWarming counter successfully',async function(){



await testController.expect(document.querySelector("#root > div > div")().exists).ok;
  });