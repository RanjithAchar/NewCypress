import { Given, When, Then, Before, After } from "@badeball/cypress-cucumber-preprocessor";

// After completion of one scenario, before and after hooks will run

Before(() => {
  cy.log("Before Hook....");
});

After(() => {
  cy.log("After Hook....");
});

Given("User is on the Login home page", () => {
  cy.visit("https://members-qa.coyni.com/login");
});

When("User types email as {string}", (email) => {
  cy.get("#Email").type(email);
});

When("User types password as {string}", (password) => {
  cy.get("#Password").type(password);
});

When("Clicks on the Next button", () => {
  cy.get("[type=submit]").click({ force: true });
});

When("User types OTP as {string}", (verificationcode) => {
  cy.get('.relative > :nth-child(1)').type(verificationcode);
});
Then('User should be logged in successfully',()=>{
    cy.get('span[class="MerchantDashboard_heading__nL+73"]').should('have.text','Merchant Dashboard')
})

When('user clicks on the Request dropdown', () => {
  cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
});

When('clicks on the Merchant Accounts tab',()=>{
    cy.get(':nth-child(2) > .p-px > .text-sm').click();
})
Then('user should be on the Merchant Accounts page',()=>{
    cy.get(':nth-child(1) > .text-base.text-cgy4').should('have.text','Merchant Accounts')
})
When('the Merchant Setting button should be disabled for the under review, cancelled, unverified, terminated, declined account',()=>{
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/button[2]').should('be.disabled')
})
When('user clicks on the Merchant Settings Button for the active account',()=>{
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[5]/div[2]/div[1]/div[1]/div[2]/button[2]').click()
})
Then('the company Information screen should be displayed',()=>{
    cy.xpath("//p[normalize-space()='Company Information']").should('have.text','Company Information')
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
    cy.get(':nth-child(2) > .p-px > .text-sm').click();
})
When('User click on the Go to Merchant Button',()=>{
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[5]/div[2]/div[1]/div[1]/div[2]/button[1]').click()
})
Then('Token Account screen should be displayed for the Active Account',()=>{
    cy.get("div[class='MerchantWalletDashboard_account_balance__pQIMG pt-6 px-6 pb-8'] span[class='text-base text-cgy4']").should('have.text','Total Available Funds')
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
    cy.get(':nth-child(2) > .p-px > .text-sm').click();
})
When('cancelled screen should be displayed for the cancel account',()=>{
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[3]/div[2]/div[1]/div[1]/div[2]/button[1]').click()
    cy.get('.text-base.italic.font-bold.leading-5.text-crd5').should('have.text','Cancelled')
    cy.xpath("//div[contains(@class,'icon-small-arrow text-base fill-current hover:text-cm3 false DashboardMenu_downArrow__YA3Vr')]").click({force:true})
    cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[4]/div[1]/button[1]/span[2]/div[1]").click()
    cy.xpath("//p[normalize-space()='2MM']").click({force:true})
    cy.wait(2000)
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
    cy.get(':nth-child(2) > .p-px > .text-sm').click({force:true});
})
When('Merchant Application tracker screen should be displayed for the unverified Account',()=>{
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[4]/div[2]/div[1]/div[1]/div[2]/button[1]').click()
    cy.get('.text-xl.font-bold.leading-5.text-cgy4').should('have.text','Merchant Application')
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
    cy.get(':nth-child(2) > .p-px > .text-sm').click();
})
When('Terminated screen should be displayed for the terminated account',()=>{
    cy.xpath('/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[5]/div[6]/div[1]/div[1]/div[2]/button[1]').click()
   // cy.get('.text-cm3.tracking-normal.Heading_heading4__7XPCN.leading-10.capitalize').should('have.text','Account Terminated')
    cy.xpath("//div[contains(@class,'icon-small-arrow text-base fill-current hover:text-cm3 false DashboardMenu_downArrow__YA3Vr')]").click({force:true})
    //cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[4]/div[1]/button[1]/span[2]/div[1]").click({force:true})
    
    cy.xpath("//p[normalize-space()='Fifa 2023']").click({force:true})
    cy.wait(2000)
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
    cy.get(':nth-child(2) > .p-px > .text-sm').click({force:true});
})
When('Declined screen should be displayed for the Declined account',()=>{
    cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[5]/div[3]/div[1]/div[1]/div[2]/button[1]").click()
    cy.get('.text-base.italic.font-bold.leading-5.text-crd5').should('have.text','Declined')
    cy.xpath("//div[contains(@class,'icon-small-arrow text-base fill-current hover:text-cm3 false DashboardMenu_downArrow__YA3Vr')]").click({force:true})
    //cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[1]/div[3]/div[1]/div[1]/div[1]/div[4]/div[1]/button[1]/span[2]/div[1]").click({force:true})
    cy.xpath("//p[normalize-space()='Fifa 2023']").click({force:true})
    cy.wait(2000)
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
    cy.get(':nth-child(2) > .p-px > .text-sm').click({force:true});
})
When('Under Review screen should be displayed for the under review account',()=>{
    cy.wait(2000)
    cy.xpath("/html[1]/body[1]/div[1]/div[1]/div[1]/div[2]/div[1]/div[3]/div[1]/div[2]/div[1]/div[5]/div[5]/div[1]/div[1]/div[2]/button[1]").click({force:true})
    cy.wait(2000)
    //cy.xpath("//div[contains(@class,'font-bold text-[28px] tracking-[0.45px] text-cm3')]").should('have.text','Account is Under Review')
    cy.get('div.flex.group > .cursor-pointer.text-cgy3').click();
    cy.get(':nth-child(7) > .p-px > .text-sm').click();
})