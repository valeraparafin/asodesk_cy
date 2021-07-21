/// <reference types="cypress" />
import {Auth} from "../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Keyword Analytics should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('KA|KM "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/811057180/keyword-analytics/suggestions',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('KA|KM "competitor keywords" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/811057180/keyword-analytics/suggestions/competitor-keywords/367003839',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('KA|KM "search ads" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/811057180/keyword-analytics/suggestions/searchads',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    it('KA|Chart "chart" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/811057180/keyword/231621/chart?limit=2678400s',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.keywords).not.be.empty;
            })
    });

    it('KA|TopApp "top apps" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/811057180/keyword/231621/top-apps',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.phone.data).not.be.empty;
            })
    });

    it('KA|Table "data stats" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/811057180/keyword-analytics/data-stats',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.empty;
            })
    });

    // it('KA|Table "export history" should response 200 and not be empty ', function () {
    //     cy.request({
    //         method: 'GET',
    //         followRedirect: true, log: true, //turn off
    //         url: 'api/history/sap/export/?time_since=1620594000&time_till=1623358799&keyword_ids=12045148',
    //         headers: {
    //             'accept': 'application/json',
    //             'Authorization': 'Token:' + auth.token,
    //         },
    //         response: []
    //     })
    //         .then((response) => {
    //             expect(response.status).eq(200)
    //             expect(response.body.data).not.be.empty;
    //         })
    // });


});
