import type { InitialOptionsTsJest } from 'ts-jest/dist/types'

const config: InitialOptionsTsJest = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    testRegex: '(/tests/.*|(\\.|/)(test|spec))[^d]\\.ts$',
    globals: {
        'ts-jest': {
            tsconfig: './tests/tsconfig.json',
            babelConfig: {
                presets: ['power-assert'],
            },
        },
    },
}
export default config
