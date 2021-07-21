/// <reference types="cypress" />
import {Auth} from "../../Service_new/Classes_library/Auth";

const auth = new Auth();

describe('Auth should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('User "account" should response 200 and not be empty ', function () {
        cy.request({
            method: 'get',
            followRedirect: true, log: true, //turn off
            url: 'api/available_accounts/',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response).not.be.empty;
            })
    });
        it('User "info" should response 200 and not be empty ', function () {
            cy.request({
                method: 'get',
                followRedirect: true, log: true, //turn off
                url: 'api/request-info',
                headers: {
                    'accept': 'application/json',
                    'Authorization': 'Token:' + auth.token,
                },
                response: []
            })
                .then((response) => {
                    expect(response.status).eq(200)
                    expect(response).not.be.empty;
                })
        });

    it('User "tracked apps" should response 200 and not be empty ', function () {
        cy.request({
            method: 'get',
            followRedirect: true, log: true, //turn off
            url: 'api/tracked-apps?country=ru',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response).not.be.empty;
            })
    });

});
