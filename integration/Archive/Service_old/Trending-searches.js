import { Constants } from "../../Service_new/Classes_library/Constants"

const login = Constants.login
const password = Constants.password

let todaysDate = Cypress.moment().format('x') - 14400000
const CountryID = ["bb", "uz", "ch", "es", "lb", "ng", "mx", "eg", "cm", "uy", "th", "my", "bm", "cn", "gb", "il", "ec", "is", "hk", "in", "tw", "si", "nz", "ua", "cz", "do", "kw", "tr", "kr", "rs", "it", "vn", "sk", "sv", "no", "bh", "al", "ca", "kz", "qa", "ph", "pe", "by", "sa", "fr", "ge", "om", "kg", "ke", "hr", "kh", "ve", "ie", "pa", "az", "dz", "gt", "am", "py", "mt", "au", "be", "ae", "at", "hn", "za", "nl", "ru", "cy", "gh", "ar", "sg", "mo", "lk", "dk", "ni", "br", "bg", "pk", "lt", "sn", "cl", "us", "cr", "mg", "ao", "lu", "pt", "fi", "pl", "de", "jp", "co", "ee", "hu", "gr", "ug", "se", "tn", "lv", "ro", "id", "bo"]
const deviceType = 'iphone' //'ipad

context('Trending Searches', () => {
    beforeEach(() => {
        //cy.route('https://hq.asodesk.com/api/us/trending-searches/?device=' + deviceType + '&timestamp=' + todaysDate).as('getData')
        cy.visit('https://hq.asodesk.com')
    })

    it('should have results', function () {

        cy.get('.mt5 > :nth-child(1) > .mt15')
            .type(login).should('have.value', login)

        cy.get(':nth-child(2) > .mt15')
            .type(password).should('have.value', password)

        cy.get('.mt5 > .accountButton').click()
        cy.wait(3000)
        cy.get('.nano-content > .nav > :nth-child(3) > a > .sidebar-title').click()

        for (var i = 0; i <= CountryID.length - 1; i++) {


            cy.request({
                timeout: 300000,
                retryOnNetworkFailure: true,
                method: 'get',
                followRedirect: true, log: true, //turn off
                url: 'api/' + CountryID[i] + '/trending-searches/?device_type=' + deviceType + '&timestamp=' + todaysDate,
                headers: {
                    'accept': 'application/json'
                },
                response: []
            })
                .then((response) => {

                    console.log(response.body);
                    assert.equal(response.status, 200);
                    //expect(response.body.recordsTotal).to.not.be.eq(0)
                    if (response.body.results.length < 3 && response.body.results == 0) {
                        console.log('Country = ' + response.body.country + '\n' + 'Ar.Length = ' + response.body.results.length + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST FAILED');
                    } else {
                        console.log('Country = ' + response.body.country + '\n' + 'Ar.Length = ' + response.body.results.length + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST PASSED');
                    }
                })


        }
    });
})
