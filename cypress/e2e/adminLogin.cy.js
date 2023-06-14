import signIn from "../support/pageObject/adminLogin";

const admin = new signIn();

describe('login', () => {
  beforeEach('API', () => {
    // Intercept the token refresh request
    cy.intercept('POST', 'https://admin-qa.coyni.com/api/v2/user/refresh-token').as('refreshToken');
  });

  it("User is able to perform the login process", () => {
    // cy.coyniLogin()
    admin.admin()
  });

  it('User is able to perform the add merchant process and doing the merchant signup', () => {
    admin.addMerchant()
  })
  it('User is able to click on the invite link from the admin', () => {
    admin.inviteSignup()
  })
  it('User is able to perform the signup process', () => {
    admin.signUp()
  })
});

