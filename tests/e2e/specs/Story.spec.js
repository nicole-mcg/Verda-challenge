// https://docs.cypress.io/api/introduction/api.html

describe('Story Info Page', () => {
    const testStoryId = 19928429;

    beforeEach(() => {
        cy.visit(`/#/story/${testStoryId}`);
    });

    it('will show a card with a title', () => {
        cy.get('.card').should('have.length', 1)
        cy.get('.card .card-title').contains("Info on Story")
    });

    it('will show field names with values', () => {
        cy.get('.story-page-card-fields').contains("Field Names");
        cy.get('.story-page-card-values').contains("Values");


        cy.get('.story-page-card-values').contains("Values");
        containsFieldWithValue("by", "headalgorithm");
        containsFieldWithValue("id", "19928429");
        containsFieldWithValue("time", "1558010798");
        containsFieldWithValue("title", "Maryland research could improve the AI task of sensorimotor representation");
        containsFieldWithValue("type", "story");
        containsFieldWithValue("url", "https://eng.umd.edu/release/helping-robots-remember-hyperdimensional-computing-theory-could-change-the-way-ai-works");
    });


    it('has a button to the home page', () => {
        cy.get('.back-button').click();
        cy.url().should('to.equal', 'http://localhost:8080/#/');
    });

});

function containsFieldWithValue(field, value) {
    cy.get('.story-page-card-fields').contains(String(field));
    cy.get('.story-page-card-values').contains(String(value));
}
