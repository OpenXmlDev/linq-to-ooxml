// Define a list of ESM modules that need to be transformed.
const esmModuleList = ['@openxmldev/linq-to-xml', '@tsdotnet/linq'];

// Define a pattern for the transformIgnorePatterns option.
// The specific pattern ignores all files inside /node_modules except for those in
// any of the ESM module subfolders such as /node_modules/@openxmldev/linq-to-xml.
const esmModulePattern = `/node_modules/(?!(${esmModuleList.join('|')}))`;

export default {
  displayName: 'linq-to-ooxml',
  preset: '../../jest.preset.js',
  globals: {
    'ts-jest': {
      tsconfig: '<rootDir>/tsconfig.spec.json'
    },
  },

  // The transform option differentiates between .ts and .js files, transforming
  // .ts files with ts-jest and .js files with babel-jst. This is required for
  // correctly dealing with ESM modules. Without this, the tests will fail.
  transform: {
    '^.+\\.ts$': 'ts-jest',
    '^.+\\.js$': 'babel-jest'
  },
  
  // The transformIgnorePatterns option is required for having the ESM modules
  // transformed. If not defined, tests will fail.
  transformIgnorePatterns: [esmModulePattern],
  
  // Previously, this included 'html'. However, we don't have HTML files, so this
  // was removed.
  moduleFileExtensions: ['ts', 'js'],
  coverageDirectory: '../../coverage',
};
