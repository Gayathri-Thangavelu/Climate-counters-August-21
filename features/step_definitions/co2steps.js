const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
const { Selector } = require('testcafe');
const co2Page = require('../support/pages/co2Page.js');
const URL = 'https://climatecounters.prod.accesssky.com/'


       Given('I am on climate counters home page',async function () {
        await testController.navigateTo(URL)
      });
    

      When('I click the co2Emission link', async function () {
        await testController.click(Selector('a').withText('Total CO2 Emissions'))
      });
      

      Then('I am on the Total CO2 Emmisions page', async function () {
        
      // const headingMessageElement = co2Page.elements.messageElement()
    //  await testController.expect(headingMessageElement.innerText).contains('Total CO2 Emmissions (Million Tonnes)')

      });