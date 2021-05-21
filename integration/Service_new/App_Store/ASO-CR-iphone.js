/// <reference types="cypress" />
import {GetToken} from "../Object_library/Get_token";
import {Constants} from "../Object_library/Constants";
import {Functions} from "../Object_library/Functions";

const getToken = new GetToken();
const constants = new Constants();
const functions = new Functions();

const favCountryIds = constants.AsFavCountryIds;
const favStoreIds = constants.AsFavStoreIds;

const prevDaysDate = constants.prevDaysDate;
const toDaysDate = constants.toDaysDate;

describe('Healthy check ASO Comparative Report Chart', () => {
    it('Authorize with Front-End', function () {
        getToken.authorize();
        functions.setClearRank(true);
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
                            'Authorization': 'Token:' + getToken.token,
                            'sessionid': '' + getToken.c //sessionid from cookies
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



