describe('handle dropdown', () => {

    it('Dropdown with select', () => {
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get('#select2-billing_country-container').click()
        cy.get('.select2-search.select2-search--dropdown').type('Italy').type('{enter}')
        cy.get('#select2-billing_country-container')
            .should('have.text', 'Italy')
    })

    it('Auto suggest dropdown', () => {
        cy.visit("https://www.wikipedia.org/")
        cy.get('input#searchInput').type('Dehli')
        cy.get('.suggestion-title').contains('Dehli9').click()
    })

    it('select dropdown', () => {
        cy.visit("https://www.zoho.com/commerce/free-demo.html")
        cy.url().should('eq', 'https://www.zoho.com/commerce/free-demo.html')

        cy.get('#zcf_address_country').select('Italy')
            .should('have.value', 'Italy')
    })

})