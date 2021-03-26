export class getToken {
    login = 'iparafin@yandex.ru';
    password = 'A123321b';
    token = null;
    c = null;

    Authorize() {
        cy.visit('https://hq.asodesk.com');
        cy.get('input[name="email"]')
            .type(this.login).should('have.value', this.login)

        cy.get('input[name="password"]')
            .type(this.password).should('have.value', this.password)
        cy.get('.buttonElement--primary').should('not.be.disabled').click()

        cy.get('.dashboardAppCard').should('be.visible')

        //if the content on page is visible then get the cookies
        //cause we need a delay to get complete data, before send request

        cy.getCookie('sessionid')
            .should('exist')
            .then((cookie) => {
                this.c = cookie.value
                // cookie is an object with "domain", "name" and other properties+
                // in this case only is an object with "sessionsid" value
            })

        cy.request({
            method: 'POST',
            url: 'https://hq.asodesk.com/api/auth/obtain', // baseUrl is prepended to url
            form: true, // indicates the body should be form urlencoded and sets Content-Type: application/x-www-form-urlencoded headers
            body: {
                username: this.login,
                password: this.password,
            }
        })
            .then((response) => {
                // console.log(response.body);
                assert.equal(response.status, 200);
                let jsonData = response.body;
                this.token = jsonData.access;
                chai.expect(this.token).to.not.be.eq(null)
                // console.log(token);
            })
    };
}