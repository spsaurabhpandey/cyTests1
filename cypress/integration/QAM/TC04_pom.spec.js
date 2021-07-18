/*///<reference types = "Cypress"/>*/
//import login from './pageObjects/login'

const LOGINPAGE = require('./pageObjects/login')

describe("Test Suite 01",()=>{

const LOGIN = new LOGINPAGE();

    it("login",()=>{
        cy.visit("https://react-redux.realworld.io/#/login");
        LOGIN.email().type('spsaurabhpandey@gmail.com');
        LOGIN.password().type('Qwerty@123');
        LOGIN.signInButton().click();
    })
})