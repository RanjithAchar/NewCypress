const { sqlQueryPlugin } = require('cypress-multiple-db-sql-server');
const { lighthouse, prepareAudit } = require("@cypress-audit/lighthouse");
const { defineConfig } = require("cypress");
const { downloadFile } = require("cypress-downloadfile/lib/addPlugin");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");
const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const allureWriter = require("@shelex/cypress-allure-plugin/writer");
const cucumber = require('cypress-cucumber-preprocessor').default;
const cucumberHtmlReporter = require('cucumber-html-reporter');

// const cucumber = require('cypress-multiple-cucumber-html-reporter/plugin');


module.exports = defineConfig({

  chromeWebSecurity: false,
  experimentalFetchPolyfill: false,
  preserveOnceBeforeRuns: false,
  numTestsKeptInMemory: 1,
  experimentalDisableRunnerDisconnect: true,
  projectId: "neadpr",
  env: {
    MERCH_EMAIL: "qa105@yopmail.com",
    MERCH_PWD: "Admin@123",
    OTP: "123456",
    db: {
      authentication: {
        type: 'default',
        options: {
          userName: 'sa',
          password: 'sqladmin@123'
        }
      },
      server: '172.16.0.56',
      options: {
        database: '',
        encrypt: true,
        rowCollectionOnRequestCompletion: true,
        trustServerCertificate: true,
        port: 1433, // Default Port
      }
    }
  },

  // "reporter": "cucumber",
  // "reporterOptions": {
  //   "outputDir": "cypress/reports"
  // },


  /* reporter: 'mocha-junit-reporter',
     reporterOptions: {
     mochafile: 'cypress/reports/junitreport-[hash].xml',
     toConsole: true
   },
  */

  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {

    reportDir: 'test-report',
    overwrite: false,
    saveJson: false,
    saveHtml: true,

    reportFilename: 'cypressreport',
    timestamp: 'yyyy_mm_dd_hh_MM',


    charts: true,
    reportPageTitle: 'custom-title',
    embeddedScreenshots: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },


  /* reporter: 'cypress-multi-reporters',
   reporterOptions: {
     reporterEnabled: "cypress-mochawesome-reporter, mocha-junit-reporter",
     mochawesomeReporterOptions: {
       reportDir: "cypress/reports",
       overwrite: false,
       saveJson: true,
       saveHtml: true,
 
       reportFilename: "cypressreport",
       timestamp: "yyyy_mm_dd_hh_MM",
       charts: true,
       reportPageTitle: "custom-title",
       embeddedScreenshots: true,
       inlineAssets: true,
       saveAllAttempts: false,
     },
 
     mochaJunitReporterReporterOptions: {
       reportDir: "cypress/reports",
      // mochafile: "cypress/reports/junitreport-[hash].xml",
       mochafile: "junitreport-[hash].xml",
       toConsole: true,
     },
   },*/
  e2e: {
    baseUrl: "https://members-qa.coyni.com",
    specPattern: ["cypress/e2e/feature/*.feature", "cypress/e2e/*.cy.js"],
    env: {
      allureReuseAfterSpec: true,
    },
    //baseUrl: 'http://sat-qa-api-1367964791.us-east-1.elb.amazonaws.com:80',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      on("before:browser:launch", (browser = {}, launchOptions) => {
        prepareAudit(launchOptions);
      });
      on("task", {
        lighthouse: lighthouse(),
      });
      preprocessor.addCucumberPreprocessorPlugin(on, config);
      on('file:preprocessor', cucumber());

      on('after:run', (results) => {
        generateReport(results);
      });
      on(
        "file:preprocessor",
        createBundler({
          plugins: [createEsbuildPlugin.default(config)],
        })
      );
      allureWriter(on, config);

      // Make sure to return the config object as it might have been modified by the plugin.

      // implement node event listeners here
      on('task', { ...sqlQueryPlugin });
      on('task', { downloadFile })
      return config;
    },
    viewportHeight: 1080,
    viewportWidth: 1440
  },
});

