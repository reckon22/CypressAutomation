class Forgotpassword_page {
    
    EnterEmailAddress(){
        cy.get('#email').type('swissnene@yahoo.com')
    }
    ClickSignInButton(){
        cy.get('.submit > .btn > span').click()
    }
    DisplaySuccessfulMessage(){
        cy.get('.alert').contains('A confirmation email has been sent to your address: swissnene@yahoo.com')
    }
    DisplayUnsuccessfulMessage(){
        cy.get('ol > li').contains('There is no account registered for this email address')
    }

Login(Email){
    cy.get('#email').type(Email)
    cy.get('.submit > .btn > span').click()
    }

    
}

export default Forgotpassword_page;

    



