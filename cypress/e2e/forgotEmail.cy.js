import forgotEmail from "../support/pageObject/forgotEmail";


const ForgotEmail = new forgotEmail()

describe("User is performing the forgot email process", () => {
    // beforeEach(() => {
    //     cy.fixture('userdata').as('data')
    // })
    it('User is navigating to the Forgot Email screen and verifying the entire page text', () => {
        ForgotEmail.forgotEmailDesc()
    })
    it('User entering invalid phone number and validating the error message', () => {
        const userData1 = require('../fixtures/userdata.json')[7];
        ForgotEmail.enterPhoneNumber(userData1.phoneNumber)
        ForgotEmail.elements.phoneNumberError1()
    })
    it('User entering less than 10 digit phone number and validating the error message', () => {
        const userData1 = require('../fixtures/userdata.json')[8];
        ForgotEmail.enterPhoneNumber(userData1.phoneNumber1)
        ForgotEmail.elements.phoneNumberError2()
    })
    // it('User entering same phone number and validating the error message',()=>{
    //     const userData1 = require('../fixtures/userdata.json')[9];
    //     user.enterPhoneNumber(userData1.phoneNumber2)
    //     user.elements.phoneNumberError2().should('contain','Entered phone numbers are same.')
    // })
    it('User entering 10 digit not registered phone number', () => {
        const userData1 = require('../fixtures/userdata.json')[14];
        ForgotEmail.enterPhoneNumber(userData1.phoneNumber)
        ForgotEmail.elements.phoneNumberError3()
    })
    it('User entering 10 digit valid phone number', () => {
        const userData1 = require('../fixtures/userdata.json')[15]; 
        ForgotEmail.enterPhoneNumber(userData1.phoneNumber)
    })
    it('User entering empty data and verifying the First Name and Last Name error message ', () => {
        const userData1 = require('../fixtures/userdata.json')[16];
        ForgotEmail.firstLastName(userData1.firstname, userData1.lastname);
        ForgotEmail.elements.FNerror1()
        ForgotEmail.elements.LNerror1()
    })
    it('User entering only space and verifying the First Name and Last Name error message ', () => {
        const userData1 = require('../fixtures/userdata.json')[17];
        ForgotEmail.firstLastName1(userData1.firstname, userData1.lastname);
        ForgotEmail.elements.FNerror2()
        ForgotEmail.elements.LNerror2()
    })
    it('User entering only 1 letter and verifying the First Name and Last Name error message ', () => {
        const userData1 = require('../fixtures/userdata.json')[18];
        ForgotEmail.firstLastName2(userData1.firstname, userData1.lastname);
        ForgotEmail.elements.FNerror3()
        ForgotEmail.elements.LNerror3()
    })
    it('User entering the valid first name and last name and verifying the behaviour of the screen', () => {
        const userData1 = require('../fixtures/userdata.json')[19];
        const userData2 = require('../fixtures/userdata.json')[6];
        ForgotEmail.firstLastName2(userData1.firstname, userData1.lastname);
        ForgotEmail.otp(userData2.otp1)
    })
    // it('User can able to navigate to the merchant login page then click on forgot email and entering registered number', () => {
    //     const userData1=require('../fixtures/otp.json')[1]
    //     ForgotEmail.elements.URL()
    //     ForgotEmail.elements.verifyURL()
    //     ForgotEmail.elements.validatePage()
    //     ForgotEmail.forgotEMail(userData1.phonenumber)
    // })
    // it('User is able to enter Invalid first name and last name', () => {
    //     const userData = require('../fixtures/forgotEmail.json');
    //    const userData2 = require('../fixtures/otp.json')[0]; 
    //     userData.forEach(({ firstName, lastName }) => {
    //       ForgotEmail.username(firstName, lastName);
    //       ForgotEmail.elements.validatePage()
    //     });
    //     ForgotEmail.otp(userData2.otp);
    //     ForgotEmail.elements.validatePage()
    //   });
})