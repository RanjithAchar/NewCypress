class forgotPassword {
    elements = {
        URL: () => cy.visit("https://members-qa.coyni.com/login"),
        coyniLogo: () => cy.get('._coyni_Logo'),
        forgotPswd: () => cy.get(':nth-child(2) > .items-end > a > .flex'),
        email: () => cy.get('#Email-id'),
        emailerror1: () => cy.get('.FormField_text_xxs__V1JkZ.FormField_errorGap__Dd3Uk.font-normal.absolute.left-3.truncate.flex'),
        emailerror2: () => cy.get('.FormField_errorGap__Dd3Uk').should('have.text', 'Invalid Email'),
        emailerror3: () => cy.get('.text-crd5').should('contain', 'This email is not registered to an account in the coyni system.'),
        next: () => cy.get('[data-testid]'),
        vcode: () => cy.get('.relative > :nth-child(1)'),
        enterPswd: () => cy.get('#Enter_Password'),
        confPswd: () => cy.get('#confirm_Password'),
        newpasswordError1: () => cy.xpath('//span[normalize-space()="Please enter your password"]').should('have.text', 'Please enter your password'),
        confirmpasswordError1: () => cy.xpath('//span[normalize-space()="Please confirm your password"]').should('have.text', 'Please confirm your password'),
        newpasswordError2: () => cy.xpath('//span[normalize-space()="Password must be at least 8 characters"]').should('have.text', 'Password must be at least 8 characters'),
        confirmpasswordError2: () => cy.xpath('//span[normalize-space()="Passwords do not match"]').should('have.text', 'Passwords do not match'),
        newpasswordError3: () => cy.xpath('//span[normalize-space()="Password must have at least one number"]').should('have.text', 'Password must have at least one number'),
        newpasswordError4: () => cy.xpath('//span[normalize-space()="Password must have at least one lower case letter"]').should('have.text', 'Password must have at least one lower case letter'),
        newpasswordError5: () => cy.xpath('//span[normalize-space()="Password must have at least one upper case letter"]').should('have.text', 'Password must have at least one upper case letter'),
        submitButton: () => cy.get('[type="submit"]'),
        passwordChangedText: () => cy.get('.title'),
        login: () => cy.contains('Log In'),
    }

    forgot_password() {
        this.elements.URL().url().should('include', 'members-qa.coyni.com/login')
        this.elements.coyniLogo()
        this.elements.forgotPswd().click()
        this.elements.next().click({ force: true })
        this.elements.emailerror1().should('have.text', 'Please enter your email')
    }
    enterEmail(email) {
        this.elements.email().clear()
        this.elements.email().type(email)
        this.elements.next().click({ force: true })

    }
    otp(vcode) {
        this.elements.vcode().type(vcode)
        this.elements.enterPswd().click()
        this.elements.confPswd().click()
        this.elements.submitButton().click({ force: true })
    }
    Password(enterPswd, confPswd) {
        this.elements.enterPswd().clear()
        this.elements.enterPswd().type(enterPswd)
        this.elements.confPswd().clear()
        this.elements.confPswd().type(confPswd)
        this.elements.submitButton().click({ force: true })
    }
    passwordChanged() {
        cy.wait(3000)
        this.elements.passwordChangedText().should('have.text', 'Password Changed')
        this.elements.login().click()
    }
}

export default forgotPassword