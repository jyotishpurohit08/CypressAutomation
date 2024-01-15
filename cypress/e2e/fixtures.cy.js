describe('fixtures', () => {

    // Direct Access

    it('FixturesDemoTest', () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/");
        cy.fixture('Orangehrm').then((data) => {


            cy.get("input[placeholder='Username']").type("data.username");
            cy.get("input[placeholder='Password']").type("data.password");
            cy.get("button[type='submit']").click();
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                .should('have.text', data.expected);

        })
    })

    /*   // access through Hook - for multiple it blocks
   
         let userdata;
          before(()=>{
              cy.fixture('Orangehrm').then((data) => {
           userdata=data;
      
         })
   })
   
   it('FixturesDemoTest', () => {
   cy.visit("https://opensource-demo.orangehrmlive.com/");
   cy.fixture('Orangehrm').then((data) => {
   
   
       cy.get("input[placeholder='Username']").type("data.username");
       cy.get("input[placeholder='Password']").type("data.password");
       cy.get("button[type='submit']").click();
       cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
           .should('have.text', data.expected);
   
            })
   
            */

})







