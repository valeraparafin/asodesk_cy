/// <reference types="cypress" />
import 'dayjs';


const dayjs = require('dayjs')
let prevMonth = dayjs().month(11) ? dayjs().format("YYYY") - 1 + dayjs().month(11).format("MM") : dayjs().format("YYYYMM") - 1;
// condition above is way to do test flexible (sensitive) if is last month in year
let isNull;


describe('Healthy check CVR Benchmark', () => {

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



