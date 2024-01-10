import 'cypress-iframe'
describe('Handle Iframe', () => {

    it("handle iframe- appracoh1", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe"); // parent window



        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap);

        iframe.clear().type("Welcome {cmd+a}");
        // bold text
        cy.get("button[title='Bold']").click();


    })

    it.only("handle iframe- appracoh2", () => {

        cy.visit("https://the-internet.herokuapp.com/iframe"); // parent window

        cy.getIframe('#mce_0_ifr').clear().type("Welcome {cmd+a}");



    })

    it("handle iframe- appracoh3", () => { // by using cypress-iframe plugin

        cy.visit("https://the-internet.herokuapp.com/iframe"); // parent window

        cy.frameLoaded('#mce_0_ifr'); // load the frame
        cy.iframe('#mce_0_ifr').clear().type("Welcome");



    })

})