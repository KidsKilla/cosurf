module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:@typescript-eslint/recommended', 'standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: ['react', 'import', '@typescript-eslint'],
  rules: {
    // buggy
    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': 'error',
    //
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    'no-unused-vars': 'warn',
    'import/no-default-export': 'error',
  },
}
