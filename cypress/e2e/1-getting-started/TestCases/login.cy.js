import Home_page from "../Pages/homepage.js"
import SignIn_page from "../Pages/Signinpage.js"
import Account_page from "../Pages/accountpage.js"

describe('login test', () => {
    
    const homepage = new Home_page;
    const signinpage = new SignIn_page;
    const accountpage = new Account_page;

    it('check user can login successfully', () => {
        cy.viewport('iphone-x')
        cy.visit('http://automationpractice.com/index.php?', {setTimeout:7000})
        //cy.get('.login').click()
        homepage.clickSignIn()
        signinpage.Login('swissnene@yahoo.com', 'Today01')
        // signinpage.enterEmailAddress()
        // signinpage.enterPassword()
        // signinpage.clickSigninBtn()
        accountpage.verifyMyAccount()
        accountpage.clickSignOutBtn()

        // cy.get('#email').type('swissnene@yahoo.com')
        // cy.get('#passwd').type('Today01')
        // cy.get('#SubmitLogin > span').click()
        // cy.get('.account > span').contains('Sw Ne')
        // cy.get('.logout').click()     
    })

    it('check error message is diaplayed when user logs in with incorrect details', ()=> {
        cy.viewport('ipad-mini')
        cy.visit('http://automationpractice.com/index.php?', {setTimeout:7000})
        // cy.get('.login').click()
        homepage.clickSignIn()
        signinpage.Login('swiss@yahoo.com', 'Today')
        // cy.get('#email').type('swissnne@yahoo.com')
        // cy.get('#passwd').type('Today01')
        // cy.get('#SubmitLogin > span').click() 
        cy.get('#center_column > :nth-child(2) > p').contains('There is 1 error')
    })
})