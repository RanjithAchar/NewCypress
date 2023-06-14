class userDetails {
    elements = {
       // URL: () => cy.visit("https://members-qa.coyni.com/login"),
        reqDrop: () => cy.get('div.flex.group > .cursor-pointer.text-cgy3'),
        userDetailButton: () => cy.get(':nth-child(1) > .p-px > .text-sm'),
        FLname: () => cy.get('.font-bold.uppercase.z-1.text-cwhite'),
        userDetText: () => cy.get('.text-base.text-cgy4'),
        accountStatus: () => cy.get('.flex.flex-wrap.gap-1.ml-2 '),
        accountPhone: () => cy.get(':nth-child(1) > .mb-1.font-semibold.text-cm3').invoke('text'),
        accountEmail: () => cy.get(':nth-child(2) > .mb-1.font-semibold.text-cm3').invoke('text'),
        editImagebutton: () => cy.get('.absolute.flex.items-center'),
        accountProfileImage: () => cy.get('.text-cm3.tracking-normal'),
        crossIcon: () => cy.get('[width="14"]'),
        uploadImagebutton: () => cy.get('.w-60.h-9.rounded-full'),
        backButton: () => cy.get('[width="20"]'),
        cropImage: () => cy.get('.text-cm3.tracking-normal'),
        saveButtonDisable: () => cy.get('.w-60.h-9.rounded-full.font-semibold'),
        selectImage: () => cy.get('input[type="file"]').attachFile('799.jpg'),
        saveButton: () => cy.get('.w-60.h-9.rounded-full.font-semibold'),
        saveToastMsg: () => cy.contains('Your profile image has been successfully updated!.'),
        toastClose:()=> cy.get('[fill-rule="evenodd"]'),
        removeLink: () => cy.get('.mt-2.text-sm.cursor-pointer'),
        removeProfileImage: () => cy.get('.text-cm3.tracking-normal'),
        removeDesc: () => cy.get('.pb-12.text-sm.text-center.text-cgy4'),
        removeButton: () => cy.get('.w-60.h-9.rounded-full.font-semibold'),
        editPhoneButton:()=>cy.get('.text-xs.icon-edit.cursor-pointer.UserDetails_edit_Phone_icon__mqwNd'),
        editPhoneNumberAuthText:()=>cy.get('div.mt-4'),
        editPhoneDesc:()=>cy.get('.mt-8.text-base.text-center.text-cgy4'),
        havinganIssueText:()=>cy.get('.mt-4.text-xs.text-center.text-cgy3'),
        getSMSlink:()=>cy.get('span.font-semibold.cursor-pointer'),
        phoneVerifyText:()=>cy.get('.text-cm3.tracking-normal'),
        phoneDesc:()=>cy.get('span[class=font-bold]'),
        resendButton:()=>cy.get('.mt-2.text-base.font-semibold'),
        vcode:()=>cy.get('div:nth-child(1) input:nth-child(1)'),
        toastMsg:()=>cy.contains('OTP verified successfully'),
        newPhoneDesc:()=>cy.get('.text-base.font-normal.text-center.mt-7.text-cgy4'),
        phoneNumber:()=>cy.get('#Phone_Number'),
        sendCodeButton:()=>cy.get('.w-60.h-9.rounded-full.font-semibold'),
        phoneNumberError1:()=>cy.contains('Please enter phone number'),
        phoneNumberError2:()=>cy.contains('Phone number must be 10 digits'),
        phoneNumberError3:()=>cy.contains('Entered phone numbers are same.'),
        verifyCurrentPhoneNo:()=>cy.get('.font-normal > .text-base'),
        vCode:()=>cy.get('.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)'),
        verifyNewPhoneNo:()=>cy.get('.font-normal > .text-base'),
        twoStepDesc:()=>cy.get('.mx-16'),
        manualEntry:()=>cy.get(':nth-child(3) > .mt-6'),
        phoneSuccess:()=>cy.get('.modal__body > :nth-child(1) > .flex > :nth-child(2)'),
        closeButton:()=>cy.get('.w-60'),
        editEmailButton:()=>cy.get('.text-xs.icon-edit.cursor-pointer.UserDetails_edit_email_icon__I-5tg'),
        editEmail:()=>cy.get('#Email'),
        emailisRequired:()=>cy.get('span.FormField_text_xxs__V1JkZ.FormField_errorGap__Dd3Uk.absolute.left-3.truncate.font-normal.text-crd5'),
        invalidEmailError:()=>cy.get('span.FormField_text_xxs__V1JkZ.FormField_errorGap__Dd3Uk.absolute.left-3.truncate.font-normal.text-crd5'),
        alreadyEmailExist:()=>cy.get('.FormField_text_xxs__V1JkZ.FormField_errorGap__Dd3Uk.absolute.left-3.truncate.font-normal.text-crd5')
        

    }

    userDetails() {

        this.elements.reqDrop().should('be.visible').click()
        this.elements.userDetailButton().should('be.visible').click()
        this.elements.FLname().should('have.text', 'KK')
        this.elements.userDetText().should('contain', 'User Details')
        this.elements.accountStatus().should('contain', 'Active')
        this.elements.accountPhone().then((text) => {
            expect(text).to.equal('Edit Account Phone');
        })
        this.elements.accountEmail().then((text) => {
            expect(text).to.equal('Edit Account Email');
        })
        this.elements.editImagebutton().click()
        this.elements.accountProfileImage().should('have.text', 'Account Profile Image')
        this.elements.crossIcon().should('be.visible')
        this.elements.uploadImagebutton().should('be.enabled').click()
        this.elements.backButton().should('be.visible')
        this.elements.cropImage().should('have.text', 'Crop Your Image')
        this.elements.saveButtonDisable().should('be.disabled')
        this.elements.selectImage()
        this.elements.saveButton().should('be.enabled').click()
        this.elements.saveToastMsg().should('contain', 'successfully')
        this.elements.toastClose().click()
        this.elements.editImagebutton().click()
        this.elements.removeLink().should('be.visible').click()
        this.elements.removeProfileImage().should('have.text', 'Remove Profile Image')
        this.elements.removeDesc().should('contain', 'remove your profile')
        this.elements.removeButton().should('be.enabled').click()
        this.elements.crossIcon().click({ force: true })
    }
    editPhoneNumber(vcode) {
        this.elements.editPhoneButton().should('exist').then(($button) => {
          cy.wrap($button).click({ force: true });
        });
        this.elements.editPhoneNumberAuthText().should('be.visible')
        this.elements.editPhoneDesc().should('contain','phone number')
        this.elements.vcode().should('be.empty')
        this.elements.havinganIssueText().should('contain','Having an issue')
        this.elements.getSMSlink().should('exist').click()
        this.elements.phoneVerifyText().should('exist')
       // this.elements.phoneDesc().should('contain', '(656) 765-6745.')//change phone number
        this.elements.resendButton().should('be.visible').click()
        this.elements.vcode().type(vcode)
        this.elements.toastMsg().should('contain','OTP verified')
        this.elements.toastClose().click()
        this.elements.sendCodeButton().should('be.disabled')
        this.elements.newPhoneDesc().should('contain','current phone number')
    }
    enterPhoneNumber(phoneNumber){
        
        this.elements.phoneNumber().clear({force:true})
        this.elements.phoneNumber().type(phoneNumber,{force:true})
        this.elements.sendCodeButton().click({force:true})
    }
    verifyCurrentPhoneNumber(vCode){
       // this.elements.verifyCurrentPhoneNo().should('contain','(656) 765-6715') //change phone number
        this.elements.vCode().type(vCode)
        cy.wait(2000)
      }
      verifyNewPhoneNumber(vCode){
       // this.elements.verifyNewPhoneNo().should('contain','(656) 765-6775') //Add New Phone Number
        this.elements.vCode().type(vCode)
        cy.wait(2000)
      }
      twoStep(vCode){
        this.elements.twoStepDesc().should('contain','Two-Step')
        this.elements.manualEntry().click()
        this.elements.vCode().type(vCode)
        cy.wait(2000)
        this.elements.phoneSuccess().should('contain','Successfully')
        this.elements.closeButton().click()
        
      }
      editAccountEmail(vCode){
        this.elements.editEmailButton().should('exist').then(($button) => {
          cy.wrap($button).click({ force: true });
        });
        cy.wait(2000)
        this.elements.getSMSlink().click()
        cy.wait(3000)
        this.elements.vCode().type(vCode)
      }
      errorCheck(){
        cy.wait(3000)
        this.elements.sendCodeButton().click({force:true})
        this.elements.emailisRequired().should('have.text','Email is required')
      }
enterEmail(editEmail){
        this.elements.editEmail().clear({force:true})
        this.elements.editEmail().type(editEmail)
        this.elements.sendCodeButton().click({force:true})
}
VerifyCode(vCode){
        this.elements.vCode().type(vCode)
        cy.wait(2000)
        this.elements.vcode().type(vCode)
      }
      
    }

export default userDetails