module.exports = {
  root: false,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    semi: 'off',
    'import/extensions': 'off',
    "quotes": ["error", "double"],
    'max-len': 'off'
    },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
