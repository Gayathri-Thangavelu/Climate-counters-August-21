import { ClientFunction } from 'testcafe';
import CO2 from '../pages/co2Navigatepage';

const URL = 'https://climatecounters.prod.accesssky.com';
const getURL = ClientFunction(() => window.location.href);

fixture`CO2 Fixture`
    .page(URL);
 
test('Assert co2 page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(CO2.exists).ok()
});

test('CO2 Test',async t => {
 t
        .click(Selector('a').withText('Total CO2 Emissions'))
        .expect(getURL())

    
    
})