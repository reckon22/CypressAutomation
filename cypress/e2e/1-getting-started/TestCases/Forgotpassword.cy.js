import Account_page from "../Pages/accountpage.js";
import Forgotpassword_page from "../Pages/Forgotpasswordpage.js"
import Home_page from "../Pages/homepage.js"

 describe('forgot password test', ()=> {

    beforeEach(function(){
        cy.visit('http://automationpractice.com/index.php?', {setTimeout:8000})
    })

    const Forgotpasswordpage = new Forgotpassword_page;
    const accountpage = new Account_page
    const homepage = new Home_page;

    it('check user can reset password successfully', ()=> {
         //cy.get('.login').click()
         homepage.clickSignIn()
         //cy.get('.lost_password > a').click()
         accountpage.ClickForgotpassword()
         //cy.get('#email').type('swissnene@yahoo.com')
           //Forgotpasswordpage.EnterEmailAddress()
         //cy.get('.submit > .btn > span').click()
           //Forgotpasswordpage.ClickSignInButton()
        Forgotpasswordpage.Login('swissnene@yahoo.com')
         //cy.get('.alert').contains('A confirmation email has been sent to your address: swissnene@yahoo.com')
        Forgotpasswordpage.DisplaySuccessfulMessage()
         

     })

     it('check error message is diaplayed if user reset password with wrong email address', ()=> {
         //cy.get('.login').click()
         homepage.clickSignIn()
         //cy.get('.lost_password > a').click()
         accountpage.ClickForgotpassword()
         //cy.get('#email').type('swiss@yahoo.com')
         //cy.get('.submit > .btn > span').click()
         Forgotpasswordpage.Login('swiss@yahoo.com')
         Forgotpasswordpage.DisplayUnsuccessfulMessage()
         //cy.get('ol > li').contains('There is no account registered for this email address')
     })
    
     afterEach(function(){
         cy.screenshot({captureEvents:'fullpage'})
         cy.clearCookies();
     })

 })