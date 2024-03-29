describe('mysuite', () => {

    it('Capture Screenshot & Video', () => {

        cy.visit("https://demo.opencart.com/");
        /*  cy.screenshot("homepage");
  
          cy.wait(5000);
          cy.get("img[title='Your Store']").screenshot("logo");
          */

        // Automatically capture screenshot & video on failure

        cy.get('li:nth-child(7) a:nth-child(1)').click();
        cy.get("div[id='content'] h2").should('have.text', "Tablets");

    })
})