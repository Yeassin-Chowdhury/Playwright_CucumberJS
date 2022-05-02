let reporter = require("cucumber-html-reporter");

let options = {
  theme: "bootstrap",
  jsonFile: "report/report.json",
  output: "report/cucumber_report.html",
  reportSuiteAsScenarios: true,
  scenarioTimestamp: true,
  metadata: {
    "App Version": "0.3.2",
    "Test Environment": "STAGING",
    Browser: "Chrome  101",
    Platform: "Windows 10",
    Parallel: "Scenarios",
    Executed: "Remote",
  },
};

reporter.generate(options);

//more info on `metadata` is available in `options` section below.

//to generate consodilated report from multi-cucumber JSON files, please use `jsonDir` option instead of `jsonFile`. More info is available in `options` section below.
