module.exports = function (config) {
  config.set({
    captureTimeout: 15000,
    host: '0.0.0.0',
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-junit-reporter'),
      require('karma-mocha-reporter'),
      require('karma-chrome-launcher'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    port: 9876, // karma web server port
    colors: true,
    angularCli: {
      environment: 'dev'
    },
    browsers: ['HeadlessChromeCI'],
    customLaunchers: {
      HeadlessChromeCI: {
        base: 'ChromeHeadless',
        flags: [
          '--disable-translate',
          '--disable-extensions',
          '--no-first-run',
          '--disable-background-networking',
          '--remote-debugging-port=9223',
        ]
      }
    },
    // junit reporter options
    junitReporter: {
      outputFile: 'reports/junit/test-results.xml',
      useBrowserName: false
    },
    // mocha reporter options
    mochaReporter: {
      colors: {
        success: 'blue',
        info: 'bgGreen',
        warning: 'cyan',
        error: 'bgRed'
      },
      symbols: {
        success: '✔',
        info: 'ℹ',
        warning: '⚠',
        error: '✖'
      }
    },
    reporters: ['mocha', 'junit'],
    autoWatch: false,
    singleRun: true,
    concurrency: Infinity
  });
};
