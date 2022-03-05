import {Constants} from ".//Constants";
import {Auth} from ".//Auth";


const constant = new Constants();
const auth = new Auth();


export class Commands {
    frontendSettings = null;
    sidebarInfo = null;

    setClearRank(status) {
        cy.get('.profileDropdown').click();
        cy.get('.dropdown-menu > [href="/settings/profile"]').click({waitForAnimations: false});
        cy.wait(500);
        status !== true ? cy.get('#id_is_clear_rank').uncheck({force: true}).should('not.be.checked') : cy.get('#id_is_clear_rank').check({force: true}).should('be.checked');
        cy.wait(500);
        cy.get(':nth-child(7) > .col-xs-12 > .btn-success').click();
    }

    deleteUser() {
        cy.get('.profileDropdown').click({force: true});
        cy.wait(500);
        cy.get('.dropdown-menu > [href="/settings/profile"]').click({force: true});
        cy.wait(500);
        cy.get('a').contains('Remove account').as('removeLink')
        cy.waitFor('@removeLink')
        cy.get('@removeLink').click({force: true});
        cy.wait(500);
        cy.get('[name=remove_account]').as('removeModal').should('be.visible');
        cy.waitFor('@removeModal')
        cy.get('@removeModal').click({force: true})
        cy.url().should('include', 'accounts/login/');
    }

    changePassword() {
        cy.get('.profileDropdown').click({force: true});
        cy.get('.dropdown-menu > [href="/settings/profile"]').click({force: true});
        cy.wait(500);
        cy.get('a').contains('Change password').click({force: true});
        cy.get('input[name="oldpassword"]')
            .type(constant.password).should('have.value', constant.password);
        cy.get('input[name="password1"]')
            .type(constant.password).should('have.value', constant.password);
        cy.get('input[name="password2"]')
            .type(constant.password).should('have.value', constant.password);
        // cy.waitFor('https://hq.asodesk.com/accounts/password/change');
        cy.get('.buttonElement--primary').contains('Change Password').should('not.be.disabled').click();
        cy.get('span[data-notify="message"]').should('contain', 'Password successfully changed')
    }

    changeForgottenPassword() {
        cy.url().should('include', 'set-password/');
        cy.get('input[name="password1"]')
            .type(constant.password).should('have.value', constant.password);
        cy.get('input[name="password2"]')
            .type(constant.password).should('have.value', constant.password);
        cy.get('.buttonElement--primary').contains('Change Password').should('not.be.disabled').click();
        cy.get('span[data-notify="message"]').should('contain', 'Password successfully changed')
        cy.wait(1000);
        cy.url().should('contain', 'asodesk.com/ru/')
    }

    forgotPassword(email) {
        cy.get('a').contains('Forgot Password?').click();
        cy.url().should('contain', 'accounts/password/reset');
        cy.get('.accountTitle').should('contain', 'Password Reset').and('be.visible');
        cy.get('input[name="email"]')
            .type(email).should('have.value', email);
        cy.get('.buttonElement--primary').contains('reset my password', {matchCase: false}).should('not.be.disabled').click();

    }

    chooseTariff(plan) {

        if (plan === 'Free') {
            cy.get(':nth-child(1) a').contains('Free Plan').click();
        }

        if (plan === 'Trial') {
            cy.get(':nth-child(2) a').contains('Trial').click();

            cy.get(':nth-child(5) > .account-selector__control > .account-selector__value-container').click().should('be.visible');
            cy.get('#react-select-6-option-0').click();

            cy.get("[name=comm_username]").type('test');
            cy.get(':nth-child(18) > .tb-checkbox__body').click();
        }

        cy.wait(500)
        cy.get("[name=company]").type(constant.name).should('be.visible');
        cy.get(':nth-child(1) > .account-selector__control > .account-selector__value-container').click();
        cy.get(':nth-child(1) > .account-selector__menu').click();

        cy.get(':nth-child(2) > .account-selector__control > .account-selector__value-container').type('Russia');
        cy.get(':nth-child(1) > .countrySelector__option').click()

        cy.get(':nth-child(4) > .account-selector__control > .account-selector__value-container').click();
        cy.get('#react-select-5-option-10').click();

        cy.get('.buttonElement--primary').should('not.be.disabled').click();
    }

    checkSidebarStatus(status) {
        if (status === false) {
            cy.get('aside').should('have.class', 'sidebar_sidebarClose__2ZR_C')
        } else if (status === true) {
            cy.get('aside').should('have.not.class', 'sidebar_sidebarClose__2ZR_C')
        }
    }

    getFrontendSettings() {
        cy.request({
            method: 'GET',
            url: 'api/frontend-settings', // baseUrl is prepended to url
            headers: {
                'accept': 'application/json',
                'Authorization': '' + auth.token,
            }
        })
            .then((response) => {
                this.frontendSettings = response.body
                chai.expect(this.frontendSettings).to.not.be.undefined
            })
    }

    getSidebarInfo() {
        cy.request({
            method: 'GET',
            url: 'api/sidebar-info', // baseUrl is prepended to url
            headers: {
                'accept': 'application/json',
                'Authorization': '' + auth.token,
            }
        })
            .then((response) => {
                this.sidebarInfo = response.body
                chai.expect(this.sidebarInfo).to.not.be.undefined
            })
    }

    openSidebar(isOpen) {
        isOpen === false ? cy.get('.bg-gray-50 > .cursor-pointer > .icon').click() : cy.log('it`s already opened')
    }

    closeSidebar(isClose) {
        isClose === true ? cy.get('.bg-gray-50 > .cursor-pointer > .icon').click() : cy.log('it`s already closed')
    }

    expandMenu(isExpand, name) {
        isExpand === true ? cy.contains(name, {matchCase: false}).click({force: true}) : cy.log('it`s already expanded')
    }

    collapsMenu(isCollaps, name) {
        isCollaps === false ? cy.contains(name, {matchCase: false}).click({force: true}) : cy.log('it`s already collapsed')
    }
}
