import 'dayjs';
import {getToken} from "../Object_library/Get_token";

const dayjs = require('dayjs')
const GetToken = new getToken();
const favcountryIDs = ["RU", "US", "GB", "DE", "ES", "IT", "FR", "CA", "AU", "BR", "CN"]
// const favcountryID = ["bb", "uz", "ch", "es", "lb", "ng", "mx", "eg", "cm", "uy", "th", "my", "bm", "cn", "gb", "il", "ec", "is", "hk", "in", "tw", "si", "nz", "ua", "cz", "do", "kw", "tr", "kr", "rs", "it", "vn", "sk", "sv", "no", "bh", "al", "ca", "kz", "qa", "ph", "pe", "by", "sa", "fr", "ge", "om", "kg", "ke", "hr", "kh", "ve", "ie", "pa", "az", "dz", "gt", "am", "py", "mt", "au", "be", "ae", "at", "hn", "za", "nl", "ru", "cy", "gh", "ar", "sg", "mo", "lk", "dk", "ni", "br", "bg", "pk", "lt", "sn", "cl", "us", "cr", "mg", "ao", "lu", "pt", "fi", "pl", "de", "jp", "co", "ee", "hu", "gr", "ug", "se", "tn", "lv", "ro", "id", "bo"]


let prevdaysDate = dayjs().unix() - 200000;

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
    it('Authorize with Front-End', function () {
        GetToken.Authorize();
    });

    for (let country of favcountryIDs) {

        context('Check response from Category Ranking Android. Local ' + country, () => {

            it('Category Ranking API. Check data on y != null', () => {

                let storeID = storeIDs.get(country) || storeIDs.get('default');
                let appCategoryID = appCategoryIDs.get(country) || appCategoryIDs.get('default');

                cy.request({
                    method: 'get',
                    followRedirect: true, log: true, //turn off

                    url: 'api/category-ranking/chart?category=' + appCategoryID + '&category_list=free&country=' + country + '&device_type=' + deviceType.get('android') + '&storeids=' + storeID + '&timestamp_since=' + prevdaysDate,
                    headers: {
                        'accept': 'application/json',
                        'Authorization': 'Token:' + GetToken.token,
                        'sessionid': '' + GetToken.c //sessionid from cookies
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