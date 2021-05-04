import { ClientFunction } from 'testcafe';
import Humaninduced from '../pages/humaninducedNavigatepage';

const URL = 'https://climatecounters.prod.accesssky.com';
const getURL = ClientFunction(() => window.location.href);

fixture`Humaninduced Fixture`
    .page(URL);
 
test('Assert Humaninduced page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(Humaninduced.exists).ok()
});

test('Humaninduced Test',async t => {
 t
        .click(Selector('a').withText('Human Induced Warming'))
        .expect(getURL())

    
    
})