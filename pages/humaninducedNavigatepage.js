
import { Selector,t } from 'testcafe';

class Humaninduced{
    constructor() {
    this.page = Selector('https://climatecounters.prod.accesssky.com/')
      this.humaninducedwarmLinklink = (Selector('a').withText('Human Induced Warming'))
}

export default new Humaninduced();