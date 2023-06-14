class signIn {
  elements = {
   URL: () => cy.visit('https://admin-qa.coyni.com/login'),
    yopmail: () => cy.visit('https://yopmail.com/'),
   adminEmail: () => cy.get("#Email"),
   Password: () => cy.get("#Password"),
    nextButton: () => cy.get('[type="submit"]'),
    otpBox: () => cy.get('.relative >:nth-child(1)'),
    profileDropdown: () => cy.get(':nth-child(4) > .menu-item-button > .justify-between > .icon-arrow-down'),
    merchant: () => cy.get(':nth-child(4) > .subitems-container > .space-y-2 > :nth-child(2) > .flex'),
    createMerchant: () => cy.get('[data-for="addButton"]'),
    firstName: () => cy.get('#firstName'),
    lastName: () => cy.get('#lastName'),
    email: () => cy.get('#Email'),
    companyName: () => cy.get('#companyName'),
    partnerName: () => cy.get('#PartnerName'),
    sendInviteButton: () => cy.get('[type="Send Invite"]'),
    search: () => cy.get('#ycptcpt'),
    searchButton: () => cy.get('#refreshbut'),
    getstartLink: () => cy.get('[name="ifmail"]').then(($iframe) => {
      const iframeContent = $iframe.contents().find('body');
      // Get the link element
      cy.wrap(iframeContent)
        .find("div[id='mail'] div p a")
        .then(($link) => {
          // Extract the href attribute value
          const linkUrl = $link.attr('href');
          // Navigate to the URL in the same window
          cy.window().then((win) => {
            win.location.href = linkUrl;
          });
        });
    }),
    firstname: () => cy.get('#first-name'),
    lastname: () => cy.get('#last-name'),
    phonenumber: () => cy.get('#Phone_Number'),
    Email: () => cy.get('#email-address'),
    createpassword: () => cy.get('#create-password'),
    confirmpassword: () => cy.get('#confirm-password'),
    nextbutton: () => cy.get('[type="submit"]'),
    vcode: () => cy.get('.VerificationInput_verification_input_wrapper__o8Que > .relative > :nth-child(1)'),
    agreementTOS: () => cy.get(".TosAgreements_apiData__U6PSc").scrollTo("bottom", { duration: 10000 }),
    checkbox: () => cy.get('.custom-checkbox'),
    next: () => cy.get('[data-testid]'),
    agreementPP: () => cy.get(".PrivacyAgreements_apiData__ewNFA").scrollTo("bottom", { duration: 10000 }),

  }

  admin() {
    this.elements.URL();
   this.elements.adminEmail().type('swathim@ideyalabs.com');
   this.elements.Password().type('Admin@123');
    this.elements.nextButton().click();
    cy.wait(2000)
    this.elements.otpBox().type('123456');

  }
  addMerchant() {
    this.elements.profileDropdown().click()
    this.elements.merchant().click()
    this.elements.createMerchant().click()
    this.elements.firstName().type('Testing')
    this.elements.lastName().type('Automation QA')
    this.elements.email().type('testAuto3@yopmail.com')
    this.elements.companyName().type('Automatic CNCccc')
    this.elements.partnerName().type('Hitachiiii')
    this.elements.sendInviteButton().click()
  }
  inviteSignup() {
    this.elements.yopmail()
    this.elements.search().type('testAuto3@yopmail.com')
    this.elements.searchButton().click()
    this.elements.getstartLink()
  }
  signUp() {
    this.elements.firstname().type('kalyan')
    this.elements.lastname().type('kumar')
    this.elements.phonenumber().click({ force: true }).type('6564107834')
    this.elements.Email().click({ force: true }).type('testAuto3@yopmail.com')
    this.elements.createpassword().type('Admin@123', { force: true })
    this.elements.confirmpassword().type('Admin@123', { force: true })
    this.elements.nextbutton().click()
    cy.wait(2000)
    this.elements.vcode().type('123456')
    cy.wait(2000)
    this.elements.vcode().type('123456')
    cy.wait(5000)
    this.elements.agreementTOS()
    this.elements.checkbox().click()
    this.elements.next().click()
    this.elements.agreementPP()
    this.elements.checkbox().click()
    this.elements.next().click()
  }
}

export default signIn