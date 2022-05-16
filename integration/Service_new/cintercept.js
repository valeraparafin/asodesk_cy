/// <reference types="cypress" />

import {Commands} from "./Classes_library/Commands";
import {Auth} from "./Classes_library/Auth";


const commands = new Commands();
const auth = new Auth();

it('Intercept stab', () => {

    cy.intercept({
        method: 'GET',
        url: 'https://hq.asodesk.com/api/ru/get-app-locales/?page=1'
    }, {
        fixture: 'apps.json'
    }).as('appCount')

    auth.signIn()
    cy.wait('@appCount');
    auth.getToken()


})