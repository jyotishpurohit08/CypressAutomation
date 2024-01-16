
// go
describe('mysuite', () => {

    it('NavigationTest', () => {

        cy.visit("https://demo.opencart.com/");
        cy.title().should('eq', 'Your Store');  // assertion
        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text', "Cameras");

        cy.go('back');  // go back home page
        cy.title().should('eq', 'Your Store');  // assertion

        cy.go('forward');  // go to the camera page
        cy.get("div[id='content'] h2").should('have.text', "Cameras");

        // Apporach - 2

        cy.go(-1);  // go to home page
        cy.title().should('eq', 'Your Store');  // assertion

        cy.go(1);  // go to the camera page
        cy.get("div[id='content'] h2").should('have.text', "Cameras");

        cy.reload();


    })
})