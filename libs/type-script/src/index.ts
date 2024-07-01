import tseslint from 'typescript-eslint';
import globals from 'globals';
import tseslintConfig from './config/tseslint-config.js';
import stylisticConfig from './config/stylistic-config.js';
import tseslintStylisticConfig from './config/tseslint-stylistic-config.js';
import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;

const baseConfig = tseslint.config({
    name: 'team23/type-script/core/base',
    ignores: [
        'polyfills.ts',
        'jest.config.ts',
        'dist/**',
        'node_modules/**',
    ],
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
        parserOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            project: ['tsconfig.?*.json'],
        },
    },
});

const fileBasedModificationConfig = tseslint.config(
    {
        name: 'team23/type-script/core/file-based/cypress',
        files: ['cypress.config.ts', 'cypress.**.config.ts'],
        rules: {
            'no-console': 'off',
        },
    },
    {
        name: 'team23/type-script/core/file-based/page-object',
        files: ['*.po.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
    {
        name: 'team23/type-script/core/file-based/mocks',
        files: ['*.spec.ts', '*.spec.tsx', '**/__mocks__/**/*.ts', '**/__mocks__/**/*.tsx'],
        rules: {
            '@typescript-eslint/no-magic-numbers': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            'max-lines': 'off',
        },
    },
);

const combinedConfig = tseslint.config(
    ...baseConfig,
    ...tseslintConfig,
    ...tseslintStylisticConfig,
    ...stylisticConfig,
    ...fileBasedModificationConfig,
);

export default combinedConfig as Array<FlatConfig>;
