module.exports = {
  testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
  bail: 1,
  clearMocks: true,
  collectCoverage: true,
  collectCoverageFrom: [
    './src/**/*.{js,jsx,ts,tsx}',
    '!./src/**/index.{js,jsx,ts,tsx}',
    '!**/node_modules/**',
    '!**/styles/**'
  ],
  coverageReporters: ['lcov', 'text']
}
