/// <reference types="cypress" />
import {Auth} from "../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Keyword Explorer should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('KE "search" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/1336519654/keyword-explorer/search?device_type=iphone&keyword=tinder',
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

    it('KE "suggestions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/1336519654/keyword-explorer/suggestions?device_type=iphone&keyword=tinder',
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

    it('KE "related" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: 'api/ru/com.bpmobile.iscanner.free/keyword-explorer/related?device_type=googleplay&keyword=%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D0%B0%D0%BB',
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
});
