//before
//after
//beforeEach
//afterEach
describe('Hooks and tags', () => {

    before(() => {
        cy.log("********  Launch app **********");
    })

    after(() => {
        cy.log("********  close app **********");
    })

    beforeEach(() => {
        cy.log("********  Login **********");
    })

    afterEach(() => {
        cy.log("********  Logout **********");
    })

    it("Search", () => {


        cy.log("******** Search **********")

    })



    it("Advance search", () => {


        cy.log("******** Advance search **********")

    })



    it("listing products", () => {


        cy.log("********  listing products **********")

    })

})





