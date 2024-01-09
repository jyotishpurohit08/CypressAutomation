describe("Assertions demo", () => {
    it("Implicit assertions", () => { 
    
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
        //should assertions - postive assertions

      //  cy.url().should('include','orangehrmlive.com')  // include-part of url
      //  cy.url().should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //eq-equal
      //  cy.url().should('contain','orangehrm') //eq and contain is same

      /*  cy.url().should('include','orangehrmlive.com')  // include-part of url
        .should('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //eq-equal
        .should('contain','orangehrm') //eq and contain is same */

         // and assertions - postive assertions

        cy.url().should('include','orangehrmlive.com')  // include-part of url
        .and('eq','https://opensource-demo.orangehrmlive.com/web/index.php/auth/login') //eq-equal
        .and('contain','orangehrm') //eq and contain is same
       // .and('not.contain','geernhrm') //eq and contain is same  (not- nagitive assertion)
          
        cy.title().should('include','Orange')
        .and('eq','OrangeHRM')
        .and('contain',"HRM")

        // verify logo

        cy.get('.orangehrm-login-branding > img').should('be.visible')
        .and('exist')

        // capture all links

        cy.xpath("//a").should('have.length','5') //ecpected value

        cy.get("input[placeholder='Username']").type("Admin") //provide a value in inputbox

        // should assertion
        cy.get("input[placeholder='Username']").should('have.value','Admin') // check the value correct inputbox
        
    
    })



    it("explicit assertions", () => { 
    
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        
       cy.get("input[placeholder='Username']").type("Admin")
       cy.get("input[placeholder='Password']").type("admin123")
       cy.get("button[type='submit']").click()

    // explicit Assertion not darectly use becasuse explicit assertion are the castmaigestion assertion

      // javascript funcation
       let expName="Trinhs Han"; // let = is a key word

       cy.get(".oxd-userdropdown-name").then( (x)=>{
     
        let actName=x.text()

       // explicit Assertion (BDD-style) - positive
        expect(actName).to.equal(expName)
        // explicit Assertion (BDD-style) - nedative
        expect(actName).to.not.equal(expName)

        // TDD-style
        assert.equal(actName,expName)
        assert.notEqual(actName,expName)
       })


    })
    
    })