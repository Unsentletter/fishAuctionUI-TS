module.exports = {
  verbose: true,
  setupFilesAfterEnv: ['<rootDir>/enzyme-setup.js'],
  moduleNameMapper: {
    '\\.(css|less|sass|scss)$': '<rootDir>/__mocks__/styleMock.js',
  },
}
