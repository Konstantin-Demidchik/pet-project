module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        'standard-with-typescript',
        'plugin:react/recommended',
        'plugin:i18next/recommended'
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        project: './tsconfig.json'
    },
    plugins: [
        'react',
        'i18next'
    ],
    rules: {
        '@typescript-eslint/indent': [2, 4],
        indent: [2, 4],
        '@typescript-eslint/prefer-nullish-coalescing': 'off',
        '@typescript-eslint/strict-boolean-expressions': 'off',
        '@typescript-eslint/explicit-function-return-type': 1,
        'react/react-in-jsx-scope': 'off',
        '@typescript-eslint/no-unused-vars': 'warn',
        '@typescript-eslint/semi': 'off',
        '@typescript-eslint/no-misused-promises': 'off',
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/naming-convention': 'off',
        'i18next/no-literal-string': ['error', { markupOnly: true, ignoreAttribute: ['data-testid', 'to'] }],
        '@typescript-eslint/consistent-type-imports': 'off'
    },
    globals: {
        __IS_DEV__: true
    },
    overrides: {
        files: ['**/src/**/*.test.{ts, tsx}'],
        rules: {
            'i18next/no-literal-string': 'off'
        }
    }
}
