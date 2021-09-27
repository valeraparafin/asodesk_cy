/// <reference types="cypress-mailslurp" />

import "cypress-mailslurp";
import {Commands} from "../Service_new/Classes_library/Commands";
import {Auth} from "../Service_new/Classes_library/Auth";

const command = new Commands();
const auth = new Auth();

describe("User case sign up, change password and delete account", function () {
    // use cypress-mailslurp plugin to create or use created an email address before test
    before(function () {
        return cy.mailslurp()
            .then(mailslurp => mailslurp.getInbox('9c241587-6cac-4d5e-a3c4-c1dd264890bd'))
            .then(inbox => {
                // save inbox id and email address to this (make sure you use function and not arrow syntax)
                cy.wrap(inbox.id).as('inboxId')
                cy.wrap(inbox.emailAddress).as('emailAddress')
            })
    });

    it('01 - can sign up with email', function () {
        // get wrapped email address and assert contains a mailslurp email address
        chai.expect(this.emailAddress).to.contain("@mailslurp");
        // visit the application with generated email
        auth.signUp(null, this.emailAddress);
    });

    it('02 - can receive confirmation code and activate account', function () {
        // app will send user an email containing a code, use mailslurp to wait for the latest email
        cy.mailslurp()
            // use inbox id and a timeout of 30 seconds, check unread mail only (set true)
            .then(mailslurp => mailslurp.waitForLatestEmail(
                this.inboxId, 8000, true))
            // extract the confirmation code from the email body
            .then(email => new RegExp('accounts/confirm-email/.{43}').exec(email.body))
            // generate url with confirmation code to activate account and get token from cookies to use it below
            .then(code => {
                cy.visit("/" + code);
                cy.wait(3000);
                auth.getToken()
            })
    });

    it('03 - can choose tariff plan', function () {
        // set cookie to continue and choose the tariff
        cy.setCookie('Authorization', auth.token);
        command.chooseTariff('Free') // Free || Trial
    });

    it('04 - can reset password by email', function () {
        cy.visit('');
        command.forgotPassword(this.emailAddress)
        cy.mailslurp()
            // use inbox id and a timeout of 30 seconds, check unread mail only (set true)
            .then(mailslurp => mailslurp.waitForLatestEmail(
                this.inboxId, 8000, true))
            // extract the confirmation code from the email body
            .then(email => new RegExp('accounts/password/reset/key/.{30}').exec(email.body))
            // generate url with confirmation code to activate account and get token from cookies to use it below
            .then(code => {
                cy.visit("/" + code);
                cy.wait(1000);
                command.changeForgottenPassword()
            })
    });

    it('05 - can change password in profile', function () {
        cy.setCookie('Authorization', auth.token);
        cy.visit('/');
        command.changePassword()

    });

    it('05 - can delete user', function () {
        // set cookie to continue and delete the user
        cy.setCookie('Authorization', auth.token);
        cy.visit('/');
        command.deleteUser()
    });

});
