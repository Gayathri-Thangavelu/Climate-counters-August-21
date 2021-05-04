import { ClientFunction } from 'testcafe';
import PowerMix from '../pages/powermixNavigatepage';

const URL = 'https://climatecounters.prod.accesssky.com';
const getURL = ClientFunction(() => window.location.href);

fixture`PowerMix Fixture`
    .page(URL);
 
test('Assert PowerMix page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(PowerMix.exists).ok()
});

test('PowerMix Test',async t => {
 t
        .click(Selector('a').withText('Energy Mix'))
        .expect(getURL())

    
    
})