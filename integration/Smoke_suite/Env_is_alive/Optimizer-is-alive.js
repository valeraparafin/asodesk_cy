/// <reference types="cypress" />
import {Auth} from "../../Service_new/Classes_library/Auth";
import {Constants} from "../../Service_new/Classes_library/Constants";


const constant = new Constants();
const auth = new Auth();

const prevDaysDate = constant.s_prevDaysDate;
const toDaysDate = constant.s_toDaysDate;
const monthAgo = constant.s_monthAgo;

describe('Optimizer should be alive and main requests should response 200', function () {
    it('Obtain token', function () {
        auth.obtain();
    })
    it('Optimizer "summary cards" response 200 and not be empty ', function () {
        cy.request({
            method: 'POST',
            followRedirect: true, log: true, //turn off
            url: '/api/ru/1336519654/optimizer/reports/summary/',
            headers: {
                'accept': 'application/json',
                'Authorization': 'Token:' + auth.token,
            },
            body:
                {
                    "items": [{
                        "lang": "ru",
                        "title_keywords": ["Flirt", "me", ":", "знакомства", "рядом", "18+"],
                        "subtitle_keywords": ["Онлайн", "флирт", "и", "быстрые", "встречи"],
                        "desc_keywords": ["тиндер", "сайт", "секса", "секс", "анонимные", "интим", "маил", "ру", "баду", "друг", "вокруг", "измен", "бесплатно", "девушки", "чат", "чаты", "для"]
                    }]
                }
            ,
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200);
                expect(response.body.sqr).not.be.empty;
                expect(response.body.or).not.be.empty;
                expect(response.body.sqr.total_count).not.be.eq(0);
                expect(response.body.or.total_count).not.be.eq(0);
            })
    });
});
