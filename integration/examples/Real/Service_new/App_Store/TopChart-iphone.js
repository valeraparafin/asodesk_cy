/// <reference types="cypress" />
import 'dayjs';

const dayjs = require('dayjs')

const login = 'iparafin@yandex.ru'
const password = 'A123321b'

let todaysDate = dayjs().valueOf() - 14400000;

const favcountryID = ["RU", "US", "GB", "DE", "ES", "IT", "FR", "CA", "AU", "BR", "CN"]
const CountryID = ["bb", "uz", "ch", "es", "lb", "ng", "mx", "eg", "cm", "uy", "th", "my", "bm", "cn", "gb", "il", "ec", "is", "hk", "in", "tw", "si", "nz", "ua", "cz", "do", "kw", "tr", "kr", "rs", "it", "vn", "sk", "sv", "no", "bh", "al", "ca", "kz", "qa", "ph", "pe", "by", "sa", "fr", "ge", "om", "kg", "ke", "hr", "kh", "ve", "ie", "pa", "az", "dz", "gt", "am", "py", "mt", "au", "be", "ae", "at", "hn", "za", "nl", "ru", "cy", "gh", "ar", "sg", "mo", "lk", "dk", "ni", "br", "bg", "pk", "lt", "sn", "cl", "us", "cr", "mg", "ao", "lu", "pt", "fi", "pl", "de", "jp", "co", "ee", "hu", "gr", "ug", "se", "tn", "lv", "ro", "id", "bo"]
const categoryAS = ["36", "3600", "6000", "6001", "6002", "6003", "6004", "6005", "6006", "6007", "6008", "6009", "6010", "6011", "6012", "6013", "6014", "6015", "6016", "6017", "6018", "6020", "6021", "6023", "6024", "6026", "6027", "7001", "7002", "7003", "7004", "7005", "7006", "7009", "7011", "7012", "7013", "7014", "7015", "7016", "7017", "7018", "7019", "10000", "10001", "10002"]; // exclude: id="0", "6025", "7007", "7008",
const deviceType = 'iphone'
//const deviceType = 'ipad'

for (let i = 0; i <= favcountryID.length - 1; i++) {
    for (let n = 0; n <= categoryAS.length - 1; n++) {
        context('Check response from Top-Chart iPhone. Category ' + categoryAS[n] + ' Local ' + favcountryID[i], () => {
            beforeEach(() => {
                //  cy.visit('https://hq.asodesk.com')

            })

            it('Top-Chart API. Check data on RecordsTotal != 0', () => {
                cy.request({
                    method: 'get',
                    followRedirect: true, log: true, //turn off
                    url: 'api/' + favcountryID[i] + '/top-charts/?device_type=' + deviceType + '&length=20&list_type=free&start=0&store_id=' + categoryAS[n] + '&timestamp=' + todaysDate,
                    headers: {
                        'accept': 'application/json'
                    },
                    response: []
                })
                    .then((response) => {

                        //   console.log(response.body);
                        assert.equal(response.status, 200);
                        chai.expect(response.body.recordsTotal).to.not.be.eq(0)
                        /* if (response.body.recordsTotal == 0) {
                             console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST FAILED');
                         } else {
                             console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST PASSED');
                         }*/
                    })
                cy.request({
                    method: 'get',
                    followRedirect: true, log: true, //turn off
                    url: 'api/' + favcountryID[i] + '/top-charts/?device_type=' + deviceType + '&length=20&list_type=paid&start=0&store_id=' + categoryAS[n] + '&timestamp=' + todaysDate,
                    headers: {
                        'accept': 'application/json'
                    },
                    response: []
                })
                    .then((response) => {

                        //  console.log(response.body);
                        assert.equal(response.status, 200);
                        chai.expect(response.body.recordsTotal).to.not.be.eq(0)
                        /* if (response.body.recordsTotal == 0) {
                             console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST FAILED');
                         } else {
                             console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST PASSED');
                         }*/
                    })

            })
        })
    }
}


