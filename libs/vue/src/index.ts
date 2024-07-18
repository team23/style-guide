import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;
import globals from "globals";
import vueConfig from './config/vue-config.js';
import vueParser from 'vue-eslint-parser';
import tseslint from 'typescript-eslint';

const basicConfig: FlatConfig = {
    name: 'team23/vue/base',
    ignores: [
        'polyfills.ts',
        'jest.config.ts',
        'dist/**',
        'node_modules/**',
    ],
    languageOptions: {
        parser: vueParser,
        parserOptions: {
            extraFileExtensions: ['.vue'],
            parser: {
                js: 'espree',
                jsx: 'espree',
                ts: tseslint.parser,
                tsx: tseslint.parser,
            },
            sourceType: 'module',
            ecmaFeatures: {
                jsx: true,
            },
            project: ['tsconfig.?*.json'],
        },
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
    },
}

const fileBasedModificationConfig = tseslint.config({
    name: 'team23/type-script/core/file-based/vite',
    files: [
        'vite.config.ts',
        'vitest.config.ts',
    ],
    rules: {
        'import/no-default-export': 'off',
    },
});

const combinedConfig = tseslint.config({
    files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts', '**/*.vue'],
    extends: [
        basicConfig,
        ...vueConfig,
    ],
    ...fileBasedModificationConfig,
});

export default combinedConfig as Array<FlatConfig>;
