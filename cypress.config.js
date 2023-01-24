const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: { grepFilterSpecs: true, grepOmitFiltered: true },
  e2e: {
    // baseUrl, etc
    fixturesFolder: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
      // and load any plugins that require the Node environment
      require('@bahmutov/cy-grep/src/plugin')(config)
      // IMPORTANT: return the config object
      return config
    },
  },
})
