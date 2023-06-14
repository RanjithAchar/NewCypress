class forgotEmail {
    elements = {
        URL: () => cy.visit("https://members-qa.coyni.com/login"),
        coyniLogo: () => cy.get('._coyni_Logo'),
        forgotEmailLink: () => cy.get('.mb-8 > .items-end > a > .flex'),
        forgotEmailtext: () => cy.get('.forgot-email__title'),
        forgotEmailDesc: () => cy.get('.forgot-email__sub-title'),
        phoneNumber: () => cy.get('#Phone_Number'),
        phoneNumberError1: () => cy.get('.FormField_text_xxs__V1JkZ.FormField_errorGap__Dd3Uk.font-normal.absolute.left-3.truncate.text-crd5').should('contain', 'Please enter Phone Number'),
        phoneNumberError2: () => cy.get('.FormField_text_xxs__V1JkZ.FormField_errorGap__Dd3Uk.font-normal.absolute.left-3.truncate.text-crd5').should('contain', 'Phone number must be 10 digits'),
        phoneNumberError3: () => cy.get('.FormField_errorGap__Dd3Uk').should('contain', 'This phone number is not registered to an account in the coyni system.'),
        nextButton: () => cy.get('[style="font-size: 18px;"]'),
        firstName: () => cy.get("#First-Name"),
        lastName: () => cy.get("#Last-Name"),
        FNerror1:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)').should('contain', "Please enter your First Name"),
        LNerror1:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)').should('contain', "Please enter your Last Name"),
        FNerror2:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)').should('contain', 'First Name cannot contain only blankspaces'),
        LNerror2:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)').should('contain', 'Last Name cannot contain only blankspaces'),
        FNerror3:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(2) > div:nth-child(1) > div:nth-child(1) > span:nth-child(3)').should('contain','First Name must be at least 2 characters'),
        LNerror3:()=>cy.get('body > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(3) > form:nth-child(2) > div:nth-child(1) > div:nth-child(2) > span:nth-child(3)').should('contain','Last Name must be at least 2 characters'),
        nextButton1: () => cy.get('[style="font-size: 18px;"]'),
        vcode:()=>cy.get('.relative > :nth-child(1)'),
        chooseAccount: () => cy.get('.rounded-lg'),
        // vcode1: () => {
        //     for (let j = 1; j <= 6; j++) {
        //         cy.enterText(`.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(${j})`, j, "Two-step authentication")
        //     }
        // }

    }
    forgotEmailDesc() {
        this.elements.URL().url().should('include', 'members-qa.coyni.com/login')
        this.elements.forgotEmailLink().click()
        this.elements.coyniLogo()
        this.elements.forgotEmailtext()
        this.elements.forgotEmailDesc()
    }
    enterPhoneNumber(phoneNumber) {

        this.elements.phoneNumber().clear({ force: true })
        this.elements.phoneNumber().type(phoneNumber, { force: true })
        this.elements.nextButton().click({ force: true })
    }
    firstLastName(firstName, lastName) {
        this.elements.firstName().type(firstName).clear()
        this.elements.lastName().type(lastName).clear()
        this.elements.nextButton1().click({force:true})
    }
    firstLastName1(firstName, lastName) {
        this.elements.firstName().type(firstName)
        this.elements.lastName().type(lastName)
       // this.elements.nextButton1().click({force:true})
    }
    firstLastName2(firstName, lastName) {
        this.elements.firstName().clear()
        this.elements.firstName().type(firstName)
        this.elements.lastName().clear()
        this.elements.lastName().type(lastName)
        this.elements.nextButton1().click({force:true})
       // this.elements.nextButton1().click({force:true})
    }
    otp(vcode){
        this.elements.vcode().type(vcode)
        this.elements.chooseAccount().click()
    }
    // forgotEMail(phoneNumber) {

    //     this.elements.forgotEmail()
    //     cy.wait(2000)
    //     this.elements.phoneNumber(phoneNumber)
    //     this.elements.nextButton()
    // }
    // username(firstName, lastName) {
    //     cy.wait(2000)
    //     this.elements.firstName(firstName)
    //     this.elements.lastName(lastName)
    //     this.elements.nextButton1()
    // }
    // otp() {
    //     this.elements.vcode1()
    //     cy.wait(2000)
    //     this.elements.chooseAccount()
    //     //this.elements.validatePage()


    // }
}
export default forgotEmail