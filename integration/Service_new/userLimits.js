/// <reference types="cypress" />
import {Tariffs} from './tariff_model'
import {Auth} from "./Classes_library/Auth";
import {Commands} from "./Classes_library/Commands";
// import * as user from "./accounts_storage";
import {Plan} from "./accounts_storage";


const auth = new Auth();
const commands = new Commands();
const accounts = new Plan();
const tariffs = new Tariffs();
let info;

for (let account in accounts.Plans) {
    describe(account + ' tariff should be exactly same as in the document  ', () => {
        //doc: shorturl.at/wOS49

        before('obtain as user with ' + account + ' tariff', () => {
            auth.obtain(accounts.withPlan(account))
        })

        it('Get sidebar info', () => {
            // info = commands.getSidebarInfo();
            getSidebarInfo();
        });

        if (tariffs.Plans) {
            it('Compare ' + account + ' model with server JSON', function () {
                const Model_Limits = tariffs.withTariff(account)

                let User_Limits = {
                    app_limit: info.subscription.app_limit,
                    keyword_limit: info.subscription.keyword_limit,
                    teammates_limit: info.subscription.teammates_limit,

                    replies_limit: info.replies_limit,
                    keyword_stats_limit: info.keyword_stats_limit
                }
                compareLimits(Model_Limits, User_Limits)
            });
        }
    });
}

// describe('efqwfqe', function () {
//     it('Startup ASO', function () {
//         auth.obtain(accounts.withPlan('Startup'))
//     });
//
//     it('sidebar info', () => {
//         // cy.setCookie('Authorization', auth.token);
//         // info = commands.getSidebarInfo();
//         getSidebarInfo();
//     });
//     it('Compare Startup model with server json', function () {
//
//         let Startup_ASO_300 = tariff.Startup('ASO_300')
//         let Startup_ASO_700 = tariff.Startup('ASO_700')
//         let Startup_ASO_1500 = tariff.Startup('ASO_1500')
//         let Startup_Reviews = tariff.Startup('Reviews')
//         let Startup_ASO_Reviews_300 = tariff.Startup('ASO+Reviews_300')
//
//         let User_Limits = {
//             app_limit: info.subscription.app_limit,
//             keyword_limit: info.subscription.keyword_limit,
//             teammates_limit: info.subscription.teammates_limit,
//
//             replies_limit: info.replies_limit,
//             keyword_stats_limit: info.keyword_stats_limit
//         }
//
//
//         compareLimits(Startup_ASO_300, User_Limits)
//
//     });
// });


function compareLimits(Local, Prod) {

    chai.expect(Local.app_limit).eq(Prod.app_limit, 'App limit');
    chai.expect(Local.keyword_limit).eq(Prod.keyword_limit, 'Keyword limit');
    chai.expect(Local.teammates_limit).eq(Prod.teammates_limit, 'Teammates limit');
    chai.expect(Local.replies_limit).eq(Prod.replies_limit, 'Replies limit');
    chai.expect(Local.keyword_stats_limit).eq(Prod.keyword_stats_limit, 'Keyword stats limit');

}

function getSidebarInfo() {
    cy.request({
        method: 'GET',
        url: 'api/sidebar-info', // baseUrl is prepended to url
        headers: {
            'accept': 'application/json',
            'Authorization': auth.token,
        }
    })
        .then((response) => {
            info = response.body
        })
}