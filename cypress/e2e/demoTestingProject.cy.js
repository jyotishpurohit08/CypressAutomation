describe('My demo project Test', () => {
    it('visit URL', () => {
        cy.visit("https://katalon-demo-cura.herokuapp.com/")
        cy.get('#btn-make-appointment').click();

        it('login page', () => {
            //    cy.visit("https://katalon-demo-cura.herokuapp.com/profile.php#login")
            cy.get('#txt-username').type('John Doe');
            cy.get('#txt-password').type('ThisIsNotAPassword');
            cy.get('#btn-login').click();
            cy.get("div[class='col-sm-12 text-center'] h2").should('have.text', "Make Appointment");
            cy.wait(3000);

            it('Make Appointment', () => {

                //   cy.visit("https://katalon-demo-cura.herokuapp.com/")

                cy.get('#combo_facility').select('Hongkong CURA Healthcare Center');
                cy.get('#chk_hospotal_readmission').click();
                cy.get("#radio_program_medicaid").check().should('be.checked')
                cy.get('#txt_visit_date').type('11/11/2024');
                cy.get('#txt_comment').click({ force: true });
                cy.get('#txt_comment').type('hii what are doing today my appointment');
                cy.get('#btn-book-appointment').click();
                cy.wait(3000);
                cy.get("div[class='col-xs-12 text-center'] h2").should('have.text', "Appointment Confirmation");

            })
        })

    })
})