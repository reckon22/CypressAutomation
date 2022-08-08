// //mocha
 var Faker = require('Faker');
 describe('register test', () => {

     beforeEach(function(){
         cy.visit('http://automationpractice.com/index.php?', {setTimeout:7000})
     })

     it('check user can register successfully', () => {
         cy.get('.login').click()
         cy.get('#email_create').type(Faker.Internet.email())
         cy.get('#SubmitCreate > span').click()
         cy.get('#id_gender2').click()
         cy.get('#customer_firstname').type('nene')
         cy.get('#customer_lastname').type('edovia')
         cy.get('#passwd').type('swiss')
         cy.get('#days').select('1')
         cy.get('#months').select('February')
         cy.get('#years').select('2000')
         cy.get('#company').type('rhema')
         cy.get('#address1').type('173, miller avenue brooklyn')
         cy.get('#address2').type('no4, block6')
         cy.get('#city').type('Brooklyn')
         cy.get('#id_state').select('New York')
         cy.get('#postcode').type('11207')
         cy.get('#id_country').select('United States')
         cy.get('#phone').type('+13474223512')
         cy.get('#submitAccount > span').click()
     })


     it('show error message when user create account with a registered email', () => {
         cy.get('.login').click()
         cy.get('#email_create').type('swissnene@yahoo.com')
         cy.get('#SubmitCreate > span').click()
         cy.get('ol > li').contains('An account using this email address has already been registered. Please enter a valid password or request a new one.')
     })

     afterEach(function(){
         cy.screenshot({captureEvents:'fullpage'})
         cy.clearCookies();
     })

 })