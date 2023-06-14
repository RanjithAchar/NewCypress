class login {
    elements = {
        URL: () => cy.visit("https://members-qa.coyni.com/login"),
        coyniLogo:()=> cy.get('._coyni_Logo'),
        logIntocoyni:()=>cy.get('.business-login__title'),
        description:()=>cy.get('.business-login__sub_title'),
        email: () => cy.get("#Email"),
        password: () => cy.get("#Password"),
        nextButton:()=> cy.get('[type=submit]'),
        invalidEmailerror:()=>cy.contains('Invalid Email').should('be.visible'),
        pleaseEnterEmail:()=> cy.contains('Please enter your email').should('be.visible'),
        pleaseEnterPassword:()=>cy.contains('Please enter your password').should('be.visible'),
        passwordWrong:()=> cy.contains('Password is wrong, Try again.').should('be.visible'),
        toastMessage:()=>cy.get('.message').should('be.visible'),
        toastClose:()=> cy.get('[fill-rule="evenodd"]').click(),
        eyeIcon:()=> cy.get('.icon-button').click().should('be.visible'),

        coynilogo:()=> cy.get('[rel="noreferrer"]'),
        twostepauth:()=>cy.get('.font-bold.tracking-wide'),
        twostepDesc:()=> cy.get('.flex.cursor-default'),
        otpBox:()=>cy.get('.relative > :nth-child(1)'),
        getanSMS:()=>cy.get('.mt-1'),
        goBack:()=>cy.contains('Go Back'),
        phoneVerifyText:()=>cy.get('.font-bold.tracking-wide.cursor-default.text-cgy4.SmsValidationTwillo_title__Sm5dK'),
        phoneDesc:()=>cy.get('.ml-2.text-base.font-bold.text-cgy4'),
        resendButton:()=>cy.get('.text-center > .text-cm3'),
        vcode:()=>cy.get('.relative > :nth-child(1)'),
        verificationFailed:()=> cy.contains('Verification Failed').should('have.text', 'Verification Failed')
    }
    loginDescription(){
        this.elements.URL().url().should('include', 'members-qa.coyni.com/login')
        this.elements.coyniLogo().should('be.visible')
        this.elements.logIntocoyni().should('be.visible')
        this.elements.description().should('be.visible')
        
    }
    login(email,password){
        this.elements.email().clear()
        this.elements.email().type(email)
        this.elements.password().clear()
        this.elements.password().type(password)
        this.elements.nextButton().click({force:true})   
    }
    twoStepDescription(){
        this.elements.coynilogo().should('be.visible')
        this.elements.twostepauth().should('have.text', 'Two-Step Authentication')
        this.elements.twostepDesc().should('be.be.visible')
        this.elements.otpBox().should('be.empty')
        this.elements.goBack().should('be.enabled')
        this.elements.getanSMS().should('have.text', 'Having an issue with your authentication app? Get an SMS code.').click()   
    }
    phoneVerification(){
        this.elements.coynilogo().should('be.visible')
        this.elements.phoneVerifyText().should('have.text', 'Phone Verification')
       // this.elements.phoneDesc().should('contain', '(656) 765-6715.') //need to change
        this.elements.resendButton().should('be.enabled').click()
        this.elements.goBack().click()   
    }
    otp(vcode){
        this.elements.vcode().type(vcode)
    }
}

export default login