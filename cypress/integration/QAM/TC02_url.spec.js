describe("create and mark and unmark as favourite", () => {
    /*before(()=>{
        Cypress.on('uncaught:exception', (error, runnable)=>{
            return false;
        })
    })*/

    it("sign in", () => {
        cy.visit("https://react-redux.realworld.io/#/login");
        cy.title().should('eq', 'Conduit');
        //cy.location('protocol').should('eq','https:');
        cy.url().should('contain', 'https://');

        cy.get('input[type="email"]').type('spsaurabhpandey@gmail.com');
        cy.get('input[type="password"]').type('Qwerty@123');
        cy.get('button[type="submit"]').click();


        cy.contains('Your Feed', { timeout: 15000 }).should('be.visible');
    })

    it('create a post', () => {
        cy.contains('New Post').click();
        //cy.location('hash').should('include', '#/editor');
        cy.url().should('contain', '#/editor');

        cy.get('input[placeholder="Article Title"]').type('Article-Title');
        cy.get('input[placeholder="What\'s this article about?"]').type('article-about');
        cy.get('textarea[placeholder="Write your article (in markdown)"]').type('test-article-text');
        cy.get('.btn').click();
        cy.url().should('contain', 'article');
    })

    it('mark and unmark as favourite', () => {
        cy.get('.nav-link').contains('spsaurabhpandey').click();
        cy.contains('My Article').should('be.visible');
        cy.get('.ion-heart',{timeout:10000}).first().click();
        cy.get('.nav-link').contains('Favorited Articles').click();
        cy.url().should('contain', 'favorites');

    
        cy.get('.ion-heart',{timeout:10000}).should('be.visible');
        cy.get('.ion-heart').click();
        cy.reload();
        cy.contains('No articles are here... yet.',{timeout:10000}).should('be.visible');
        cy.go('back');


    })
})