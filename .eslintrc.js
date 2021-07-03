// TODO :: Allow jsx-a11y rules once we start implementing accessibility measures

module.exports = {
  parser: 'babel-eslint',
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  extends: ['./node_modules/nomo-core/eslint-config/react.js', 'prettier'],
  plugins: ['import', 'react', 'react-hooks', 'json'],
  env: {
    jest: true,
    jasmine: true,
    browser: true
  },
  settings: {
    'import/resolver': {
      'babel-module': {},
      node: {
        paths: ['src']
      }
    }
  },
  rules: {
    'func-names': 0,
    'react/jsx-handler-names': 0,
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 2,
    'react/require-default-props': 0,
    'linebreak-style': 0,
    'react/prop-types': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'jsx-a11y/label-has-for': 0,
    'react/no-danger': 0,
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.test.js', '**/*.spec.js', '**/*/setupTests.js'] }
    ],
    'import/prefer-default-export': 0,
    'no-use-before-define': 0,
    radix: 0,
    'no-shadow': 0,
    'import/no-dynamic-require': 0,
    'global-require': 0,
    'react/no-array-index-key': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/no-static-element-interactions': 0,
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
