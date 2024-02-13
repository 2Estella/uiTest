/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  env: {
    es6: true,
    node: true,
  },
  ignorePatterns: ['node_modules', 'dist', 'public'],
  extends: [
    'plugin:vue/vue3-recommended',
    'plugin:@typescript-eslint/recommended',
    '@vue/eslint-config-typescript',
    'eslint:recommended',
  ],
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
    sourceType: 'module',
  },
  plugins: ['vue', '@typescript-eslint', '@stylistic/ts'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'indent': 'off',
    'semi': ['error', 'always'],
    'quotes': ['error', 'single',
      {
        avoidEscape: true,
        allowTemplateLiterals: true,
      },
    ],

    'eqeqeq': ['error', 'always'],
    'comma-spacing': [
      'error',
      {
        before: false,
        after: true,
      },
    ],
    'brace-style': ['error', '1tbs'],
    'no-eval': 'error',
    'block-spacing': 'error',
    'keyword-spacing': [
      'warn',
      {
        before: true,
        after: true,
      },
    ],
    'no-empty': [
      'warn',
      {
        allowEmptyCatch: true,
      },
    ],
    'key-spacing': ['error', { afterColon: true }],
    'no-multiple-empty-lines': ['error', { max: 2 }],

    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/semi': 'off',
    '@typescript-eslint/no-extra-semi': 'off',


    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-non-null-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'off',

    '@stylistic/ts/indent': ['error', 2, { 'ArrayExpression': 1, 'ObjectExpression': 1 }],
    '@stylistic/ts/semi': ['error', 'always'],
    '@stylistic/ts/no-extra-semi': 'error',

    'vue/script-indent': ['error', 2, { switchCase: 1 }],
    'vue/no-v-html': 'off',
    'vue/no-deprecated-html-element-is': 'off',
    'vue/html-indent': ['error', 2],
    'vue/multi-word-component-names': 'off',
    'vue/no-setup-props-destructure': 'off',
    'vue/component-tags-order': 'off',
    'vue/require-default-prop': 'off',
    'vue/no-multi-spaces': ['error'],
    'vue/prop-name-casing': ['error', 'camelCase'],
    'vue/attribute-hyphenation': ['error', 'always'],
    'vue/v-on-event-hyphenation': ['error', 'always', { autofix: true }],
    'vue/component-definition-name-casing': ['error', 'PascalCase'],
    'vue/no-template-shadow': 'off',
    'vue/component-name-in-template-casing': [
      'error',
      'PascalCase',
      {
        registeredComponentsOnly: true,
        ignores: ['/^svg-/'],
      },
    ],
    // attr이 3개 이하일때 무조건 1줄로 가능한지 확인
    'vue/first-attribute-linebreak': [
      'error',
      {
        singleline: 'beside',
        multiline: 'below',
      },
    ],
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: {
          max: 3,
        },
        multiline: {
          max: 1,
        },
      },
    ],
    'vue/singleline-html-element-content-newline': 'off',
    'vue/attributes-order': [
      'error',
      {
        order: [
          'ATTR_SHORTHAND_BOOL',
          ['UNIQUE', 'SLOT'], //  'ref', 'key',  'v-slot', 'slot'.
          'ATTR_STATIC', // prop=""
          'DEFINITION', // 'is', 'v-is'
          'ATTR_DYNAMIC', // :prop=""
          'EVENTS', // '@click="functionCall"', 'v-on="event"'
          'OTHER_DIRECTIVES',
          'RENDER_MODIFIERS', // 'v-once', 'v-pre'
          'CONTENT', //  'v-text', 'v-html'
          'TWO_WAY_BINDING', // 'v-model'
          'LIST_RENDERING', // v-for
          'CONDITIONALS', //  'v-if', 'v-else-if', 'v-else', 'v-show', 'v-cloak'
        ],
        alphabetical: false,
      },
    ],
    'vue/html-closing-bracket-spacing': [
      'error',
      {
        startTag: 'never',
        endTag: 'never',
        selfClosingTag: 'always',
      },
    ],
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always',
      },
    ],
    'vue/html-self-closing': [
      'error',
      {
        html: {
          void: 'always',
          normal: 'never',
          component: 'always',
        },
        svg: 'always',
        math: 'always',
      },
    ],
    'vue/no-duplicate-attributes': [
      'error',
      {
        allowCoexistClass: false,
        allowCoexistStyle: false,
      },
    ],
    'vue/multiline-html-element-content-newline': [
      'error',
      {
        ignoreWhenEmpty: false,
        allowEmptyLines: true,
        ignores: ['pre', 'textarea'],
      },
    ],
  },
  overrides: [
    {
      files: ['*.js', '*.jsx'],
      rules: {
        '@typescript-eslint/explicit-function-return-type': 'off',
      },
    },
    {
      files: ['*.ts', '*.tsx'],
      rules: {
      },
    },
  ],
};
