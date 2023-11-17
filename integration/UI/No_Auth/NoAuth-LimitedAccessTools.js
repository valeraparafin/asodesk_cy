/// <reference types="cypress" />
import { Runnable } from "mocha";
import { Constants } from "../../Service_new/Classes_library/Constants";
import 'dayjs';

const constant = new Constants();

const toDaysDate = constant.toDaysDate;
const prevDaysDate = constant.s_toDaysDate;

//for CVR Benchmarks
const dayjs = require('dayjs')
let prevMonth = dayjs().month(11) ? dayjs().format("YYYY") - 1 + dayjs().month(11).format("MM") : dayjs().format("YYYYMM") - 1;
// condition above is way to do test flexible (sensitive) if is last month in year
let isNull;

describe('Top Charts should have limited access and data', function () {
    
    it('Limited version Banner should be visible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('Stores Analytics').click();
        cy.contains('Top Charts').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('This is a limited version');
    }); 

    it('top-charts free should respose 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/top-charts/?device_type=iphone&length=20&list_type=free&start=0&store_id=3600&timestamp=' + toDaysDate,
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
        .then((response) => {
            expect(response.status).eq(200)
            expect(response.body.data).not.be.empty;
        }) 
        
    })

    it('top-charts paid should respose 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/top-charts/?device_type=iphone&length=20&list_type=paid&start=0&store_id=3600&timestamp=' + toDaysDate,
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
        .then((response) => {
            expect(response.status).eq(200)
            expect(response.body.data).not.be.empty;
        }) 
        
    })

});

describe('CVR Benchmark should have limited access and data', function () {
    
    it('Limited version Banner should be visible and export button redirect to login page', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('Stores Analytics').click();
        cy.contains('CVR Benchmarks').click();

        // cy.get('button[class="buttonElement buttonElement--default buttonElement--oldMd buttonElement--solid buttonElement--block"]:contains("Export (.xslx)")').click();
        cy.contains('Export').click();    

        //Check redirect to login page
        cy.url().should('include', 'login');
        cy.go('back');
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('This is a limited version');

    }); 
    
    it('Was data downloaded for ' + prevMonth + '?', () => {
        cy.request({
            method: 'get',
            followRedirect: false, log: true, //turn off
            url: '/api/us/benchmark/?month=' + prevMonth + '&appType=apps&storeType=apple-store',
            headers: {},
            response: []
        })
        .then((response) => {
            if (response.body.categories.length === 0) {
                isNull = true
                chai.expect(isNull).to.be.false // Error! Data wasn`t downloaded!
            } else {
                cy.log('Data was downloaded! Everything is OK!')
            }
        })
    })

});

describe('Top Keywords should have limited access and data', function () {
    
    it('Limited version Banner should be visible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('Stores Analytics').click();
        cy.contains('Top Keywords').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('This is a limited version');
    }); 

    it('top-keywords should respose 200 and not be empty', function () {
        cy.request({
            method: 'GET',
            followRedirect: true, log: true, //turn off
            url: 'api/us/top-keywords?store=appstore',
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
        .then((response) => {
            expect(response.status).eq(200)
            expect(response.body).not.be.empty;
        }) 
        
    })

});

describe('App Store Trending Searches should have limited access and data', function () {
    
    it('Limited version Banner should be visible', function () {
        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        cy.visit('http://hq.asodesk.com');
        cy.contains('Stores Analytics').click();
        cy.contains('App Store Trending Searches').click();
        
        cy.get('div[class="rounded-8 my-16 relative bg-rb-accent-blue-default !text-rb-bg-white py-40 px-32"]').should('exist');
        cy.contains('This is a limited version');
    }); 

    it('trending-searches iphone should response 200 and not be empty', () => {
        cy.request({
            method: 'GET',
            followRedirect: false, log: true, //turn off
            url: 'api/us/trending-searches/?device=iphone&timestamp=' + prevDaysDate,
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.is_demo).eq(true);
            })
    })

    it('trending-searches ipad should response 200 and not be empty', () => {
        cy.request({
            method: 'GET',
            followRedirect: false, log: true, //turn off
            url: 'api/us/trending-searches/?device=ipad&timestamp=' + prevDaysDate,
            headers: {
                'accept': 'application/json',
            },
            response: []
        })
            .then((response) => {
                expect(response.status).eq(200)
                expect(response.body.is_demo).eq(true);
            })
    })

});