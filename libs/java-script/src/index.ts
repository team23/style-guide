import globals from 'globals';
import stylisticConfig from './config/stylistic-config.js';
import jsdocConfig from './config/jsdoc-config.js';
import jsConfig from './config/js-config.js';
import tseslint from 'typescript-eslint';
import { Linter } from 'eslint';

interface ConfigOptions {
    /**
     * File glob patterns indicating the files that the configuration should be applied to.
     * @default ['**\/*.js', '**\/*.mjs']
     */
    files?: Array<string>,
}

const setupConfig: Linter.Config = {
    name: 'team23/java-script/setup',
    ignores: ['dist/', 'node_modules/', '*.min.js'],
    languageOptions: {
        sourceType: 'module',
        ecmaVersion: 2022,
        globals: {
            ...globals.browser,
            ...globals.es2021,
            ...globals.node,
        },
        parserOptions: {
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
            ecmaVersion: 2022,
        },
    },
    linterOptions: {
        reportUnusedDisableDirectives: true,
    }
};

function createJSEslintConfig(options?: ConfigOptions): Array<Linter.Config> {
    const {
        files = ['**/*.js', '**/*.mjs'],
    } = options || {};

    return tseslint.config(
        setupConfig,
        {
            files,
            extends: [
                ...jsConfig,
                ...stylisticConfig,
                ...jsdocConfig,
            ],
        },
    ) as Array<Linter.Config>;
}

export {
    type ConfigOptions,
    createJSEslintConfig,
}
