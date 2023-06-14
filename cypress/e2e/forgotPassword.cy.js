import forgotPassword from "../support/pageObject/forgotPassword";


const ForgotPassword = new forgotPassword()

describe("User is performing the forgot Password process", () => {
    it('User is navigating to the Forgot Password screen and verifying the entire page text', () => {
        ForgotPassword.forgot_password()
    })
    it('User entering invalid email Address and validating the error message', () => {
        const userData1 = require('../fixtures/userdata.json')[11];
        ForgotPassword.enterEmail(userData1.emailAddress)
        ForgotPassword.elements.emailerror2()
    })
    it('User entering email which is not registered to coyni account and validating the error message', () => {
        const userData1 = require('../fixtures/userdata.json')[20];
        ForgotPassword.enterEmail(userData1.emailAddress)
        ForgotPassword.elements.emailerror3()

    })
    it('User entering valid email and validating behaviour of the page', () => {
        const userData1 = require('../fixtures/userdata.json')[12];
        ForgotPassword.enterEmail(userData1.emailAddress1)
    })
    it('User entering valid verification code and validating behaviour of the page', () => {
        const userData1 = require('../fixtures/userdata.json')[6];
        ForgotPassword.otp(userData1.otp1)
        ForgotPassword.elements.newpasswordError1()
        ForgotPassword.elements.confirmpasswordError1()
    })
    it('User entering new password does not match with confirm password and validating the error message', () => {
        const userData1 = require('../fixtures/userdata.json')[21];
        ForgotPassword.Password(userData1.newPassword, userData1.confirmPassword)
        ForgotPassword.elements.newpasswordError2()
        ForgotPassword.elements.confirmpasswordError2()
    })
    it('User entering only special charactor in New password text field and validating error message', () => {
        const userData1 = require('../fixtures/userdata.json')[22];
        ForgotPassword.Password(userData1.newPassword, userData1.confirmPassword)
        ForgotPassword.elements.newpasswordError3()
    })
    it('User entering special charactor with number and entering at least 1 upper case letter in New password text field and validating error message', () => {
        const userData1 = require('../fixtures/userdata.json')[23];
        ForgotPassword.Password(userData1.newPassword, userData1.confirmPassword)
        ForgotPassword.elements.newpasswordError4()
    })
    it('User entering special charactor with number and entering at least 1 lower case letter in New password text field and validating error message', () => {
        const userData1 = require('../fixtures/userdata.json')[24];
        ForgotPassword.Password(userData1.newPassword, userData1.confirmPassword)
        ForgotPassword.elements.newpasswordError5()
    })
    it('User entering valid new password and confirm password and validating behaviour of the page', () => {
        const userData1 = require('../fixtures/userdata.json')[25];
        ForgotPassword.Password(userData1.newPassword, userData1.confirmPassword)
        ForgotPassword.passwordChanged()
    })
})