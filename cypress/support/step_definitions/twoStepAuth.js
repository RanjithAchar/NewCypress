import { Given, When, Then, Before } from "@badeball/cypress-cucumber-preprocessor";


Before(() => {
    cy.intercept('POST', 'https://members-qa.coyni.com/api/v2/otp/sms/otp/validate').as('validatePhone');
    cy.intercept('POST', 'https://members-qa.coyni.com/api/v2/otp/QRCode?email=qa105%40yopmail.com').as('QRcode')
    cy.intercept('POST', 'https://members-qa.coyni.com/api/v2/otp/otp/validate').as('validateOTP')
})
Given("User is on the Login screen", () => {
    cy.visit("https://members-qa.coyni.com/login")
});
When("User enters merchant Email as {string}", (email) => {
    cy.get("#Email").type(email)
});
When("User enters merchant Password as {string}", (password) => {
    cy.get("#Password").type(password)
});
When("User Clicks on the Next button", () => {
    cy.get("[type=submit]").click({ force: true })
});
When("User enters verification code as {string}", (verificationcode) => {
    cy.get('.relative > :nth-child(1)').type(verificationcode)
});

Given('User is on the merchant dashbord', () => {
    cy.get('span[class="MerchantDashboard_heading__nL+73"]').should('have.text', 'Merchant Dashboard')
})
When('User clicks on the two step button', () => {
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click()
    cy.get(':nth-child(6) > .p-px > .text-sm').click()
})
When('reconfigure screen is displayed', () => {
    cy.get('.mt-20.text-xl.font-bold').should('be.visible')
})
Then('User clicks on the Reconfigure button', () => {
    cy.get('.w-60.h-9.rounded-full').should('be.enabled').click()
})
When('user is on the phone verification screen', () => {
    cy.get('.text-cm3.tracking-normal').should('be.visible')
    cy.get('.text-base.text-center').should('be.visible')
    cy.get('.text-base.text-center.font-semibold').click()
})
When('user enters valid verification code as {string}', (code) => {
    cy.get('.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)').type(code)
    cy.wait('@validatePhone', { timeout: 10000 }).then((interception) => {
        const requestBody = interception.request.body;
        const responseBody = interception.response.body;
        expect(requestBody).to.deep.equal(requestBody)
        expect(responseBody).to.exist;
        expect(responseBody.status).to.equal('SUCCESS');
        expect(interception.response.statusCode).to.equal(200);
        expect(responseBody.data.success).to.include('SMS Otp Validation is success')
        expect(responseBody.data.requestToken).to.exist

    })
})
Then('Reconfigure two step screen is displayed', () => {
    cy.get('.tracking-normal.text-center.mt-11').should('be.visible')
    cy.get('[class="font-bold cursor-pointer text-cm3"]').should('be.visible').click()
    cy.get('.tracking-normal.text-center.mb-12').should('be.visible')
    cy.get('[width="14"]').click()
})
When('User enters verification code then verifying the response', () => {
    cy.wait('@QRcode', { timeout: 5000 }).then((interception) => {
        const requestBody = interception.request.body;
        const responseBody = interception.response.body;
        expect(requestBody).to.deep.equal(requestBody)
        expect(responseBody).to.exist;
        expect(responseBody.status).to.equal('SUCCESS');
        expect(interception.response.statusCode).to.equal(200);
        expect(responseBody.data.qrCode).to.exist;
    })
})
When('User is on the reconfigure screen', () => {
    cy.get('[class="mt-6 text-sm font-bold text-center cursor-pointer text-cm3"]').click()
    cy.get('.w-64.text-sm.font-bold.break-words.text-cgy5').should('be.visible')
    cy.get('.mt-8.text-sm.font-bold.text-center.cursor-pointer.text-cm3').click()
})
When('user enters verification code as {string}', (code) => {
    cy.get('.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)').type(code)
    cy.wait('@validateOTP', { timeout: 10000 }).then((interception) => {
        const requestBody = interception.request.body;
        const responseBody = interception.response.body;
        expect(requestBody).to.deep.equal(requestBody)
        expect(responseBody).to.exist;
        expect(responseBody.status).to.equal('SUCCESS');
        expect(interception.response.statusCode).to.equal(200);
        expect(responseBody.data.success).to.include('Your 2-step Authentication was enabled!')
        expect(responseBody.data.requestToken).to.exist
    })
})
Then('Verify that two step authentication was reconfigured successfully', () => {
    cy.get('.mx-10.text-xl.font-semibold.text-center').should('have.text', 'Your 2-Step Authentication Was Reconfigured Successfully!')
})