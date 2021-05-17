/// <reference types="cypress" />
import {getToken} from "../Object_library/Get_token";
import {Constants} from "../Object_library/Constants";

const GetToken = new getToken();
const constants = new Constants();

const favCountryIds = constants.AsFavCountryIds;
const favStoreIds = constants.AsFavStoreIds;

const prevDaysDate = constants.prevDaysDate;
const toDaysDate = constants.toDaysDate;

describe('Healthy check ASO Comparative Report Chart with no ClearRank', () => {
    it('Authorize with Front-End', function () {
        GetToken.Authorize();

        cy.get('.profileDropdown__toggle').click();
        cy.get('[href="/settings/profile"]').click();
        cy.wait(500);
        cy.get('#id_is_clear_rank').uncheck({force: true}).should('not.be.checked');
        cy.wait(500);
        cy.get(':nth-child(7) > .col-xs-12 > .btn-success').click();

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
                            'Authorization': 'Token:' + GetToken.token,
                            'sessionid': '' + GetToken.c //sessionid from cookies
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



