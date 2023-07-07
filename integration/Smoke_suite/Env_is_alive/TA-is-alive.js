/// <reference types="cypress" />
import { Auth } from "../../Service_new/Classes_library/Auth";
import { Constants } from "../../Service_new/Classes_library/Constants";

const constant = new Constants();

const auth = new Auth();

describe('Tag Analysis should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Versions" should response 200 and not be empty ', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/com.pinterest/versions',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.eq(0);
            })
    });

    it('tag-analysis-statistics" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/tag-analysis-statistics',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                countries: ["ES"],
                languages: ["es"],
                storeid: "com.pinterest",
                time_since: 1685912400,
                time_till: 1688590799,
                versions: []
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.eq(0);
            })
    });

    it('tag-analysis-tags-report" should response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/tag-analysis-tags-report',
            headers: {
                'accept': 'application/json',
                'Authorization': auth.token,
            },
            body: {
                countries: ["ES"],
                languages: ["es"],
                storeid: "com.pinterest",
                time_since: 1685912400,
                time_till: 1688590799,
                versions: []
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.data).not.be.eq(0);
            })
    });

});