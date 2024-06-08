module.exports = {
  root: true,
  env: { browser: true, es2021: true },
  extends: [
    'airbnb',
    'plugin:import/recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
      tsx: true,
    },
    ecmaVersion: 2021,
    sourceType: 'module',
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': [".js", ".jsx",  '.ts', '.tsx'],
    },
    'import/resolver': {
      node: {
        extensions: [".js", ".jsx",  '.ts', '.tsx'],
        caseSensitive: false,
        moduleDirectory: ['src', 'node_modules'],
      },
    },
  },
  plugins: ["eslint-plugin-import", 'fp', 'functional', 'prefer-arrow', 'react', '@typescript-eslint','react-refresh'],
  // 0: off, 1: warn, 2: error
  rules: {
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'max-lines': [2, 200],
    'arrow-body-style': [2, 'as-needed'],
    'prefer-arrow/prefer-arrow-functions': [
      2,
      {
        disallowPrototype: true,
        singleReturnOnly: false,
        classPropertiesAllowed: false,
      },
    ],
    'functional/immutable-data': 2,
    'functional/no-classes': 2,
    'functional/no-let': 2,
    'functional/no-this-expressions': 2,
    'functional/no-loop-statements': 2,
    'functional/prefer-property-signatures': 2,
    'fp/no-arguments': 2,
    'fp/no-delete': 2,
    'fp/no-get-set': 2,
    'fp/no-mutating-assign': 2,
    'fp/no-mutating-methods': 2,
    'fp/no-nil': 0,
    'fp/no-proxy': 2,
    'fp/no-rest-parameters': 1,
    'fp/no-throw': 'off',
    'fp/no-valueof-field': 2,
    'no-var': 2,
    'no-unused-vars': 0,
    '@typescript-eslint/no-unused-vars': 2,
    'react/jsx-closing-tag-location': 2,
    'react/jsx-curly-brace-presence': [2, { children: 'never' }],
    'react/jsx-curly-newline': 0,
    'react/jsx-filename-extension': [2, { extensions: ['.tsx'] }],
    'react/jsx-fragments': [2, 'syntax'],
    'react/jsx-one-expression-per-line': 1,
    'react/jsx-props-no-spreading': 0,
    'react/jsx-wrap-multilines': [2, { prop: 'ignore' }],
    'react-hooks/rules-of-hooks': 2,
    'react-hooks/exhaustive-deps': 1,
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/require-default-props': 0,
    'react/prop-types': 0,
    'import/prefer-default-export': 0,
    'import/extensions': 0,
    '@typescript-eslint/consistent-type-imports': 2,
    '@typescript-eslint/no-explicit-any': 2,
  },
}
