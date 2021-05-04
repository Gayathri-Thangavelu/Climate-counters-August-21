const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { t } = require('testcafe');
const URL = 'https://climatecounters.prod.accesssky.com/'


Given ('I am on climate counters home page',async function(){
    await testController.navigateTo(URL);

});
When ('I click the co2Emission link',async function(){
    await testController
    .click(Selector('a').withText('Total CO2 Emissions'))
});
Then ('Then I should be able to see co2Emission counter successfully',async function(){
   // await t
    //.navigateTo('#root > div > div > div.sdc-climate-counter__contents > h3')


await testController.expect(document.querySelector("#root > div > div > div.sdc-climate-counter__contents")().exists).ok;
  });