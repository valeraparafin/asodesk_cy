/// <reference types="cypress" />
import {Auth} from "../Classes_library/Auth";
import {Constants} from "../Classes_library/Constants";
import {Commands} from "../Classes_library/Commands";

const auth = new Auth();
const constant = new Constants();
const command = new Commands();

const favCountryIds = constant.AsFavCountryIds;
const favStoreIds = constant.AsFavStoreIds;

const prevDaysDate = constant.prevDaysDate;
const toDaysDate = constant.toDaysDate;

describe('Healthy check ASO Comparative Report Chart with no ClearRank', () => {
    it('Authorize with Front-End', function () {
        auth.signIn();
        auth.getToken();
        command.setClearRank(false);
    });

    for (let storeId of favStoreIds) {
        context('Check App by Store id: ' + storeId, () => {

            for (let country of favCountryIds) {

                it('Check App in Locale: ' + country, () => {
                    cy.request({
                        method: 'get',
                        followRedirect: false, log: true, //turn off
                        url: 'api/' + country + '/' + storeId + '/comparative-report-chart?time_since=' + prevDaysDate + '&time_till=' + toDaysDate,
                        headers: {
                            'Authorization': '' + auth.token,
                            'sessionid': '' + auth.session //sessionid from cookies
                        },
                        response: []
                    })
                        .then((response) => {
                            assert.equal(response.status, 200);
                            for (let j = 0; j <= response.body.data.length - 1; j++) {
                                let monthData = response.body.data[j];
                                let counter = (monthData.data["1"] + monthData.data["2-5"] + monthData.data["6-10"] + monthData.data["11-20"] + monthData.data["21-50"] + monthData.data["51-100"]);
                                context('Find me a worsest day', () => {
                                    //Check three last days
                                    counter === 0 ? assert.equal(counter, !0, 'Sum of Top Keywords equals ' + counter) : cy.log('Everything is OK! Sum of Top Keywords equals ' + counter)

                                });
                            }
                        })
                })
            }
        })
    }
});



