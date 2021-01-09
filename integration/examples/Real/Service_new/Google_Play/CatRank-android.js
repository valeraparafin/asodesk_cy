/// <reference types="cypress" />

let prevdaysDate = Cypress.moment().format('X') - 200000
let todaysDate = Cypress.moment().format('X') - 4800

const login = 'iparafin@yandex.ru'
const password = 'A123321b'

const favcountryID = ["RU", "US", "GB", "DE", "ES", "IT", "FR", "CA", "AU", "BR", "CN"]
// const favcountryID = ["bb", "uz", "ch", "es", "lb", "ng", "mx", "eg", "cm", "uy", "th", "my", "bm", "cn", "gb", "il", "ec", "is", "hk", "in", "tw", "si", "nz", "ua", "cz", "do", "kw", "tr", "kr", "rs", "it", "vn", "sk", "sv", "no", "bh", "al", "ca", "kz", "qa", "ph", "pe", "by", "sa", "fr", "ge", "om", "kg", "ke", "hr", "kh", "ve", "ie", "pa", "az", "dz", "gt", "am", "py", "mt", "au", "be", "ae", "at", "hn", "za", "nl", "ru", "cy", "gh", "ar", "sg", "mo", "lk", "dk", "ni", "br", "bg", "pk", "lt", "sn", "cl", "us", "cr", "mg", "ao", "lu", "pt", "fi", "pl", "de", "jp", "co", "ee", "hu", "gr", "ug", "se", "tn", "lv", "ro", "id", "bo"]

// тестовая дата в разрыв
// let prevdaysDate = 1597766884;
// let todaysDate = 1598086871;

let country = new Map([
    ['Russia', "ru"],
    ['USA', "us"]
])
let deviceType = new Map([
    ['iphone', "iphone"],
    ['ipad', "ipad"],
    ['android', "googleplay"]
])
let appCategoryID = new Map([
    ['aps', "6011"],
    ['gp', "MUSIC_AND_AUDIO"]
])

let storeID = new Map([
    ['aps', "324684580"],
    ['gp', "com.spotify.music"]
])
describe('Android CatRank Health-check', () => {
    for (let i = 0; i <= favcountryID.length - 1; i++) {

        context('Check response from Category Ranking Android. Local ' + favcountryID[i], () => {
            beforeEach(() => {
                cy.visit('https://hq.asodesk.com')
            })


            it('Category Ranking API. Check data on y != null', () => {
                // https://on.cypress.io/type


                cy.get('.mt5 > :nth-child(1) > .mt15')
                    .type(login).should('have.value', login)

                cy.get(':nth-child(2) > .mt15')
                    .type(password).should('have.value', password)

                cy.get('.mt5 > .accountButton').should('not.be.disabled').click();
                cy.get('.app .ng-scope').should('be.visible')

                cy.request({
                    method: 'get',
                    followRedirect: true, log: true, //turn off

                    url: 'api/category-ranking/chart?category=' + appCategoryID.get('gp') + '&category_list=free&country=' + favcountryID[i] + '&device_type=' + deviceType.get('android') + '&storeids=' + storeID.get('gp') + '&timestamp_since=' + prevdaysDate,
                    headers: {
                        'accept': 'application/json'
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
                            // mean has data and graph is alive
                        }

                    })
            })
        })

    }
})


