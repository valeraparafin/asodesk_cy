/// <reference types="cypress" />

let todaysDate = Cypress.moment().format('x') - 14400000
const favcountryID = ["RU", "US", "GB", "DE", "ES", "IT", "FR", "CA", "AU", "BR", "CN"]
const CountryID = ["bb", "uz", "ch", "es", "lb", "ng", "mx", "eg", "cm", "uy", "th", "my", "bm", "cn", "gb", "il", "ec", "is", "hk", "in", "tw", "si", "nz", "ua", "cz", "do", "kw", "tr", "kr", "rs", "it", "vn", "sk", "sv", "no", "bh", "al", "ca", "kz", "qa", "ph", "pe", "by", "sa", "fr", "ge", "om", "kg", "ke", "hr", "kh", "ve", "ie", "pa", "az", "dz", "gt", "am", "py", "mt", "au", "be", "ae", "at", "hn", "za", "nl", "ru", "cy", "gh", "ar", "sg", "mo", "lk", "dk", "ni", "br", "bg", "pk", "lt", "sn", "cl", "us", "cr", "mg", "ao", "lu", "pt", "fi", "pl", "de", "jp", "co", "ee", "hu", "gr", "ug", "se", "tn", "lv", "ro", "id", "bo"]
const categoryAS = ["0", "36", "3600", "6000", "6001", "6002", "6003", "6004", "6005", "6006", "6007", "6008", "6009", "6010", "6011", "6012", "6013", "6014", "6015", "6016", "6017", "6018", "6020", "6021", "6023", "6024", "6025", "7001", "7002", "7003", "7004", "7005", "7006", "7007", "7008", "7009", "7011", "7012", "7013", "7014", "7015", "7016", "7017", "7018", "7019", "10000", "10001", "10002"]
const categoryGP = ["ANDROID_WEAR", "ART_AND_DESIGN", "AUTO_AND_VEHICLES", "BEAUTY", "BOOKS_AND_REFERENCE", "BUSINESS", "CATEGORY_ALL", "COMICS", "COMMUNICATION", "DATING", "EDUCATION", "ENTERTAINMENT", "EVENTS", "FAMILY", "FAMILY_ACTION", "FAMILY_BRAINGAMES", "FAMILY_CREATE", "FAMILY_EDUCATION", "FAMILY_MUSICVIDEO", "FAMILY_PRETEND", "FINANCE", "FOOD_AND_DRINK", "GAME", "GAME_ACTION", "GAME_ADVENTURE", "GAME_ARCADE", "GAME_BOARD", "GAME_CARD", "GAME_CASINO", "GAME_CASUAL", "GAME_EDUCATIONAL", "GAME_MUSIC", "GAME_PUZZLE", "GAME_RACING", "GAME_ROLE_PLAYING", "GAME_SIMULATION", "GAME_SPORTS", "GAME_STRATEGY", "GAME_TRIVIA", "GAME_WORD", "HEALTH_AND_FITNESS", "HOUSE_AND_HOME", "LIBRARIES_AND_DEMO", "LIFESTYLE", "MAPS_AND_NAVIGATION", "MEDICAL", "MUSIC_AND_AUDIO", "NEWS_AND_MAGAZINES", "PARENTING", "PERSONALIZATION", "PHOTOGRAPHY", "PRODUCTIVITY", "SHOPPING", "SOCIAL", "SPORTS", "TOOLS", "TRAVEL_AND_LOCAL", "VIDEO_PLAYERS", "WEATHER"]
const deviceType = 'googleplay'
context('Top Charts', () => {
    beforeEach(() => {
        cy.visit('https://hq.asodesk.com')
    })

    // https://on.cypress.io/interacting-with-elements

    it('.type() - type into a DOM element', () => {
        // https://on.cypress.io/type

        const login = 'iparafin@yandex.ru'
        const password = 'A123321b'

        cy.get('.mt5 > :nth-child(1) > .mt15')
            .type(login).should('have.value', login)

        cy.get(':nth-child(2) > .mt15')
            .type(password).should('have.value', password)

        cy.get('.mt5 > .accountButton').click()
        cy.wait(3000)

        for (var i = 0; i <= favcountryID.length - 1; i++) {


            for (var n = 0; n <= categoryGP.length - 1; n++) {
                let catID = categoryGP[n];
                cy.request({
                    method: 'get',
                    followRedirect: true, log: true, //turn off
                    url: 'api/' + favcountryID[i] + '/top-charts/?device_type=' + deviceType + '&length=20&list_type=free&start=0&store_id=' + categoryGP[n] + '&timestamp=' + todaysDate,
                    headers: {
                        'accept': 'application/json'
                    },
                    response: []
                })
                    .then((response) => {

                        console.log(response.body);
                        assert.equal(response.status, 200);
                        //expect(response.body.recordsTotal).to.not.be.eq(0)
                        if (response.body.recordsTotal == 0) {
                            console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST FAILED');
                        } else {
                            console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST PASSED');
                        }
                    })
                cy.request({
                    method: 'get',
                    followRedirect: true, log: true, //turn off
                    url: 'api/' + favcountryID[i] + '/top-charts/?device_type=' + deviceType + '&length=20&list_type=paid&start=0&store_id=' + categoryGP[n] + '&timestamp=' + todaysDate,
                    headers: {
                        'accept': 'application/json'
                    },
                    response: []
                })
                    .then((response) => {

                        console.log(response.body);
                        assert.equal(response.status, 200);
                        //expect(response.body.recordsTotal).to.not.be.eq(0)
                        if (response.body.recordsTotal == 0) {
                            console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST FAILED');
                        } else {
                            console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST PASSED');
                        }
                    })
                cy.request({
                    method: 'get',
                    followRedirect: true, log: true, //turn off
                    url: 'api/' + favcountryID[i] + '/top-charts/?device_type=' + deviceType + '&length=20&list_type=grossing&start=0&store_id=' + categoryGP[n] + '&timestamp=' + todaysDate,
                    headers: {
                        'accept': 'application/json'
                    },
                    response: []
                })
                    .then((response) => {

                        console.log(response.body);
                        assert.equal(response.status, 200);
                        //expect(response.body.recordsTotal).to.not.be.eq(0)
                        if (response.body.recordsTotal == 0) {
                            console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST FAILED');
                        } else {
                            console.log('Country = ' + response.body.data.country + '\n' + 'Devicetype = ' + deviceType + '\n' + 'Category = ' + catID + '\n' + 'Timestamp = ' + todaysDate + '\n' + 'TEST PASSED');
                        }
                    })

            }


        }


    }) //each

})



