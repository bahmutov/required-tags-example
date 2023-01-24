const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: { grepFilterSpecs: true, grepOmitFiltered: true },
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    specPattern: [
      'cypress/e2e/spec-b.cy.js',
      'cypress/e2e/scrape.cy.js',
      'cypress/e2e/clean.cy.js',
    ],
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
      // require('@bahmutov/cy-grep/src/plugin')(config)
      // IMPORTANT: return the config object
      // return config
    },
  },
})
