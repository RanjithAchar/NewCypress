
import login from "../support/pageObject/login"
// import "cypress/support/commands.js"

const loginMerchant =new login()

describe('Automating the Login process', ()=>{
    beforeEach('API',()=>{
        cy.intercept('POST', 'https://members-qa.coyni.com/api/v2/user/signin').as('signinData'); 
        cy.intercept('POST', 'https://members-qa.coyni.com/api/v2/user/step-up').as('stepup');
    })
    it('1.User can able to navigate to the merchant login page and verifying the url and also the entire description in screen', () => {
        loginMerchant.loginDescription()
        // cy.coyniLogin()
    })
    it('User navigating to the login page and passing invalid email and invalid password', () => {
        const userData = require('../fixtures/userdata.json')[0];
        loginMerchant.login(userData.email, userData.password);
        loginMerchant.elements.invalidEmailerror()
        loginMerchant.elements.eyeIcon()
        
    })
    it("User navigating to the login page and passing blank email and password", () => {
        const userData = require('../fixtures/userdata.json')[1];
        loginMerchant.login(userData.email, userData.password);
        loginMerchant.elements.pleaseEnterEmail()
        loginMerchant.elements.pleaseEnterPassword()
    })
    
    it("User navigating to the login page and passing valid email and invalid password ", () => {
        const userData = require('../fixtures/userdata.json')[2];
        loginMerchant.login(userData.email, userData.password);
        loginMerchant.elements.passwordWrong()
    })
    it("User navigating to the login page and passing not registered email and password", () => {
        const userData = require('../fixtures/userdata.json')[3];
        loginMerchant.login(userData.email, userData.password);
        loginMerchant.elements.toastMessage()
        loginMerchant.elements.toastClose()
    })
    it("User navigating to the login page and passing valid email and valid password ", () => {
        const userData = require('../fixtures/userdata.json')[4];
        loginMerchant.login(userData.email, userData.password);
    })
    it('Verifying the sign in API ',()=>{
        cy.wait('@signinData').then((interception) => {
            const requestBody = interception.request.body;
            const responseBody = interception.response.body;
            cy.wrap(requestBody).should('exist');
            cy.wrap(responseBody.data.accountStatus).should('eq', 'Active');
            cy.wrap(responseBody.data.accountType).should('eq', 2);
            cy.wrap(responseBody.data.email).should('contain', 'qa105@yopmail.com')
            cy.wrap(responseBody.data.firstName).should('contain', 'Kalyan')
            cy.wrap(responseBody.data.lastName).should('contain', 'Kumar')
            cy.wrap(responseBody.data.userId).should('eq', 2264);
            cy.wrap(interception.response.statusCode).should('eq', 200);
            cy.wrap(responseBody.status).should('eq', 'SUCCESS');
          });
        }) 
    it("User navigated to the 2 step authentication screen and validating the entire description", ()=>{
        loginMerchant.twoStepDescription()
    })
    it('User should click on get SMS button and navigate to phone verification screen and validating the entire description',()=>{
        loginMerchant.phoneVerification()
    })
    it('User is validating with invalid and valid OTP',()=>{
        const userData = require('../fixtures/userdata.json')[5]
        const userData1 = require('../fixtures/userdata.json')[6]
        loginMerchant.otp(userData.otp);
        loginMerchant.elements.verificationFailed()
        loginMerchant.otp(userData1.otp1)
        
    })
    it('Verifying the Step Up API',()=>{
        cy.wait('@stepup').then((interception)=>{
        const requestBody = interception.request.body;
        const responseBody = interception.response.body;
        cy.wrap(requestBody).should('exist');
        cy.wrap(interception.response.statusCode).should('eq', 200);
        cy.wrap(responseBody.status).should('eq', 'SUCCESS');
        })
    })
})

