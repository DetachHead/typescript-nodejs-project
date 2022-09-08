/** @type {import('eslint').Linter.Config} */
const config = {
    extends: ['@detachhead/eslint-config'],
    overrides: [
        {
            files: ['tests/**/*.ts'],
            parserOptions: {
                ecmaVersion: 'latest',
                project: './tests/tsconfig.json',
            },
        },
    ],
}

module.exports = config
