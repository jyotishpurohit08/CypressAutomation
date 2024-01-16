
import Login from "../PageObjects/LoginPage2.js";
describe("pageObject demo", () => {

    // simple method

    it("Login Test", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        cy.get("input[placeholder='Username']").type("Admin");
        cy.get("input[placeholder='Password']").type("admin123");
        cy.get("button[type='submit']").click();
        cy.get('.oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module').should('have.text', 'Dashboard');

    })

    // pageObject method

    it("Login Test", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
        const ln = new Login();
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit();
        ln.verifyLogin();

    })

    // pageObject method using with fixture

    it.only("Login Test", () => {

        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");

        cy.fixture('Orangehrm').then((data) => {


            const ln = new Login();
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit();
            ln.verifyLogin();

        })

    })

})