/// <reference types="cypress" />
import {Auth} from "../../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Plans should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Html page should response 200 ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/settings/pricing/',
            headers: {
                'accept': 'application/html+xml',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
            })
    });
    it('Plans list should response 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: '/settings/activity_log/list',
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
