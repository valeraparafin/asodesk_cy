/// <reference types="cypress" />
import {getToken} from "../Object_library/Get_token";
import 'dayjs';

const dayjs = require('dayjs')

const GetToken = new getToken();

const favCountryIds = ["RU", "US", "GB", "DE", "ES", "IT", "FR", "CA", "AU", "BR"];
const favStoreIds = ["com.spotify.music", "com.bpmobile.iscanner.free", "com.zhiliaoapp.musically", "com.snapchat.android"]; //spotify, pdf scanner, tiktok, snapchat

let prevDaysDate = dayjs().unix() - 200000; //- 10000;
let toDaysDate = dayjs().unix() - 4780; //
//let monthAgo = dayjs().unix() - 2739405;

let isNull;

describe('Healthy check ASO Comparative Report Chart with no ClearRank', () => {
    it('Authorize with Front-End', function () {
        GetToken.Authorize();

        cy.get('.profileDropdown__toggle').click();
        cy.get('[href="/settings/profile"]').click();
        cy.wait(500);
        cy.get('#id_is_clear_rank').uncheck({force: true})
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
                            for (let j = 0; j <= response.body.data.length - 1; j++) {
                                let monthData = response.body.data[j];

                                context('Find me a worsest day', () => {
                                    //Check only last date
                                    if ((monthData.data[1] + monthData.data["2-5"] + monthData.data["6-10"] + monthData.data["11-20"] + monthData.data["21-50"] + monthData.data["51-100"]) === 0) {
                                        isNull = true
                                        chai.expect(isNull).to.be.false

                                    } else {
                                        cy.log('Everything is OK!')
                                    }
                                });
                            }
                        })
                })
            }
        })
    }
});



