

describe("Http Request",()=>{

    it("GET call",()=>{
        cy.request('GET','https://jsonplaceholder.typicode.com/posts/1')
        .its('status')
        .should('equal',200);
    })

    it("Post Call", ()=>{

        cy.request(  {
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts/',
            body: {
                title:"Test Post",
                body:"This is Post Call",
                userId:1
            }
        })
        .its('status')
        .should('equal',201);
    })

    it("Put Call", ()=>{

        cy.request(  {
            method: 'Put',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                title:"Test Post-Updated",
                body:"This is Put Call",
                userId:1,
                id:1
            }
        })
        .its('status')
        .should('equal',200);
    })

    it("Delete Call", ()=>{

        cy.request(  {
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
        })
        .its('status')
        .should('equal',200);
    })
})