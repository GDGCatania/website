module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
    '@vue/typescript',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-underscore-dangle': 'off',
    'no-undef': 'off',
    'no-unused-vars': 'off',
    strict: 'off',
    'import/extensions': ['error', 'always', {
      js: 'never',
      mjs: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    }],
    // Vuex works basing on store parameter mutation
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: [
          'state',
          'e',
          'ctx',
          'req',
          'request',
          'res',
          'response',
        ],
      },
    ],

    // Setup max length to 120 characters
    'max-len': ['error', {
      code: 120,
    }],

    // Rules disabled to remove unwanted errors in lifecycle hooks.
    'class-methods-use-this': 'off',

    // Rules disabled to prevent editing multiple files when helper with one export is being extended
    'import/prefer-default-export': 'off',

    // Additional rules to make HTML more readable.
    'vue/html-indent': [
      'error', 2, {
        attribute: 2,
        closeBracket: 0,
        alignAttributesVertically: false,
        ignores: [],
      },
    ],
    'vue/max-attributes-per-line': [2, {
      singleline: 1,
      multiline: {
        max: 1,
        allowFirstLine: true,
      },
    }],
    'vue/html-self-closing': ['error', {
      html: {
        void: 'never',
        normal: 'never',
        component: 'never',
      },
    }],
    'vue/html-closing-bracket-newline': ['error', {
      singleline: 'never',
      multiline: 'never',
    }],
    'vue/script-indent': ['error', 2, { baseIndent: 1 }],
  },
  overrides: [
    {
      files: ['*.vue'],
      rules: {
        indent: 'off',
        'vue/component-name-in-template-casing': ['error', 'kebab-case'],
        'vue/valid-template-root': 'off',
      },
    },
  ],
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
};
