import { Selector,t } from 'testcafe';

class CO2{
    constructor() {
    this.page = Selector('https://climatecounters.prod.accesssky.com/')
      this.co2link = (Selector('a').withText('Total CO2 Emissions'))
    }

  export default new CO2();