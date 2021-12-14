/// <reference types="cypress" />
import {Auth} from "./Classes_library/Auth";

const auth = new Auth()
const CountryID = ["bb", "uz", "ch", "es", "lb", "ng", "mx", "eg", "cm", "uy", "th", "my", "bm", "cn", "gb", "il", "ec", "is", "hk", "in", "tw", "si", "nz", "ua", "cz", "do", "kw", "tr", "kr", "rs", "it", "vn", "sk", "sv", "no", "bh", "al", "ca", "kz", "qa", "ph", "pe", "by", "sa", "fr", "ge", "om", "kg", "ke", "hr", "kh", "ve", "ie", "pa", "az", "dz", "gt", "am", "py", "mt", "au", "be", "ae", "at", "hn", "za", "nl", "ru", "cy", "gh", "ar", "sg", "mo", "lk", "dk", "ni", "br", "bg", "pk", "lt", "sn", "cl", "us", "cr", "mg", "ao", "lu", "pt", "fi", "pl", "de", "jp", "co", "ee", "hu", "gr", "ug", "se", "tn", "lv", "ro", "id", "bo"]

before('Sign in by admin', () => {
    auth.signIn('iparafin@gmail.com')
    cy.wait(1000)
    auth.getToken()
    cy.wait(500)
})
it('Use hijack here', function () {
    cy.setCookie('Authorization', auth.token);
    cy.wait(500)
    // auth.hijack('tech@zorra.com')
    auth.hijack()
    auth.getToken()
    cy.wait(500)

});

it('should ', function () {
    cy.setCookie('Authorization', auth.token);
    cy.wait(500)
    auth.hijack('tech@zorra.com')
    cy.wait(500)
    // getTrackedApps()
});
/*
function getTrackedApps() {
    cy.request({
        method: 'GET',
        url: '/api/tracked-apps?country=ru', // baseUrl is prepended to url
        headers: {
            'accept': 'application/json',
            'Authorization': '' + auth.token,
        }
    })
        .then((response) => {
            let x = response.body
            let len = x.length
            console.log(len)

            for (let i = 0; i < len - 1; i++) {
                let app = x[i].store_id
                for (let j=0; j < CountryID.length - 1; j++) {
                    cy.request('/' + 'api/' + CountryID[j] + '/' + app + '/keyword-analytics/data-stats').then((response) => {
                        console.log(response)
                        assert(response.status=200)
                    })
                }

            }
        })
} */

it('Intercept', () => {
    cy.intercept('GET', 'api/referral-program'
        , {
            body: {bonus_credit: "10.00"}
        }).as('apps'), (request) => {
        console.log(request.body)
    }

    cy.wait('@apps')
    console.log()

//     {
//         body: {
//             count:99
//         }
//
//     }
// ),
//     (response) => {
//         console.log(response)
//     }

})


// it('Find a nubmer', () => {
//
//     for (let n = 143606; n < 143610; n++) {
//         context('Number is: ' + n, () => {
//             cy.request({
//                 method: 'get',
//                 followRedirect: false, log: true, //turn off
//                 url: 'https://itunes.apple.com/WebObjects/MZStore.woa/wa/topChartFragmentData?pageNumbers=1&pageSize=5',
//                 headers: {
//                     'x-apple-store-front': '' + n,
//                 },
//                 response: []
//             })
//                 .then((response) => {
//
//                     cy.wait(3000);
//                     // assert.equal(response.status, 200);
//
//                     // cy.findAllByText('cc=me')
//                     // cy.findAllByText('cc=rs')\
//
//                     let responseText = (response.body)
//                     console.log(response);
//                     // return console.log(responseText);
//                 })
//
//
//         })
//     }
// });

//
//
// for (let n = 143606; n < 143610; n++) {
//     var myHeaders = new Headers();
//     myHeaders.append("x-apple-store-front", ""+ n);
//     myHeaders.append("Cookie", "geo=RU");
//
//     var requestOptions = {
//         method: 'GET',
//         headers: myHeaders,
//         redirect: 'follow'
//     };
//
//     fetch("https://itunes.apple.com/WebObjects/MZStore.woa/wa/topChartFragmentData", requestOptions)
//         .then(response => response.text())
//         .then(result => console.log(result))
//         .catch(error => console.log('error', error));
//     timeout(10000);
// }
