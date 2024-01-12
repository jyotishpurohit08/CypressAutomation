import 'cypress-file-upload';

describe('File Uploads', () => {

    it('Single file upload', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile('MCA Prod.pem');
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');
    })

    it('File upload - Rename', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#file-upload').attachFile({ filePath: 'MCA Prod.pem', fileName: 'myfile.pdf' });
        cy.get('#file-submit').click();
        cy.wait(5000);
        cy.get("div[class='example'] h3").should('have.text', 'File Uploaded!');


    })

    it('File upload - drag and drop', () => {

        cy.visit("https://the-internet.herokuapp.com/upload");
        cy.get('#drag-drop-upload').attachFile("sample3.csv", { subjectType: 'drag-n-drop' });
        cy.wait(5000);
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
            .contains("sample3.csv");
        cy.get('#file-submit').click();



    })

    it('Multiple files Upload', () => {

        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php");
        cy.get('#filesToUpload').attachFile(["sample3.csv", "sample1.csv"]);
        cy.wait(5000);
        cy.get(':nth-child(6)>strong').should('contain.text', 'Files You Selected:')


    })

    it.only('File upload - Shadow Dom', () => {

        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm");
        cy.get('.smart-browse-input', { includeShadowDom: true }).attachFile("sample1.csv");
        cy.wait(5000);

        cy.get('.smart-item-name', { includeShadowDom: true }).contains('sample1.csv')




    })
})