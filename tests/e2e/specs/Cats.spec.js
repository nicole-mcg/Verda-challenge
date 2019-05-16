// https://docs.cypress.io/api/introduction/api.html

describe('Cat Page', () => {

    beforeEach(() => {
        cy.visit('/#/cats');      
    });

    it('will show a card with a cat image', () => {
        cy.get('.card')
            .should('have.length', 1)
            .get('img')
            .should('have.length', 1);
    });

    it('has a button to show a new cat image', () => {
        const image = cy.get('img');

        image.should('have.attr', 'src')
            .then((oldSrc) => {
                cy.get('.app-button').eq(1).click();
                cy.get('img').should('have.attr', 'src')
                    .then((newSrc) => {
                        expect(newSrc).not.to.equal(oldSrc);
                    });
            });
    });

    it('has a button to the home page', () => {
        cy.get('.back-button').click();
        cy.url().should('to.equal', 'http://localhost:8080/#/');
    });

});
