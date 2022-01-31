const { jsWithBabel } = require('ts-jest/presets');

module.exports = {
  ...jsWithBabel,
  cacheDirectory: './cache',
  collectCoverage: true,
  coverageReporters: ['lcov', 'text-summary'],
  globals: {
    'ts-jest': {
      babelConfig: 'babel.config.js',
      tsconfig: 'tsconfig.test.json',
      useESM: true,
    },
  },
  moduleFileExtensions: ['js', 'json', 'ts', 'tsx'],
  testEnvironment: 'jsdom',
  testMatch: ['**/*.test.{js,ts,tsx}'],
  transformIgnorePatterns: [
    'node_modules/(?!@react-native|native-base|@react-native-community/picker|native-base-shoutem-theme|react-native-easy-grid|react-native|react-navigation|redux-persist|@codler/react-native-keyboard-aware-scroll-view|@react-navigation/native|@react-native-segmented-control)',
  ],
};
