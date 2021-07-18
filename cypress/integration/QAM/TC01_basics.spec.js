/*///<reference types = "Cypress"/>*/
describe("Test Suite 01",()=>{

    it("login",()=>{
        cy.visit("https://react-redux.realworld.io/#/login");
        cy.get('input[type="email"]').type('spsaurabhpandey@gmail.com');
        cy.get('input[type="password"]').type('Qwerty@123');
        cy.get('button[type="submit"]').click();
    })
})