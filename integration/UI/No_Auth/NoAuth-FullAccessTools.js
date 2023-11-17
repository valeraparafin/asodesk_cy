/// <reference types="cypress" />
import { Runnable } from "mocha";
import { Constants } from "../../Service_new/Classes_library/Constants";

const constant = new Constants();



describe('Profile should have full access without Authorization', function () {
    
    it('Profile page of Demo app (Nike) should be accessible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('ASO Tools').click();
        
        cy.contains('Nike Training Club');
    }); 

    it('app-profile should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/app-profile',
            headers: {
                'accept': 'application/json',
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
    
    it('total-views should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/total-views',
            headers: {
                'accept': 'application/json',
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
    
    it('review-stats should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/review-stats',
            headers: {
                'accept': 'application/json',
            },
            body: {
                language: [constant.GpFavCountryIds[4]],
                end: constant.toDaysDate,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
    
    it('reviews-chart should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/reviews-chart',
            headers: {
                'accept': 'application/json',
            },
            body: {
                language: [constant.GpFavCountryIds[4]],
                start: constant.monthAgo,
                end: constant.toDaysDate,
            },
            response: [],
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body).not.be.eq(0).and.not.be.undefined;
            })
    });
});

describe('Keyword Phrase Mixer should have full access without Authorization', function () {
    
    it('Demo Banner should be visible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Keywords")').click();
        cy.contains('Phrase Mixer').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 

    it('Keyword Phrase Mixer "free" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/shuffle/free/',
            headers: {
                'accept': 'application/json',
            },
            body: {
                combine_index: [1, 2, 3, 4],
                keywords: ["free", "fitness", "home", "app"]
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
                expect(response.body.total).not.be.eq(0);
            })   
    });
});

describe('Live Positions should have full access without Authorization', function () {
    
    it('Demo banner should be visible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Keywords")').click();
        cy.contains('Live Positions').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 

    it('Live Position "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/keyword-explorer/search?country=US&device=iphone&keyword=sport&length=20&start=0&remember=true&storeid=301521403',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });
    
        it('Live Position "suggestions" should response 200 and not be empty ', function () {
            cy.request({
                method: 'GET',
                followRedirect: true, log: true, //turn off
                url: '/api/keyword-explorer/keyword-suggestions?country=US&device=iphone&keyword=sport&storeid=301521403',
                headers: {
                    'accept': 'application/json',
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response.body.suggestions).not.be.empty;
                })
        });
    
});

describe('Description Creator should have full access without Authorization', function () {
    
    it('Demo Banner should be visible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Page Builder")').click();
        cy.contains('Description Creator').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 

    it('Description Creator "density counter" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/us/301521403/density-counter',
            headers: {
                'accept': 'application/json',
            },
            body: {
                content: "App Store Game of the Year in selected countries.\n 200+ MILLION USERS!\n\nDrive your bike through amazing tracks with jumps and loops \n in this simple and fast-paced physics-based game.\n\nMultiplayer! Challenge your Facebook\n  friends.\n\nTilt your device to lean your bike and touch the screen to accelerate/brake.\nApp Store Game of the Year in selected countries.\n 200+ MILLION USERS!\n\nDrive your bike through amazing tracks with jumps and loops \n in this simple and fast-paced physics-based game.\n\nMultiplayer! Challenge your Facebook\n  friends.\n\nTilt your device to lean your bike and touch the screen to accelerate/brake."
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.keywords).not.be.empty;
                expect(response.body.total_chars).not.be.eq(0);
            })
    });

});

describe('App Store Localizations should have full access without Authorization', function () {
    
    it('Demo Banner should be visible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Page Builder")').click();
        cy.contains('App Store Localizations').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 

    it('countries-localzation should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/countries-localizations',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

});

describe('Search Explorer should have full access without Authorization', function () {
    
    it('Demo Banner should be visible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('Stores Analytics').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
    }); 

    it('KE AS "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/search?country=ES&device=iphone&keyword=sport&length=20&start=0&remember=true',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('KE GP "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/search?country=ES&device=google&keyword=sport&length=20&start=0&remember=true',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('KE AS "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/keyword-suggestions?country=US&device=iphone&keyword=sport',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

    it('KE GP "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/keyword-suggestions?country=ES&device=google&keyword=sport',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

    it('KE AS "statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/statistics?country=US&keyword=sport&device=iphone',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

    it('KE GP "statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/api/keyword-explorer/statistics?country=US&keyword=sport&device=google',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body).not.be.empty;
            })
    });

});

describe('All Reports Settings should have Full Access without Authorization', function () {
    
    it('Demo Banner should be visible and Create button redirect to login page', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
    
        //Open Connections Hub
        cy.get('a[href="/connections-hub/settings"]').click();
        
        //Demo Banner should be visible
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');
        
        //Click on Create button 
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--lg buttonElement--solid rounded-4"]').click();
        cy.get('button[type="button"]:contains("Email report or alert")').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });

        // error 401 (?)
    // it('Custom reports list should response 200', function () {
    //     cy.request({
    //         method: 'GET',
    //         followRedirect: true, log: true, //turn off
    //         url: '/custom-reports/api/channel/list/',
    //         headers: {
    //             'accept': 'application/json',
    //         },
    //         response: []
    //     })
    //         .then((response) => {

    //             expect(response.status).eq(200)

    //         })
    // });

});

describe('Reports Timeline should have Full Access without Authorization', function () {
    
    it('Demo banner should be visible and Reports Timeline should have Full Access', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');

        //Open Connections Hub
        cy.get('a[href="/connections-hub/settings"]').click();
        cy.get('a[href="/connections-hub/timeline"]').click();

        //Demo Banner should be visible
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible');

        // ???
        cy.contains('Reports Timeline').should('be.visible');
    });

        // error 401 (?)
    // it('Custom reports list should response 200', function () {
    //     cy.request({
    //         method: 'GET',
    //         followRedirect: true, log: true, //turn off
    //         url: '/custom-reports/api/channel/email/report-history/',
    //         headers: {
    //             'accept': 'application/json',
    //         },
    //         response: []
    //     })
    //         .then((response) => {

    //             expect(response.status).eq(200)

    //         })
    // });

});

describe('Integrations should have Full Access without Authorization', function () {
    
    it('Demo banner should be visible and Connect buttons should redirect to login page', function () {
        
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');

        //Open Connections Hub
        cy.get('a[href="/connections-hub/settings"]').click();
        //Open Integrations
        cy.get('a[href="/connections-hub/integrations"]').click();

        //Demo Banner should be visible
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('Experience the full power of Asodesk for your app').should('be.visible'); 

        //Click ASC button
        cy.contains('Add App Store Connect Account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');

        //Click GPC button
        cy.contains('Add Google Play Console Account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');

        //Click Zendesk button
        cy.contains('Connect Zendesk account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');

        //Click Omnidesk button
        cy.contains('Connect Omnidesk account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');

        //Click Usedesk button
        cy.contains('Connect Usedesk account').click();
        //Check redirect to login page
        cy.url().should('include', 'login');
    });

});