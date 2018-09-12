
module.exports = {
  collectCoverage: true,
  // An array of glob patterns indicating a set of files for which coverage information should be collected

  collectCoverageFrom: [
    '!**/node_modules/**'
  ],
  // The directory where Jest should output its coverage files
  coverageDirectory: '<rootDir>/test/coverage/',

  // A list of reporter names that Jest uses when writing coverage reports
  coverageReporters: [
    'html',
    'text-summary'
  ],

  // A list of paths to directories that Jest should use to search for files in
  roots: [
    '<rootDir>'
  ],

  // The paths to modules that run some code to configure or set up the testing environment before each test
  setupFiles: [
    '<rootDir>/test/setup/index'
  ],

  moduleNameMapper: {
    '@/(.*)$': '<rootDir>/src/$1',
    '^vue$': '<rootDir>/node_modules/vue/dist/vue.common.js'
  },

  // The test environment that will be used for testing
  testEnvironment: 'node',

  // The glob patterns Jest uses to detect test files
  testMatch: [
    '**/__tests__/**/*.js?(x)',
    '**/?(*.)+(spec|test).js?(x)'
  ],

}
