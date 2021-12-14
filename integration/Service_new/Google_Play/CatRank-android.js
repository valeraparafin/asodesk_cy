import {Auth} from "../Classes_library/Auth";
import {Constants} from "../Classes_library/Constants";

const auth = new Auth();
const constant = new Constants();

const favCountryIds = constant.GpFavCountryIds;
const prevDaysDate = constant.prevDaysDate;

let deviceType = new Map([
    ['android', "googleplay"]
])
let appCategoryIDs = new Map([
    ['default', "MUSIC_AND_AUDIO"]
])

let storeIDs = new Map([
    ['default', "com.spotify.music"]
])

describe('Android CatRank Health-check', () => {
    it('Authorize with API', function () {
        auth.obtain();
    });

    for (let country of favCountryIds) {

        context('Check response from Category Ranking Android. Local ' + country.toUpperCase(), () => {

            it('Category Ranking API. Check data on y != null', () => {

                let storeID = storeIDs.get(country) || storeIDs.get('default');
                let appCategoryID = appCategoryIDs.get(country) || appCategoryIDs.get('default');

                cy.request({
                    method: 'get',
                    followRedirect: true, log: true, //turn off

                    url: 'api/category-ranking/chart?category=' + appCategoryID + '&category_list=free&country=' + country + '&device_type=' + deviceType.get('android') + '&storeids=' + storeID + '&timestamp_since=' + prevDaysDate,
                    headers: {
                        'accept': 'application/json',
                        'Authorization': auth.token,
                    },
                    response: []
                })
                    .then((response) => {

                        console.log(response.body);
                        assert.equal(response.status, 200);

                        if ((response.body.data.length) === 0) {
                            chai.expect(response.body.data.length).to.not.be.eq(0)
                            // if response json is empty
                        } else {
                            chai.expect(response.body.data[0].stats[0].y).to.not.be.eq(null)
                            // else response json has data and this data is not equal null
                            // mean json has data and graph is alive
                        }

                    })
            })
        })

    }
})