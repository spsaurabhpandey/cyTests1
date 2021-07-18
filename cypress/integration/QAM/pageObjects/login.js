class Login {
    email() {
        return cy.get('input[type="email"]');
    }
    password() {
        return cy.get('input[type="password"]');
    }

    signInButton() {
        return cy.get('button[type="submit"]');
    }

}
//module.exports={login};
export default Login;