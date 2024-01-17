describe('CustomCommands', () => {

    // click on link using label
    it.only("handling links", () => {

        cy.visit("https://demo.nopcommerce.com/");
        cy.get("body > div:nth-child(7) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(4) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > h2:nth-child(1) > a:nth-child(1)").click();

        // using coustom command
        //  cy.clickLink("Apple MacBook Pro 13-inch");
        cy.get("div[class='product-name'] h1").should('have.text', 'Apple MacBook Pro 13-inch');

    })

    it("Overwriting existing command", () => {



    })

    it("Login command", () => {



    })
})