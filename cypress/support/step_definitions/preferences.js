import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

// After completion of one scenario, before and after hooks will run

Before(() => {
  cy.log("Before Hook....");
});

After(() => {
  cy.log("After Hook....");
});

Given("User is on the login home page", () => {
  cy.visit("https://members-qa.coyni.com/login");
});

When("user types email as {string}", (email) => {
  cy.get("#Email").type(email);
});

When("user types password as {string}", (password) => {
  cy.get("#Password").type(password);
});

When("clicks on the Next button", () => {
  cy.get("[type=submit]").click({ force: true });
});

When("user types OTP as {string}", (verificationcode) => {
  cy.get('.relative > :nth-child(1)').type(verificationcode);
});
Then('user should be logged in successfully',()=>{
    cy.get('span[class="MerchantDashboard_heading__nL+73"]').should('have.text','Merchant Dashboard')
})

When('user clicks on the request dropdown', () => {
  cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
});

When('clicks on the preferences tab', () => {
  cy.get(':nth-child(3) > .p-px > .text-sm').click();
});

Then('user should be on the preferences page', () => {
  cy.get('.relative.text-base.text-cgy4').should('have.text', 'Preferences');
});

Then('the Save button should be disabled', () => {
  cy.get('.Buttons_btn__JEz-N.Buttons_btn__primary__L3dSk.btn--primary--yellow.Preferences_btn__O1OwU').should('be.disabled');
});

When('user clicks on the default account dropdown', () => {
  cy.get('.absolute.transform.rotate-90.top-3.right-3').click();
});

When('selects any merchant user', () => {
  cy.xpath('//span[normalize-space()="Terminator (Business)"]').click();
});

When('clicks on the save button', () => {
  cy.get('.Buttons_btn__JEz-N.Buttons_btn__primary__L3dSk.btn--primary--yellow.Preferences_btn__O1OwU').click();
});

Then('the message "Preferences updated successfully" is displayed', () => {
  cy.contains('Preferences Updated Successfully').should('be.visible');
});

Then('user clicks on the request dropdown again', () => {
  cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
});

When('clicks on the Sign out button', () => {
  cy.get(':nth-child(7) > .p-px > .text-sm').click();
});
