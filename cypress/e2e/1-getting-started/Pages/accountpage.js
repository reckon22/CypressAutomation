class Account_page {
    
    verifyMyAccount(){
        cy.get('.account > span').contains('Sw Ne')
    }

    ClickForgotpassword(){
        cy.get('.lost_password > a').click()
    }
    
    clickSignOutBtn(){
        cy.get('.logout').click() 
    }

}

export default Account_page;