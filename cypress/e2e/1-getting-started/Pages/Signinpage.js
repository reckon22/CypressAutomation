class SignIn_page {
    
    enterEmailAddress(){
        cy.get('#email').type('swissnene@yahoo.com')
    }
    enterPassword(){
        cy.get('#passwd').type('Today01')
    }
    clickSigninBtn(){
        cy.get('#SubmitLogin > span').click()
    }

Login (Email, Password){
    cy.get('#email').type(Email)
    cy.get('#passwd').type(Password)
    cy.get('#SubmitLogin > span').click()
}

}

export default SignIn_page;