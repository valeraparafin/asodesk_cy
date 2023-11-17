/// <reference types="cypress" />
import { Runnable } from "mocha";
import { Constants } from "../../Service_new/Classes_library/Constants";

const constant = new Constants();



describe('Tools should redirect to login page without Authorization', function () {
    
    it('Categories Ranking should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        // cy.request({
        //     url: 'http://feature-update-permissions.asodesk.staging.asodesk.com/api/tracked-apps?country=us',
        //     failOnStatusCode: false, // Игнорировать ошибку 401       
        // });          

        // cy.request({
        //     url: 'http://feature-update-permissions.asodesk.staging.asodesk.com/api/frontend-settings/ui-config/',
        //     failOnStatusCode: false, // Игнорировать ошибку 401  
        // });  

        // cy.request({
        //     url: 'http://feature-update-permissions.asodesk.staging.asodesk.com/api/request-info',
        //     failOnStatusCode: false, // Игнорировать ошибку 401
        // });


        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Categories Ranking').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });

    it('Charts should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Keywords")').click();
        cy.contains('Charts').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });    

    it('Competitors positions should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Keywords")').click();
        cy.contains('Competitors').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });  

    it('Auto-Suggestions should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Keywords")').click();
        cy.contains('Auto-Suggestions').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

    it('Text Metadata Builder should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open ASO Tools
        cy.contains('ASO Tools').click();
        cy.get('div[class="relative cursor-default"]:contains("Page Builder")').click();
        cy.contains('Text Metadata Builder').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });
    
    it('Featured Reviews should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open Reviews & Ratings
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Featured Reviews').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

    it('Reviews Analysis should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open Reviews & Ratings
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Reviews Analysis').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });
    
    it('Rating Analysis should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open Reviews & Ratings
        cy.contains('Reviews & Ratings').click();
        cy.get('div[class="relative cursor-default"]:contains("Analytics")').click();
        cy.contains('Rating Analysis').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    });     

    it('API should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open Connections Hub
        cy.contains('Connections Hub').click();
        cy.get('a[href="/connections-hub/api"]').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

    it('Keyword Boost should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open Keyword Boost
        cy.contains('Keyword Boost').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

    it('Refer a Friend should redirect to login page', function () {

        // Ignore errors for unauthorized user (401) 
        cy.on('uncaught:exception', (err, runnable) => {
            return false;
        });

        //Sign in
        cy.visit('http://hq.asodesk.com');

        //Open Refer a Friend
        cy.contains('Refer a Friend').click();

        //Check redirect to login page
        cy.url().should('include', 'login');
    }); 

});