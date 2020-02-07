// @ts-check
// Protractor configuration file, see link for more information
// https://github.com/angular/protractor/blob/master/lib/config.ts
const {SpecReporter} = require('jasmine-spec-reporter');

const ReportportalAgent = require('agent-js-jasmine');

const agent = new ReportportalAgent({
  token: "4f389d02-2128-4019-bf03-365797531b46",
  endpoint: "https://rp.epam.com/api/v1",
  launch: "ihar_sakun_TEST_EXAMPLE",
  project: "ihar_sakun_personal",
  attachPicturesToLogs: true,
  attributes: []
});

/**
 * @type { import("protractor").Config }
 */
exports.config = {
  allScriptsTimeout: 11000,
  specs: [
    './src/**/*.e2e-spec.ts'
  ],
  capabilities: {
    browserName: 'chrome'
  },
  directConnect: true,
  baseUrl: 'http://localhost:4200/',
  framework: 'jasmine',
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000,
    print: function () {
    }
  },
  onPrepare() {
    require('ts-node').register({
      project: require('path').join(__dirname, './tsconfig.json')
    });
    jasmine.getEnv().addReporter(new SpecReporter({spec: {displayStacktrace: true}}));
    jasmine.getEnv().addReporter(agent.getJasmineReporter());
  },
  afterLaunch: () => {
    return agent.getExitPromise();
  }
};
