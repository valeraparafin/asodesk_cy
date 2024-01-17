/// <reference types="cypress-mailslurp" />

import "cypress-mailslurp";
import { Commands } from "../../Service_new/Classes_library/Commands";
import { Auth } from "../../Service_new/Classes_library/Auth";

const command = new Commands();
const auth = new Auth();

describe("Sign up, onboarding and product tour", function () {
    // use cypress-mailslurp plugin to create or use created an email address before test
    before(function () {
        return cy.mailslurp()
            // create new inbox
            .then(mailslurp => mailslurp.getInbox('e8ac4345-9a68-4227-b471-2aa0214701fd'))
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
        auth.signUp(this.emailAddress);
    });

    it('02 - can receive confirmation code and activate account', function () {
        // app will send user an email containing a code, use mailslurp to wait for the latest email
        auth.signIn(this.emailAddress);
        cy.wait(30000);
        cy.mailslurp()
            // use inbox id and a timeout of 30 seconds, check unread mail only (set true)
            .then(mailslurp => mailslurp.waitForLatestEmail(
                this.inboxId, 30000, true))
            // extract the confirmation code from the email body
            .then(email => new RegExp('\\d{4}</h4>').exec(email.body))
            // generate url with confirmation code to activate account and get token from cookies to use it below
            .then(code => {
                cy.get('[data-id="0"]').type("" + code.slice(0, 4), { delay: 100 })
                    .then(() => {
                        cy.contains('Incorrect code entered').should('not.exist')
                    })
            })
        auth.getToken()

        
    });


    it('Onboarding steps', function () {
        // cy.setCookie('Authorization', auth.token);
        cy.visit('/')

        //"Let's get to know you"
        cy.get('input[id="companyName"]').type('Test Company Name');
        cy.get('input[value="Project Management"]').click();
        cy.get('input[name="role-other"]').type('QA');
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full"]').click();

        //"Almost done"
        cy.get('input[value="2 - 5"]').click();
        cy.get('input[value="50 - 99"]').click();
        cy.get('input[value="6 - 20"]').click();
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full"]').click();

        //"The last one"
        cy.get('input[value="YouTube"]').click();
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full"]').click();
       
        //The beginer's guide
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full mb-8"]').click();

        //Select store country
        cy.get('button[class="driver-popover-next-btn"]').click();

        //Track your first app
        cy.get('inputid="react-select-3-input"]').type('google');
        cy.contains('Track').eq(0).click();

        //Global navigation. Aso Tools
        cy.contains('ASO Tools').click();

        //Local Navigation and Tools
        cy.contains('Google');
        cy.contains('Keywords').focus();
        cy.contains('Find & Track').click();

        //Posibilities of Asodesk
        cy.contains('Track keyword positions with Keyword Ranking Chart, find and manage the best keywords for your app with Keyword Manager and Keyword Table');
        cy.get('button[class="driver-popover-next-btn"]').click();

        //Reviews & Ratings
        cy.contains('Universal tool to work with your users');
        cy.get('button[class="driver-popover-next-btn"]').click();
        
        //Stores Analytics
        cy.contains('Discover real-time search results on the App Store and Google Play');
        cy.get('button[class="driver-popover-next-btn"]').click();       
        
        //Connections Hub
        cy.contains('All Reports Settings');
        cy.get('button[class="driver-popover-next-btn"]').click();  

        //Ketword Boost
        cy.contains('Create and manage Keyword Boost campaigns to get top-1 in search results');
        cy.get('button[class="driver-popover-next-btn"]').click();  

        //Schedule a demo
        cy.get('button[class="buttonElement buttonElement--secondary buttonElement--md rounded-4 w-full"]').click();        

        //"Find a perfect fit for you"
        cy.get('button[class="buttonElement buttonElement--success buttonElement--lg buttonElement--solid buttonElement--block rounded-4 gm-onboarding-get-trial-btn"]').click();          

        //Welcome on Board
        cy.get('button[class="buttonElement buttonElement--primary buttonElement--md rounded-4 w-full"]').click();          

    }); 


    it('06 - can delete user', function () {
        // set cookie to continue and delete the user
        cy.setCookie('Authorization', auth.token);
        cy.visit('/');
        command.deleteUser()
    });

});
