export class Functions {

     setClearRank(status) {
        cy.get('.profileDropdown__toggle').click();
        cy.get('[href="/settings/profile"]').click();
        cy.wait(500);
        status != true ? cy.get('#id_is_clear_rank').uncheck({force: true}).should('not.be.checked') : cy.get('#id_is_clear_rank').check({force: true}).should('be.checked');
        cy.wait(500);
        cy.get(':nth-child(7) > .col-xs-12 > .btn-success').click();

    }
}