const {Selector} = require('testcafe');

exports.elements = {
messageElement: function() {
    
            return Selector('#root > div > div > div.sdc-climate-counter__contents > h3').with({ boundTestRun: testController })
            
        }
    }
