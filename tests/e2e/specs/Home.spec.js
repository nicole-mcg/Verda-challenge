// https://docs.cypress.io/api/introduction/api.html

describe('Home Page', () => {

    beforeEach(() => {
        cy.visit('/');      
    });

    it('will show 25 stories + the raw JSON', () => {
        cy.get('.card').should('have.length', 26)
    });

    it('shows the title', () => {
        cy.contains("Top 25 Stories from Hacker News");
    });

    it('shows a link to hackernews', () => {
        cy.get('.home-title')
            .find('a')
            .contains('Hacker News')
            .should('have.attr', 'href')
            .then((href) => {
                expect(href).contains('https://news.ycombinator.com/');
            })
    });

    it('shows a link to the cat page', () => {
        cy.get('.home-title-note')
            .get('a')
            .contains('check out some cats')
            .should('have.attr', 'href')
            .then((href) => {
                expect(href).contains('#/cats');
                cy.visit(href).then(() => {
                    cy.url().should('to.equal', 'http://localhost:8080/#/cats');
                });
            });
    });

    it('shows the raw json', () => {
        cy.contains("Raw JSON");
        cy.get('.home-json').should(($div) => {
            const text = $div.text()
            expect(JSON.parse(text)).to.have.length(25);
        });
    });

});