/*
context('Check response from Category Ranking iPhone. Local "RU" ', () => {
    beforeEach(() => {
        cy.visit('https://hq.asodesk.com')
    })
    it('Category Ranking API. Check data on y != null', () => {
        // https://on.cypress.io/type

        cy.get('.mt5 > :nth-child(1) > .mt15')
            .type(login).should('have.value', login)

        cy.get(':nth-child(2) > .mt15')
            .type(password).should('have.value', password)

        cy.get('.mt5 > .accountButton').click()
        cy.wait(3000)
        cy.request({
            method: 'get',
            followRedirect: false, log: true, //turn off

            url: 'api/category-ranking/chart?category=' + appCategoryID.get('aps') + '&category_list=free&country=' + country.get('Russia') + '&device_type=' + deviceType.get('iphone') + '&storeids=' + storeID.get('aps') + '&timestamp_since=' + todaysDate,
            headers: {
                'accept': 'application/json'
            },
            response: []
        })
            .then((response) => {

                console.log(response.body);
                assert.equal(response.status, 200);

                if ((response.body.data.length) === 0) {
                    chai.expect(response.body.data.length).to.not.be.eq(0)
                }
                // if response json is empty
                else {
                    chai.expect(response.body.data[0].stats[0].y).to.not.be.eq(null)
                }
                // else response json has data and this data is not equal null
                // mean has data and graph is alive
            })
    })
})
context('Check response from Category Ranking iPhone. Local "US" ', () => {
    beforeEach(() => {
        cy.visit('https://hq.asodesk.com')
    })
    it('Category Ranking API. Check data on y != null', () => {
        // https://on.cypress.io/type

        cy.get('.mt5 > :nth-child(1) > .mt15')
            .type(login).should('have.value', login)

        cy.get(':nth-child(2) > .mt15')
            .type(password).should('have.value', password)

        cy.get('.mt5 > .accountButton').click()
        cy.wait(3000)
        cy.request({
            method: 'get',
            followRedirect: true, log: true, //turn off

            url: 'api/category-ranking/chart?category=' + appCategoryID.get('aps') + '&category_list=free&country=' + country.get('USA') + '&device_type=' + deviceType.get('iphone') + '&storeids=' + storeID.get('aps') + '&timestamp_since=' + todaysDate,
            headers: {
                'accept': 'application/json'
            },
            response: []
        })
            .then((response) => {

                console.log(response.body);
                assert.equal(response.status, 200);

                if ((response.body.data.length) === 0) {
                    chai.expect(response.body.data.length).to.not.be.eq(0)
                }
                // if response json is empty
                else {
                    chai.expect(response.body.data[0].stats[0].y).to.not.be.eq(null)
                }
                // else response json has data and this data is not equal null
                // mean has data and graph is alive
            })
    })
})

context('Check response from Category Ranking Android. Local "RU" ', () => {
    beforeEach(() => {
        cy.visit('https://hq.asodesk.com')
    })


    it('Category Ranking API. Check data on y != null', () => {
        // https://on.cypress.io/type


        cy.get('.mt5 > :nth-child(1) > .mt15')
            .type(login).should('have.value', login)

        cy.get(':nth-child(2) > .mt15')
            .type(password).should('have.value', password)

        cy.get('.mt5 > .accountButton').click()
        cy.wait(3000)

        cy.request({
            method: 'get',
            followRedirect: true, log: true, //turn off

            url: 'api/category-ranking/chart?category=' + appCategoryID.get('gp') + '&category_list=free&country=' + country.get('Russia') + '&device_type=' + deviceType.get('android') + '&storeids=' + storeID.get('gp') + '&timestamp_since=' + todaysDate,
            headers: {
                'accept': 'application/json'
            },
            response: []
        })
            .then((response) => {

                console.log(response.body);
                assert.equal(response.status, 200);

                if ((response.body.data.length) === 0) {
                    chai.expect(response.body.data.length).to.not.be.eq(0)
                }
                // if response json is empty
                else {
                    chai.expect(response.body.data[0].stats[0].y).to.not.be.eq(null)
                }
                // else response json has data and this data is not equal null
                // mean has data and graph is alive
            })
    })
})
context('Check response from Category Ranking Android. Local "US" ', () => {
    beforeEach(() => {
        cy.visit('https://hq.asodesk.com')
    })


    it('Category Ranking API. Check data on y != null', () => {
        // https://on.cypress.io/type


        cy.get('.mt5 > :nth-child(1) > .mt15')
            .type(login).should('have.value', login)

        cy.get(':nth-child(2) > .mt15')
            .type(password).should('have.value', password)

        cy.get('.mt5 > .accountButton').click()
        cy.wait(3000)

        cy.request({
            method: 'get',
            followRedirect: true, log: true, //turn off

            url: 'api/category-ranking/chart?category=' + appCategoryID.get('gp') + '&category_list=free&country=' + country.get('USA') + '&device_type=' + deviceType.get('android') + '&storeids=' + storeID.get('gp') + '&timestamp_since=' + todaysDate,
            headers: {
                'accept': 'application/json'
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
                    // mean has data and graph is alive
                }

            })
    })
})  */


