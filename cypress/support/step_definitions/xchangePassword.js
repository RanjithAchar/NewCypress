import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";


Before(() => {
    cy.intercept('POST', 'https://members-qa.coyni.com/api/v2/otp/sms-otp/resend').as('Resend');
})
Given("User is on the Login Page", () => {
    cy.visit("https://members-qa.coyni.com/login")
});
When("User enters Email as {string}", (email) => {
    cy.get("#Email").type(email)
});
When("User enters Password as {string}", (password) => {
    cy.get("#Password").type(password)
});
When("User Clicks on the Next Button", () => {
    cy.get("[type=submit]").click({ force: true })
});
When("User enters otp as {string}", (verificationcode) => {
    cy.get('.relative > :nth-child(1)').type(verificationcode)
});
Then('User should be logged in Successfully to the merchant portal', () => {
    cy.get('span[class="MerchantDashboard_heading__nL+73"]').should('have.text', 'Merchant Dashboard')
});

When('User clicks on the change Password button', () => {
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click()
    cy.get(':nth-child(5) > .p-px > .text-sm').click()
})
When('Verify your identity screen is displayed', () => {
    cy.get('.text-cm3.tracking-normal.Heading_heading1__5E762.text-center').should('contain.text', 'Verify Your Identity')
})
Then('verifying the text', () => {
    cy.get('.text-cgy4.tracking-wide.Heading_heading3__EO4gE.mt-16.font-normal.text-center.text-cgy4').should('be.visible')
    cy.get('.text-xs.text-center.text-cgy3.mb-14').should('be.visible')
})

When('User enter invalid verification code as {string}', (vcode) => {
    cy.get('.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)').type(vcode)
})
Then('error message should be displayed as {string}', (error) => {
    cy.get('.mt-1.text-center.font-bold.text-crd5.VerificationInput_code__verification_error__Iocax').should('have.text', error)
})

