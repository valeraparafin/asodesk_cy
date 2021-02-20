/// <reference types="cypress" />
import {getToken} from "../Object_library/Get_token";
import 'dayjs';

const dayjs = require('dayjs')

const deviceType = 'iphone';
const GetToken = new getToken();
const favcountryIDs = ["RU", "US", "GB", "DE", "ES", "IT", "FR", "CA", "AU", "BR", "CN"];
const categoryAS = ["36", "3600", "6000", "6001", "6002", "6003", "6004", "6005", "6006", "6007", "6008", "6009", "6010", "6011", "6012", "6013", "6014", "6015", "6016", "6017", "6018", "6020", "6021", "6023", "6024", "6026", "6027", "7001", "7002", "7003", "7004", "7005", "7006", "7009", "7011", "7012", "7013", "7014", "7015", "7016", "7017", "7018", "7019", "10000", "10001", "10002"]; // exclude: id="0", "6025", "7007", "7008",


let todaysDate = dayjs().valueOf() - 14400000;
let prevdaysDate = dayjs().unix() - 200000;

let storeID;
let topChartPos;

describe('AppStore Top #1 from Top-Chart equals CatRank', () => {
    it('Authorize with Front-End', function () {
        GetToken.Authorize();
    });
    for (let country of favcountryIDs) {
        context('Compare positions Top-Chart & CatRank. Locale ' + country, () => {

            for (let categoryId of categoryAS) {

                context('Compare positions Top-Chart & CatRank. Category ' + categoryId, () => {
                    beforeEach('Check response from Top-Chart iPhone', () => {

                        cy.request({
                            method: 'get',
                            followRedirect: true, log: true, //turn off
                            url: 'api/' + country + '/top-charts/?device_type=' + deviceType + '&length=20&list_type=free&start=0&store_id=' + categoryId + '&timestamp=' + todaysDate,
                            headers: {
                                'accept': 'application/json'
                            },
                            response: []
                        })
                            .then((response) => {
                                assert.equal(response.status, 200);
                                let jsonData = response.body;
                                chai.expect(jsonData.recordsTotal).to.not.be.eq(0);
                                topChartPos = jsonData.data.results[0].position;
                                storeID = jsonData.data.results[0].store_id;
                            })

                    })

                    it('Category-Ranking API. Top-chart app #1 should to be equals Cat-Rank position', function () {
                        cy.request({
                            method: 'get',
                            followRedirect: false, log: true, //turn off

                            url: 'api/category-ranking/chart?category=' + categoryId + '&category_list=free&country=' + country + '&device_type=' + deviceType + '&storeids=' + storeID + '&timestamp_since=' + prevdaysDate,
                            headers: {
                                "Authorization": "Token:" + GetToken.token,
                                "sessionid": "" + GetToken.c //sessionid from cookies
                            },
                            response: []
                        })
                            .then((response) => {
                                assert.equal(response.status, 200);

                                if ((response.body.data.length) === 0) {
                                    chai.expect(response.body.data.length).to.not.be.eq(0);
                                } // if response json is empty
                                else {
                                    chai.expect(response.body.data[0].stats[0].y).to.be.eq(topChartPos);
                                } // else response json has data and this data is equal this app position in Top-chart
                            })
                    });

                })

            }
        })
    }
});



