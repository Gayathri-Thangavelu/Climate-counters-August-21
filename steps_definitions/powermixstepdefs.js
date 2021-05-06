const { t } = require('testcafe');
const URL = 'https://climatecounters.prod.accesssky.com/'


Given ('I am on climate counters home page',async function(){
    await testController.navigateTo(URL);

});
When ('I click the powerMix link',async function(){
    await testController
    .click(Selector('a').withText('Energy Mix'))
});
Then ('Then I should be able to see Energy Mix counter successfully',async function(){


await testController.expect(document.querySelector("#root > div")().exists).ok;
  });