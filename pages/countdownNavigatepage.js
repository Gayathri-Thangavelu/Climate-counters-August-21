
import { Selector,t } from 'testcafe';

class CountdownTimer{
    constructor() {
    this.page = Selector('https://climatecounters.prod.accesssky.com/')
      
      this.countdownLink = (Selector('a').withText('Countdown Timer'))
    
    
}

export default new CountdownTimer();