When('User click on the Get an SMS code link', () => {
    cy.get("button[class='ml-1 font-semibold cursor-pointer hover:underline text-cgy4']").should('be.visible').click()
})
When('Phone verification screen is displayed', () => {
    cy.get('.text-cm3.tracking-normal.Heading_heading4__7XPCN.mt-4.text-center').should("exist")
})
Then('verifying the text in the screen', () => {
    cy.get("span[class='font-bold']").should("include.text", '(656) 765-6745')  //need to change phone number   
})
When('User click on the resend button', () => {
    cy.xpath("//button[contains(@class,'mt-2 text-base font-semibold text-center cursor-pointer text-cm3 hover:underline hover:text-cm4')]").should('be.visible').click()
})
Then('Relevent message should be displayed as {string}', (message) => {
    cy.get('.mt-2.text-base.font-semibold.text-center.text-cgn5').should('have.text', message)
})
Then('Verifying the api response of resend button', () => {
    cy.wait('@Resend', { timeout: 10000 }).then((interception) => {
        const requestBody = interception.request.body;
        const responseBody = interception.response.body;
        expect(requestBody).to.deep.equal(requestBody)
        expect(responseBody).to.exist;
        expect(responseBody.status).to.equal('SUCCESS');
        expect(interception.response.statusCode).to.equal(200);
        expect(responseBody.data.message).to.include('OTP has been sent again successfully.')
        expect(responseBody.data.smsOtp).to.eq('approved')
        expect(responseBody.data.phoneNumber).to.equal('6567656745')   //need to change phone number 
    })
})
When('User enters invalid phone verification code as {string}', (vcode) => {
    cy.get('.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)').type(vcode)
})
Then('Error message should be displayed as {string}', (error) => {
    cy.get('.mt-1.text-center.font-bold.text-crd5.VerificationInput_code__verification_error__Iocax').should('have.text', error)
    cy.get('[fill-rule="evenodd"]').click()
})
When('User enter valid phone verification code as {string}', (vcode) => {
    cy.wait(2000)
    cy.get('.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)').type(vcode)
})
Then('message should be displayed as {string}', (success) => {
    cy.contains('Verification Successful').should('have.text', success)

})
When('User is able to view the toast message', () => {
    cy.contains('OTP verified successfully').should('be.visible')
})
When('User is clicking on the cross button in toast then verifying the toast is closed successfully', () => {
    cy.get('[fill-rule="evenodd"]').click()
})
When('User is able to verify the change password screen', () => {
    cy.xpath("//span[contains(@class,'text-base text-cgy4')]").should('have.text', 'Change Password')
    cy.get('.text-cgy4.Paragraph_para__zyOB6').should('be.visible')
    cy.get('.icon-button.icon-password-hide-new').should('be.visible')
})
When('User enter the {string} data in {string} field', (text, field) => {
    let fieldSelector;
    if (field === 'Current Password') {
        fieldSelector = '#CurrentPassword';
    } else if (field === 'New Password') {
        fieldSelector = '#NewPassword';
    } else if (field === 'Confirm Password') {
        fieldSelector = '[name="passwordConfirmation"]';
    } else {
        throw new Error(`Invalid field: ${field}`);
    }
    cy.get(fieldSelector).type(text, { force: true });
    cy.get(fieldSelector).clear();
    cy.get('[type="submit"]').click({ force: true });
})
Then('Verifying the proper error message as {string}', (error) => {
    cy.contains(error).should('be.visible');
});
Then('Save button should not be enabled', () => {
    cy.get(".w-44.h-9.rounded-full.font-semibold.text-center.transition-all").should('have.attr', 'class');
});
When('User enter a invalid {string} in {string} field', (text, field) => {
    let fieldSelector;
    if (field === 'New Password') {
        fieldSelector = '#NewPassword';
    } else if (field === 'Confirm Password') {
        fieldSelector = '[name="passwordConfirmation"]';
    }
    cy.get(fieldSelector).type(text, { force: true })
})
Then('Verifying the new and Confirm field error message as {string}', (error) => {
    cy.contains(error).should('be.visible');

})
When('Save button should be disabled', () => {
    cy.get(".w-44.h-9.rounded-full.font-semibold.text-center.transition-all").should('have.attr', 'class');
})
When('User enter a less than 8 charactor {string} in {string} text field', (text, field) => {
    let fieldSelector;
    if (field === 'New Password') {
        fieldSelector = '#NewPassword';
    }
    cy.get(fieldSelector).clear()
    cy.get(fieldSelector).type(text)
})
Then('Verifying the Error Message as {string}', (error) => {
    cy.contains(error).should('be.visible');
})
When('User enter {string} same old password in {string} text field', (text, field) => {
    let fieldSelector;
    if (field === 'New Password') {
        fieldSelector = '#NewPassword';
    } else {
        throw new Error(`Invalid field: ${field}`);
    }
    cy.get('#CurrentPassword').type('Admin@12345', { force: true }) //need to change
    cy.get(fieldSelector).clear({ force: true }).type(text)
})
Then('Verifying the Error message as {string}', (error) => {
    cy.contains(error).should('be.visible');

})
When('user clicks on the eye icon', () => {
    cy.get(':nth-child(2) > .login-password-input > .icon-button').click()
})
When('Entered data should be unmasked', () => {
    cy.get(':nth-child(2) > .login-password-input > .icon-button').should('be.visible')
})
Then('again click on the eye icon then data should be masked', () => {
    cy.get(':nth-child(2) > .login-password-input > .icon-button').click().should('be.visible')
})
When('User enter the valid password in text field', () => {
    cy.get('#CurrentPassword').clear({ force: true }).type("Admin@12345")
    cy.get('#NewPassword').clear({ force: true }).type("Admin@1234")
    cy.get('[name="passwordConfirmation"]').clear({ force: true }).type("Admin@1234")

})
When('Save button should be enabled and click on the button', () => {
    cy.get('[type="submit"]').click()
})
Then('Page should navigate to the password changed screen then redirect to the login page', () => {
    cy.get('.text-cgy4.tracking-tight.Heading_heading2__aeV6q.text-cgy8').should('be.visible')
})