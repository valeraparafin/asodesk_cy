import {Constants} from ".//Constants";


const constant = new Constants();

export class Commands {

    setClearRank(status) {
        cy.get('.profileDropdown').click();
        cy.get('.dropdown-menu > [href="/settings/profile"]').click({waitForAnimations: false});
        cy.wait(500);
        status !== true ? cy.get('#id_is_clear_rank').uncheck({force: true}).should('not.be.checked') : cy.get('#id_is_clear_rank').check({force: true}).should('be.checked');
        cy.wait(500);
        cy.get(':nth-child(7) > .col-xs-12 > .btn-success').click();
    }

    deleteUser() {
        cy.get('.profileDropdown').click();
        cy.get('.dropdown-menu > [href="/settings/profile"]').click();
        cy.wait(500);
        cy.get('a').contains('Remove account').click();
        cy.get('[name=remove_account]').click().should('be.visible');
    }
    changePassword() {
        cy.get('.profileDropdown').click();
        cy.get('.dropdown-menu > [href="/settings/profile"]').click();
        cy.wait(500);
        cy.get('a').contains('Change password').click();
        cy.get('input[name="oldpassword"]')
            .type(constant.password).should('have.value', constant.password)
        cy.get('input[name="password1"]')
            .type(constant.password).should('have.value', constant.password)
        cy.get('input[name="password2"]')
            .type(constant.password).should('have.value', constant.password)
        // cy.waitFor('https://hq.asodesk.com/accounts/password/change');
        cy.get('.buttonElement--primary').contains('Change Password').should('not.be.disabled').click();
        cy.get('span[data-notify="message"]').should('contain', 'Password successfully changed')
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
}
