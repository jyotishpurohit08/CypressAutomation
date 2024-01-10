/// <referece types="Cypress" />

describe('Alerts', () => {

    // 1) javascript Alert: It will have same text and  an 'OK button'
    it("Js alert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsAlert()']").click()
        cy.on('window:alert', (t) => {

            expect(t).to.contains('I am a JS Alert');
        })

        // alert window automatically closeed by cypress

        cy.get("#result").should('have.text', 'You successfully clicked an alert')


    })

    // 2) javascript Confirmation Alert: It will have same text and  an 'OK and Cancel' button

    it("Js confirmation alert", () => {

        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.get("button[onclick='jsConfirm()']").click()
        cy.on('window:confirm', (t) => {

            expect(t).to.contains('I am a JS Confirm');

        })
        // cypress automatically closed alertwindow by using OK button - default

        cy.get("#result").should('have.text', 'You clicked: Ok')

    })

})

it("Js confirmation alert", () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.get("button[onclick='jsConfirm()']").click()
    cy.on('window:confirm', (t) => {

        expect(t).to.contains('I am a JS Confirm');

    })

    cy.on('window:confirm', () => false); //  close alert windoe using cancel button

    cy.get("#result").should('have.text', 'You clicked: Cancel')

})

// 3) javascript prompt Alert: It will have same text with a text box for user along with 'OK and Cancel' button

it("Js prompt alert", () => {

    cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
    cy.window().then((win) => {
        cy.stub(win, 'prompt').returns('welcome')
    })
    cy.get("button[onclick='jsPrompt()']").click()

    //  cypress automatically closed prompt alert window by using OK button - default

    //  cy.on('window:prompt', () => false); //  close alert windoe using cancel button

    cy.get("#result").should('have.text', 'You entered: welcome');


})

// 4) Authenticated Alert

it.only("Js prompt alert", () => {


    // appraoch-1

    /*  cy.visit("https://the-internet.herokuapp.com/basic_auth", {
          auth:
          {
              username: "admin",
              password: "admin"
          }
  
  
      });
  
      cy.get("div[class='example'] p").should('have.contain', "Congratulations")
      */

    // appraoch-1

    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain', "Congratulations");
})






