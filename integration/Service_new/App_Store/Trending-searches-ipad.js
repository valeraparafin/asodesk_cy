import {Auth} from "../Classes_library/Auth";
import {Constants} from "../Classes_library/Constants";
import 'dayjs';

const dayjs = require('dayjs');
const auth = new Auth();
const constant = new Constants();

const favCountryIds = constant.AsFavCountryIds;
const prevDaysDate = constant.s_toDaysDate;
const deviceType = constant.AsDeviceTypePad;

let resp = null;

describe('Trending Searches Health-check.', () => {
    it('Obtain token', function () {
        auth.obtain();
    });

    for (let country of favCountryIds) {
        context('Trending Searches. Device: ' + deviceType + '. Local: ' + country.toUpperCase(), () => {
            it('Response should equal 200', () => {
                cy.request({
                    method: 'get',
                    followRedirect: false, log: true, //turn off
                    url: 'api/' + country + '/trending-searches/?device=' + deviceType + '&timestamp=' + prevDaysDate,
                    headers: {
                        'accept': 'application/json',
                        'Authorization': 'Token:' + auth.token,
                    },
                    response: []
                })
                    .then((response) => {
                        assert.equal(response.status, 200);
                        resp = response.body;
                    })
            })

            context('Minimum 4 keywords in object', () => {
                for (let f = 0; f <= 7; f++) {
                    it('Ojbect #' + f + ' has min number of keywords = 4', () => {
                        expect(resp.results[f].keywords.length).to.be.greaterThan(3);
                    })
                }

            })

            context('Minimum 3 hours gap between objects', () => {
                for (let f = 0; f < 7; f++) {
                    it('Ojbect #' + f + ' and Object #' + (f + 1) + ' has minimum hours gap = 3', () => {
                        const date1 = dayjs(resp.results[f].timestamp);
                        const date2 = dayjs(resp.results[f + 1].timestamp);
                        const result = date1.diff(date2, 'hour', true);
                        expect(Math.round(result)).to.be.greaterThan(2)
                    })
                }
            })

            context('Apps per keyword is equal 3', () => {
                for (let f = 0; f <= 7; f++) {
                    it('Ojbect #' + f + ' has 4 keywords with 3 apps', () => {
                        for (let i = 0; i <= 3; i++) {
                            let apps = resp.results[f].keywords[i].apps.length;
                            expect(apps).equal(3);
                        }
                    })
                }
            })

        })
    }
})
