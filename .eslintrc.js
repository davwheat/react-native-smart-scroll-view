module.exports = {
  env: {
    es6: true,
  },
  settings: {
    react: {
      version: '16.13.1',
    },
  },
  root: true,
  extends: '@react-native-community',
  rules: {
    'prefer-template': 'error',
    'no-unused-vars': 'error',
    quotes: ['error', 'single', { avoidEscape: true, allowTemplateLiterals: true }],
  },
};
