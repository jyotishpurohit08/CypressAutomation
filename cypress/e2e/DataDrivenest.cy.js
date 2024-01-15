describe('DataDrivenTest', () => {

    it('dataDriven', () => {

        cy.fixture("Orangehrm2").then((data) => {

            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

            data.forEach((userdata) => {

                cy.get("input[placeholder='Username']").type("data.username");
                cy.get("input[placeholder='Password']").type("data.password");
                cy.get("button[type='submit']").click();

                if (userdata.username == 'Admin' && userdata.password == "admin123") {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module")
                        .should('have.text', userdata.expected);

                    cy.get('.oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon').click();
                    cy.get(':nth-child(4) > .oxd-userdropdown-link').click();
                }

                else {
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text")
                        .should('have.text', userdata.expected)
                }


            })

        })
    })
})
