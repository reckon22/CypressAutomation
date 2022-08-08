const { defineConfig } = require('cypress');

module.exports = defineConfig({ 
  watchForFileChanges : false,
  reporter: 'cypress-multi-reporters',
  reporterOptions: {
     reporterEnabled: 'mochawesome',
     mochawesomeReporterOptions: {
       reportDir: 'cypress\reports\mocha',
       quite: true,
       overwrite: false,
       html: false,
       json: true,
     } 
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      //return require('./cypress/plugins/index.js')(on, config)
    },
    baseurl: 'http://automationpractice.com',
    specPattern: 'cypress/e2e/1-getting-started/TestCases/*.js'
  },
})