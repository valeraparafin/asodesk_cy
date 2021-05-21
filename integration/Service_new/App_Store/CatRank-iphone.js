import {GetToken} from "../Object_library/Get_token";
import {Constants} from "../Object_library/Constants";

const getToken = new GetToken();
const constants = new Constants();

const favCountryIds = constants.AsFavCountryIds;
const prevDaysDate = constants.prevDaysDate;

let deviceType = new Map([
    ['iphone', "iphone"],
    ['ipad', "ipad"],
    ['android', "googleplay"]
])
let appCategoryIDs = new Map([
    ['default', "6011"],
    ['CN', "6007"]
])

let storeIDs = new Map([
    ['default', "324684580"],
    ['CN', "388627783"]
])

describe('AppStore CatRank Health-check', () => {
    it('Authorize with Front-End', function () {
        getToken.authorize();
    });

    for (let country of favCountryIds) {
        context('Check response from Category Ranking iPhone. Local ' + country, () => {

            it('Category Ranking API. Check data on y != null', () => {

                let appCategoryID = appCategoryIDs.get(country) || appCategoryIDs.get('default');
                let storeID = storeIDs.get(country) || storeIDs.get('default');

                cy.request({
                    method: 'get',
                    followRedirect: false, log: true, //turn off
                    url: 'api/category-ranking/chart?category=' + appCategoryID + '&category_list=free&country=' + country + '&device_type=' + deviceType.get('iphone') + '&storeids=' + storeID + '&timestamp_since=' + prevDaysDate,
                    headers: {
                        'accept': 'application/json',
                        'Authorization': 'Token:' + getToken.token,
                        'sessionid': '' + getToken.c //sessionid from cookies
                    },
                    response: []
                })
                    .then((response) => {

                        assert.equal(response.status, 200);

                        if ((response.body.data.length) === 0) {
                            chai.expect(response.body.data.length).to.not.be.eq(0)
                        }
                        // if response json is empty
                        else {
                            chai.expect(response.body.data[0].stats[0].y).to.not.be.eq(null)
                        }
                        // else response json has data and this data is not equal null
                        // mean json has data and graph is alive
                    })
            })
        })

    }
})