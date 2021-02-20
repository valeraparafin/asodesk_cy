/// <reference types="cypress" />
import {getToken} from "../Object_library/Get_token";
import 'dayjs';

const dayjs = require('dayjs')

const GetToken = new getToken();

const favCountryIds = ["RU", "US", "GB", "DE", "ES", "IT", "FR", "CA", "AU", "BR"];
const favStoreIds = ["com.spotify.music", "ru.yandex.yandexmaps", "com.zhiliaoapp.musically", "com.snapchat.android"]; //spotify, yamaps, tiktok, snapchat

let prevDaysDate = dayjs().unix() - 200000;
let monthAgo = dayjs().unix() - 2739405;

let isNull;

describe('Healthy check ASO Comparative Report Chart', () => {
    it('Authorize with Front-End', function () {
        GetToken.Authorize();
    });

    for (let storeId of favStoreIds) {
        context('Check App by Store id: ' + storeId, () => {

            for (let country of favCountryIds) {

                it('Check App in Locale: ' + country, () => {
                    cy.request({
                        method: 'get',
                        followRedirect: false, log: true, //turn off

                        url: 'api/' + country + '/' + storeId + '/comparative-report-chart?time_since=' + monthAgo + '&time_till=' + prevDaysDate,
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



