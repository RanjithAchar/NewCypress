import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";
//import { beforeEach } from 'cypress';

Before(() => {
  cy.intercept('GET', 'https://members-qa.coyni.com/api/v2/profile/me/signedagreements?sortDirection=DSC&sortColumnName=createdAt').as('AgreementData');
  cy.intercept('GET', 'https://members-qa.coyni.com/api/v2/agreements/url?agreementType=0').as('TOSdownload')
  cy.intercept('GET', 'https://members-qa.coyni.com/api/v2/agreements/url?agreementType=1').as('PPdownload')
});

Given("User is on the Login page", () => {
  cy.visit("https://members-qa.coyni.com/login")
});
When("User types Email as {string}", (email) => {
  cy.get("#Email").type(email)
});
When("User types Password as {string}", (password) => {
  cy.get("#Password").type(password)
});
When("Clicks on the Next Button", () => {
  cy.get("[type=submit]").click({ force: true })
});
When("User types otp as {string}", (verificationcode) => {
  cy.get('.relative > :nth-child(1)').type(verificationcode)
});
Then('User should be logged in Successfully', () => {
  cy.get('span[class="MerchantDashboard_heading__nL+73"]').should('have.text', 'Merchant Dashboard')
});


When('User clicks on the Request Dropdown', () => {
  cy.get('div.flex.group > .cursor-pointer.text-cgy3').click()
});
When('Clicks on the Agreements tab', () => {
  cy.get(':nth-child(4) > .p-px > .text-sm').click()
});
Then('User should be on the Agreements page and verifying the response of TOS and PP Agreement', () => {
  cy.wait('@AgreementData').then((interception) => {
    const responseBody = interception.response.body;
    expect(responseBody).to.exist;
    expect(responseBody.status).to.equal('SUCCESS');
    expect(interception.response.statusCode).to.equal(200);

    const items = responseBody.data.items;
    expect(items).to.be.an('array').and.have.lengthOf.at.least(1);

    const firstItem = items[0];
    expect(firstItem).to.have.property('id');
    expect(firstItem).to.have.property('signatureType', 1);
    expect(firstItem).to.have.property('userId', 2264);
    expect(firstItem).to.have.property('signature', 'Fifa 2023');
    expect(firstItem.documentVersion).to.equal('v1.64');
    expect(firstItem.ipAddress).to.equal('103.138.45.194')

    const secondItem = items[1];
    expect(secondItem).to.have.property('signatureType', 0);
    expect(secondItem.documentVersion).to.equal('v1.304')
    expect(secondItem.ipAddress).to.equal('103.138.45.194')
  });
})
When('Verifying the TOS and PP agreements texts', () => {
  cy.get("span[class='text-base text-cgy4']").should('have.text', 'Agreements');
  cy.xpath("//span[normalize-space()='Terms of Service']").should('have.text', 'Terms of Service')
  cy.xpath("//span[normalize-space()='Privacy Policy']").should('have.text', 'Privacy Policy')
});
When('User click on the download button of TOS agreement', () => {
  cy.get(':nth-child(2) > .Agreements_buttonTP__vzo7v').should('be.visible').should('have.attr', 'class')
  cy.get(':nth-child(2) > .Agreements_buttonTP__vzo7v').click()
})
Then('TOS agreement should be Successfully downloaded', () => {
  cy.wait('@TOSdownload').then((interception) => {
    const responseBody = interception.response.body;
    expect(responseBody).to.exist;
    expect(responseBody.status).to.equal('Success');
    expect(interception.response.statusCode).to.equal(200);
    expect(responseBody.data.downloadUrl).to.include('https://coyni-qa.s3.amazonaws.com/agreements')
  })
})
When('User click on the download button of PP agreement', () => {
  cy.get(':nth-child(3) > .Agreements_buttonTP__vzo7v').should('be.visible').should('have.attr', 'class')
  cy.get(':nth-child(3) > .Agreements_buttonTP__vzo7v').click()
})
Then('PP agreement should be Successfully downloaded', () => {
  cy.wait('@PPdownload').then((interception) => {
    const responseBody = interception.response.body;
    expect(responseBody).to.exist;
    expect(responseBody.status).to.equal('Success');
    expect(interception.response.statusCode).to.equal(200);
    expect(responseBody.data.downloadUrl).to.include('https://coyni-qa.s3.amazonaws.com/agreements')
  })
})
  // When('User is able to view the old agreement tree of terms of service agreement', () => {
  //   cy.get('#agreements-id > .bg-cwhite > :nth-child(2)').should('be.visible').click({force:true})
  //   cy.get('.flex.flex-col.gap-2 > .flex > .mt-1').click()
  //   cy.get('.text-lg.text-cgy3').should('eq', 'v1.706')
  // })
  // Then('User is able to download the old Tos agreements', () => {
  //   cy.get("span[class='text-base font-bold cursor-pointer text-cm3 hover:text-cm4 hover:underline']").should('be.visible').click()
  // })
  // When('User is able to view the old agreement tree of privacy policy agreement',()=>{
  //   cy.get('.relative.text-base.text-cgy4').click()
  //   cy.get('#agreements-id > .bg-cwhite > :nth-child(3)').click({ force: true })
  //   cy.xpath("//div[contains(text(),'v1.471')]").click()
  // })
  // Then('User is able to download the old Pp agreements',()=>{
  //   cy.get("span[class='text-base font-bold cursor-pointer text-cm3 hover:text-cm4 hover:underline']").should('be.visible').click()
  // })
