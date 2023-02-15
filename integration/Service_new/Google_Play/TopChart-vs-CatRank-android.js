/// <reference types="cypress" />
import {Auth} from "../Classes_library/Auth";
import {Constants} from "../Classes_library/Constants";

const auth = new Auth();
const constant = new Constants();

const favCountryIds = constant.GpFavCountryIds;
const categoryGP = constant.GpAllCategoryIds;
const deviceType = constant.GpDeviceType;

const prevDaysDate = constant.prevDaysDate;
const toDaysDate = constant.toDaysDate_topChart;

let storeID;
let topChartPos;

describe('Android Top #1 from Top-Chart equals CatRank', () => {
    it('Authorize with API', function () {
        auth.obtain();
    });

    for (let country of favCountryIds) {
        context('Compare positions Top-Chart & CatRank. Locale ' + country.toUpperCase(), () => {
            for (let categoryId of categoryGP) {

                context('Compare positions Top-Chart & CatRank. Category: ' + categoryId, () => {
                    beforeEach('Check response from Top-Chart Android', () => {
                        cy.request({
                            method: 'get',
                            followRedirect: true, log: true, //turn off
                            url: 'api/' + country + '/top-charts/?device_type=' + deviceType + '&length=20&list_type=free&start=0&store_id=' + categoryId + '&timestamp=' + toDaysDate,
                            headers: {
                                'accept': 'application/json',
                                'Authorization': auth.token
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
                                'accept': 'application/json',
                                'Authorization': auth.token,
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


