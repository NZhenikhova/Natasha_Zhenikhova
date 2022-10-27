const { defineConfig } = require("cypress");
const {addMatchImageSnapshotPlugin} = require ('cypress-image-snapshot/plugin');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

module.exports = defineConfig({
viewportHeight: 2250,
viewportWidth: 1850,
e2e: {
  setupNodeEvents(on, config) {
    addMatchImageSnapshotPlugin(on, congig);
  },
  excludeSpecPattern: ['**/cypress/e2e/1-getting-started', '**/cypress/e2e/1-advanced-examples'],
  baseUrl: 'https://www.beaxy.com',
  defaultCommandTimeout: 4000,
  retries: 2,
  watchForFileChanges: false,
  screenshotOnRunFailure: false,
  slowTestThreshold: 10000,
}
});


