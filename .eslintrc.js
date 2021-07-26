module.exports = {
    env: {
        node: true,
        es2021: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:eslint-plugin-expect-type/recommended',
        'prettier',
        'plugin:eslint-comments/recommended',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
        project: './tsconfig.json',
    },
    plugins: ['eslint-plugin-prefer-arrow', '@typescript-eslint', 'eslint-plugin-expect-type'],
    rules: {
        'linebreak-style': ['error', 'unix'],
        quotes: ['error', 'single', { avoidEscape: true }],
        semi: ['error', 'never'],
        'expect-type/expect': 'error',
        '@typescript-eslint/ban-types': 'off',
        'spaced-comment': 'error',
        '@typescript-eslint/no-throw-literal': 'error',
        'eslint-comments/no-unused-disable': 'error',
        'eslint-comments/require-description': 'error',
        eqeqeq: 'error',
        'prefer-arrow/prefer-arrow-functions': [
            'error',
            {
                classPropertiesAllowed: true,
            },
        ],
        '@typescript-eslint/no-invalid-this': 'error',
        'require-await': 'error',
        '@typescript-eslint/no-floating-promises': 'error',
        'no-return-await': 'error',
    },
}
