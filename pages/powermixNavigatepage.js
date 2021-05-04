import { Selector,t } from 'testcafe';

class PowerMix{
    constructor() {
    this.page = Selector('https://climatecounters.prod.accesssky.com/')
      this.co2link = (Selector('a').withText('Energy Mix'))
    }

    export default new PowerMix();