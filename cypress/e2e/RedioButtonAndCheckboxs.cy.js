describe("check UI Elements", () => {
    it("Checking Radio Buttons", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().should('eq', 'https://testautomationpractice.blogspot.com/')

        //Assertion - visible of the element
        cy.get("input#male").should('be.visible')

        // click action - select redio button
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')
        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')


    })


    it("Checking checkBox", () => {
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.url().should('eq', 'https://testautomationpractice.blogspot.com/')

        //Assertion visible of the element
        cy.get("input#sunday").should('be.visible')

        // click action - select redio button
        cy.get("input#sunday").check().should('be.checked')
        //Unselecting checkbox
        cy.get("input#monday").uncheck().should('not.be.checked')
        cy.get("input#monday").check().should('be.checked')
        cy.get("input#sunday").uncheck().should('not.be.checked')

        // select all check box
        //  cy.get("input.form-group[type='checkbox']").check().should('be.checked')

        // select first and last check box check
        //   cy.get("input.form-group[type='checkbox']").first().check()
        //   cy.get("input.form-group[type='checkbox']").last().check()

    })

})