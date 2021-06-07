/// <reference types="cypress" />
import {Auth} from "../Classes_library/Auth";
import {Constants} from "../Classes_library/Constants";

const auth = new Auth();
const constant = new Constants();

const favCountryIds = constant.AsFavCountryIds;

const deviceType = constant.AsDeviceType;
const categoryAS = constant.AsAllCategoryIds;

const prevDaysDate = constant.prevDaysDate;
const toDaysDate = constant.toDaysDate;

let storeID;
let topChartPos;

describe('AppStore Top #1 from Top-Chart equals CatRank', () => {
    it('Authorize with Front-End', function () {
        auth.signIn();
        auth.getToken();
    });
    for (let country of favCountryIds) {
        context('Compare positions Top-Chart & CatRank. Locale ' + country, () => {

            for (let categoryId of categoryAS) {

                context('Compare positions Top-Chart & CatRank. Category ' + categoryId, () => {
                    beforeEach('Check response from Top-Chart iPhone', () => {
                        cy.request({
                            method: 'get',
                            followRedirect: true, log: true, //turn off
                            url: 'api/' + country + '/top-charts/?device_type=' + deviceType + '&length=20&list_type=free&start=0&store_id=' + categoryId + '&timestamp=' + toDaysDate,
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

                            url: 'api/category-ranking/chart?category=' + categoryId + '&category_list=free&country=' + country + '&device_type=' + deviceType + '&storeids=' + storeID + '&timestamp_since=' + prevDaysDate,
                            headers: {
                                //'Authorization': 'Token:' + auth.token,
                                'Authorization': '' + auth.token,
                                'sessionid': '' + auth.session //sessionid from cookies
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



