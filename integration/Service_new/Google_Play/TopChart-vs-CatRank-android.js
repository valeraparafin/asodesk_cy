/// <reference types="cypress" />
import {getToken} from "../Object_library/Get_token";
import 'dayjs';

const dayjs = require('dayjs')

const deviceType = 'googleplay';
const GetToken = new getToken();
const favcountryIDs = ["RU", "US", "GB", "DE", "ES", "IT", "FR", "CA", "AU", "BR", "CN"];
const categoryGP = ["ANDROID_WEAR", "ART_AND_DESIGN", "AUTO_AND_VEHICLES", "BEAUTY", "BOOKS_AND_REFERENCE", "BUSINESS", "CATEGORY_ALL", "COMICS", "COMMUNICATION", "DATING", "EDUCATION", "ENTERTAINMENT", "EVENTS", "HEALTH_AND_FITNESS", "HOUSE_AND_HOME", "LIBRARIES_AND_DEMO", "LIFESTYLE", "MAPS_AND_NAVIGATION", "MEDICAL", "MUSIC_AND_AUDIO", "NEWS_AND_MAGAZINES", "PARENTING", "PERSONALIZATION", "PHOTOGRAPHY", "PRODUCTIVITY", "SHOPPING", "SOCIAL", "SPORTS", "TOOLS", "TRAVEL_AND_LOCAL", "VIDEO_PLAYERS", "WEATHER"];
// exlude "FAMILY", "FAMILY_ACTION", "FAMILY_BRAINGAMES", "FAMILY_CREATE", "FAMILY_EDUCATION", "FAMILY_MUSICVIDEO", "FAMILY_PRETEND", "FINANCE", "FOOD_AND_DRINK", "GAME", "GAME_ACTION", "GAME_ADVENTURE", "GAME_ARCADE", "GAME_BOARD", "GAME_CARD", "GAME_CASINO", "GAME_CASUAL", "GAME_EDUCATIONAL", "GAME_MUSIC", "GAME_PUZZLE", "GAME_RACING", "GAME_ROLE_PLAYING", "GAME_SIMULATION", "GAME_SPORTS", "GAME_STRATEGY", "GAME_TRIVIA", "GAME_WORD",

let todaysDate = dayjs().valueOf() - 14400000;
let prevdaysDate = dayjs().unix() - 200000;

let storeID;
let topChartPos;

describe('Android Top #1 from Top-Chart equals CatRank', () => {
    it('Authorize with Front-End', function () {
        GetToken.Authorize();
    });

    for (let country of favcountryIDs) {
        context('Compare positions Top-Chart & CatRank. Locale ' + country, () => {
            for (let categoryId of categoryGP) {

                context('Compare positions Top-Chart & CatRank. Category: ' + categoryId, () => {
                    beforeEach('Check response from Top-Chart Android', () => {
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


