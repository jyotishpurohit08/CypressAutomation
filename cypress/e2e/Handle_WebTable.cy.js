describe('Handle Tables', () => {

    // This is hook and this is run every it block
    beforeEach('Login', () => {
        cy.visit("https://demo.opencart.com/admin/index.php");
        cy.get("#input-username").type("demo");
        cy.get("#input-password").type("demo");
        cy.get("button[type='submit']").click();
        cy.get(".btn-close").click();

        //customers-->custmers (sub menu)
        cy.get("#menu-customer>a").click(); // custmers- main menu
        cy.get("#menu-customer>ul>li:first-child").click();  // customers - sub menu

    })

    it.skip('Check Number Rows & Column', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr").should('have.length', '10');
        cy.get("table[class='table table-bordered table-hover']>thead>tr>td").should('have.length', '7');

    })

    it.skip('Check Cell data from specific  Rows & Column', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr:nth-child(5)>td:nth-child(3)")
            .contains("hfgjhgjgjggj@gmail.com"); //assertion

    })

    it.skip('Read all the Rows & Column data in the first page', () => {

        cy.get("table[class='table table-bordered table-hover']>tbody>tr")
            .each(($row, index, $rows) => {   //capture every row 
                cy.wrap($row).within(() => {
                    cy.get("td").each(($col, index, $cols) => {  //capture every Column
                        cy.log($col.text());

                    })

                })
            })

    })

    it.only('pagination', () => {


        //fin  ttal number f ages
        /* let totalPages;
         cy.get(".col-sm-6.text-end").then((e) => {
             let mytext = e.text();
             totalPages = mytext.substring(mytext.indexOf("(") + 1, mytext.indexOf("ages") - 1);
             cy.log("Total number of pages in a table=============>" + totalPages);
         })*/

        // 2 method

        let totalPages = 10;
        for (let p = 1; p <= totalPages; p++) {
            if (totalPages > 1) {
                cy.log("Active page is====" + p);
                cy.get("ul[class='pagination']>li:nth-child(" + p + ")").click();
                cy.wait(3000);

                // print data in email colunm

                cy.get("table[class='table table-bordered table-hover']>tbody>tr")
                    .each(($row, index, $rows) => {
                        cy.wrap($row).within(() => {
                            cy.get('td:nth-child(3)').then((e) => {
                                cy.log(e.text());

                            })


                        })
                    })

            }
        }
    })


})
