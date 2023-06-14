// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })


// const { addMatchImageSnapshotPlugin } = require('cypress-image-snapshot/plugin');
// const {iframe} = require('cypress-iframe');

// module.exports = (on, config) => {
// addMatchImageSnapshotPlugin(on, config);
// on('before:browser:launch', (browser = {}, launchOptions) => {
//   if (browser.name === 'chrome') {
//     launchOptions.args.push('--disable-features=SameSiteByDefaultCookies');
//   }
//   return launchOptions;
// });

// iframe(on, config);
// };

//require('cypress-downloadfile/lib/downloadFileCommand')

// import 'cypress-xpath';
// Cypress.Commands.add('xpath', (selector, options) => {
//   return cy.get().xpath(selector, options);
// });
import 'cypress-iframe';
import 'cypress-xpath';

Cypress.Commands.add('swipeLeft', () => {
  cy.get('.swiper-slide-active')
    .trigger('mousedown', { position: 'right' })
    .trigger('mousemove', { clientX: 100, clientY: 275 })
    .trigger('mouseup', { force: true });
});

Cypress.on('uncaught:exception', (err) => {
  console.log('Cypress detected uncaught exception: ', err);
  return false;
});
// Cypress.Commands.add('coyniLogin', () => {
//   const email = Cypress.env("MERCH_EMAIL");
//   const password = Cypress.env("MERCH_PWD");
//   const otp = Cypress.env("OTP");

//   cy.visit("/login");
//   cy.url().should('include', '/login');
//   cy.intercept('POST', 'https://members-qa.coyni.com/api/v2/user/signin').as('xhrCall');
//   cy.wait('@xhrCall').then((xhr) => {
//     expect(xhr.response.statusCode).to.eq(200);
//   });
//   cy.get('#Email').type(email);
//   cy.get('#Password').type(password);
//   cy.get('[type="submit"]').click();
//   cy.get('.relative > :nth-child(1)').type(otp);
// });

Cypress.Commands.add('coyniLogin', () => {
  cy.visit('https://members-qa.coyni.com');

  cy.get('#Email').type("qa105@yopmail.com");
  cy.get('#Password').type("Admin@123");
  cy.get('[type="submit"]').click();
  cy.get('.relative > :nth-child(1)').type("123456");
});

export default null;