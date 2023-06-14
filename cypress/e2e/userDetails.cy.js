import userDetails from "../support/pageObject/userDetails";
import login from "../support/pageObject/login"

const user =new userDetails()
const loginData= new login()

describe('Automating the user details screen',()=>{
    it("User navigating to the login page and passing valid email and valid password ", () => {
        const userData = require('../fixtures/userdata.json')[4];
        const userData1 = require('../fixtures/userdata.json')[6];
        loginData.loginDescription()
        loginData.login(userData.email, userData.password);
        loginData.otp(userData1.otp1)

    })
    it('User navigating to the user details and validating the entire page',()=>{
        user.userDetails()
    })
    it('User navigating to the user details and validating the edit phone number scenario',()=>{
        const userData1 = require('../fixtures/userdata.json')[6];
        user.editPhoneNumber(userData1.otp1)
    })
    it('User entering invalid phone number and validating the error message',()=>{
        const userData1 = require('../fixtures/userdata.json')[7];
        user.enterPhoneNumber(userData1.phoneNumber)
        //user.elements.phoneNumberError1().should('contain','Please enter phone number')
    })
    it('User entering less than 10 digit phone number and validating the error message',()=>{
        const userData1 = require('../fixtures/userdata.json')[8];
        user.enterPhoneNumber(userData1.phoneNumber1)
       // user.elements.phoneNumberError2().should('contain','Phone number must be 10 digits')
    })
    it('User entering same phone number and validating the error message',()=>{
        const userData1 = require('../fixtures/userdata.json')[9];
        user.enterPhoneNumber(userData1.phoneNumber2)
       // user.elements.phoneNumberError2().should('contain','Entered phone numbers are same.')
    })
    it('User entering 10 digit valid phone number',()=>{
        const userData1 = require('../fixtures/userdata.json')[10];
        user.enterPhoneNumber(userData1.phoneNumber3)
    })
    it('Verifying the current phone number and entering the otp',()=>{
        const userData1 = require('../fixtures/userdata.json')[6];
        user.verifyCurrentPhoneNumber(userData1.otp1)
    })
    it('Verifying the New phone number and entering the otp',()=>{
        const userData1 = require('../fixtures/userdata.json')[6];
        user.verifyNewPhoneNumber(userData1.otp1)
    })
    it('Verifying the Re-configure two step authentication screen and entering the otp',()=>{
        const userData1 = require('../fixtures/userdata.json')[6];
        user.twoStep(userData1.otp1)
    })
    it('User navigating to the user details and validating the edit Account Email scenario',()=>{
        const userData1 = require('../fixtures/userdata.json')[6];
        const userData2 = require('../fixtures/userdata.json')[11];
        user.editAccountEmail(userData1.otp1)
        user.enterEmail(userData2.emailAddress)
        user.elements.invalidEmailError().should('have.text','Invalid Email')
        const userData3 = require('../fixtures/userdata.json')[12];
        user.enterEmail(userData3.emailAddress1)
        user.elements.alreadyEmailExist().should('have.text','Entered email already exist in the system.')
        const userData4 = require('../fixtures/userdata.json')[13];
        user.enterEmail(userData4.emailAddress2)
        user.VerifyCode(userData1.otp1)
    })
    })