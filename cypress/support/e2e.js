// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands';
import 'cypress-iframe';
import '@shelex/cypress-allure-plugin';
import 'cypress-file-upload';
import 'cypress-mochawesome-reporter/register'
// import 'cypress-multiple-cucumber-html-reporter';

// Cypress.on('window:before:load', (win) => {
//   win.fetch = null;
// });


// /// <reference types="cypress" />

// import 'cypress-downloadfile/lib/addPlugin';

// Cypress.Commands.add('swipeleft', () => {
//   // Your swipeleft implementation here
// });



