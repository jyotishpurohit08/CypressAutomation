describe('Handle Tab', () => {

    it("handle tab- appracoh1", () => {

        cy.visit("https://the-internet.herokuapp.com/windows")// parent window
        cy.get('.example>a').invoke('removeAttr', 'target').click();
        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')

        cy.wait(5000);

        //operation
        cy.go('back'); // back to parent tab

    })

    it("handle tab- appracoh2", () => {

        cy.visit("https://the-internet.herokuapp.com/windows")// parent window
        cy.get('.example>a').then((e) => {
            let url = e.prop('href');

            cy.visit(url);

        })

        cy.url().should('include', 'https://the-internet.herokuapp.com/windows/new')
        cy.wait(5000);
        cy.go('back'); // back to parent tab

    })

})