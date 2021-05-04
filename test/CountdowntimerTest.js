import { ClientFunction } from 'testcafe';
import CountdownTimer from '../pages/countdowntNavigatepage';

const URL = 'https://climatecounters.prod.accesssky.com';
const getURL = ClientFunction(() => window.location.href);

fixture`countdown page Fixture`
    .page(URL);
 
test('Assert countdowntimer page', async t => {
    await t
    .expect(getURL()).eql(URL)
    .takeScreenshot()
    .expect(CountdownTimer.exists).ok()
});

test('countdownTimer Test',async t => {
 t
 .click (Selector('a').withText('Countdown Timer'))
        .expect(getURL())

    
    
})