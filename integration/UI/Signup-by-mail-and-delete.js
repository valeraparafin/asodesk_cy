/// <reference types="cypress-mailslurp" />

import "cypress-mailslurp";
import {Commands} from "../Service_new/Classes_library/Commands";
import {Auth} from "../Service_new/Classes_library/Auth";

const command = new Commands();
const auth = new Auth();

describe("User sign up test with mailslurp plugin", function () {
    // use cypress-mailslurp plugin to create or use created an email address before test
    before(function () {
        return cy.mailslurp()
            .then(mailslurp => mailslurp.getInbox('ac0c15f1-5ae9-4b7f-8bd4-02ecbc3c2f6d'))
            .then(inbox => {
                // save inbox id and email address to this (make sure you use function and not arrow syntax)
                cy.wrap(inbox.id).as('inboxId')
                cy.wrap(inbox.emailAddress).as('emailAddress')
            })
    });
    it("01 - can load the demo application", function () {
        // get wrapped email address and assert contains a mailslurp email address
        chai.expect(this.emailAddress).to.contain("@mailslurp");
        // visit the application with generated email
        auth.signUp('https://hq.asodesk.com', this.emailAddress);
     });

    it("02 - can receive confirmation code by email and activate account", function () {
        // app will send user an email containing a code, use mailslurp to wait for the latest email
        cy.mailslurp()
            // use inbox id and a timeout of 30 seconds, check unread mail only (set true)
            .then(mailslurp => mailslurp.waitForLatestEmail(
                'ac0c15f1-5ae9-4b7f-8bd4-02ecbc3c2f6d', 3000, true))
            // extract the confirmation code from the email body
            .then(email => new RegExp('accounts/confirm-email/.{43}').exec(email.body))
            // generate url with confirmation code to activate account and get token from cookies to use it below
            .then(code => {
                cy.visit("/" + code);
                cy.wait(3000);
                auth.getToken()
            })
    });


    it("03 - can choose tariff plan", function () {
        // set cookie to continue and choose the tariff
        cy.setCookie('Authorization', auth.token);
        command.chooseTariff('Free')
    });

    it('04 - can delete user', function () {
        // set cookie to continue and delete the user
        cy.setCookie('Authorization', auth.token);
        cy.visit('/');
        command.deleteUser()
    });
});