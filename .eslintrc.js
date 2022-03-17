const RULES = {
  OFF: 'off',
  WARN: 'warn',
  ERROR: 'error'
};

module.exports = {
  env: {
    es2021: true,
    browser: true
  },
  extends: [
    'plugin:react/recommended',
    'plugin:import/recommended',
    'plugin:cypress/recommended',
    'airbnb'
  ],
  globals: {
    window: true,
    document: true,
    KeyboardEvent: true,
    HTMLAnchorElement: true,
    HTMLFormElement: true,
    MediaMetadata: true,
    NodeJS: true,
    jest: true
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: { jsx: true },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['react', '@typescript-eslint', 'import', 'cypress'],
  rules: {
    'no-plusplus': RULES.OFF,
    'no-extra-semi': RULES.OFF,
    'global-require': RULES.OFF,
    'linebreak-style': RULES.OFF,
    'import/no-unresolved': RULES.OFF,
    'no-use-before-define': RULES.OFF,
    'import/no-dynamic-require': RULES.OFF,
    'react/require-default-props': RULES.OFF,
    'react/jsx-props-no-spreading': RULES.OFF,
    'jsx-a11y/media-has-caption': RULES.OFF,
    'react/react-in-jsx-scope': RULES.OFF,
    'comma-dangle': [RULES.ERROR, 'never'],
    'max-len': [RULES.ERROR, { code: 115 }],
    'object-curly-newline': [RULES.ERROR, { multiline: true }],
    '@typescript-eslint/no-unused-vars': [RULES.ERROR, { argsIgnorePattern: '^_' }],
    'react/function-component-definition': [RULES.ERROR, {
      namedComponents: 'arrow-function',
      unnamedComponents: 'arrow-function'
    }],
    'import/extensions': [RULES.ERROR,
      'never',
      { json: 'always' }
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.tsx'] }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before'
          }
        ],
        pathGroupsExcludedImportTypes: ['react'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true
        }
      }
    ]
  }
};
