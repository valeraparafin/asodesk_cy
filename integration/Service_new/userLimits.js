//TODO: 1. it() for each tariff
//      2. get sidebar-info and parse it by limits
//      3. compare data from server to model data for each tariff
//      4. ...

/// <reference types="cypress" />
import * as tariff from './tariff_model'
import {Auth} from "./Classes_library/Auth";
import {Commands} from "./Classes_library/Commands";
import * as user from "./accounts_storage";


const auth = new Auth();
const commands = new Commands();
let email = user.withTariff('Basic');
let info;

before('Prepare data', () => {
    auth.obtain(email)
    //
})

it('sidebar info', () => {
    // cy.setCookie('Authorization', auth.token);
    // info = commands.getSidebarInfo();
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
});

it('Output model', function () {
    auth.obtain(email)
    // commands.getSidebarInfo();
    // info = commands.sidebarInfo;


    let x = tariff.Basic()
    console.log(x)

    let z = tariff.ASO('Startup')
    let zx = tariff.ASO('Pro')
    console.log(z)
    console.log(zx)

    let y = tariff.PRO()
    console.log(y)

    // console.log(info)

    let ey = {
        app_limit : info.subscription.app_limit,
        keyword_limit : info.subscription.keyword_limit

    }



    compareLimits(zx, ey)


});

function compareLimits(Local, Prod) {

    chai.expect(Local.app_limit).eq(Prod.app_limit);


}