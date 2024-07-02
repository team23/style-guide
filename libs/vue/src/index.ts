import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;
import globals from "globals";
import vueConfig from './config/vue-config.js';
import vueParser from 'vue-eslint-parser';
import tseslint from 'typescript-eslint';

const basicConfig: FlatConfig = {
    name: 'team23/vue/base',
    ignores: [
        "polyfills.ts",
        "jest.config.ts",
        "dist/**",
    ],
    languageOptions: {
        parser: vueParser,
        parserOptions: {
            parser: tseslint.parser
        },
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
    },
}

const fileBasedModificationConfig: FlatConfig = {
    name: 'team23/type-script/core/file-based/vite',
    files: [
        'vite.config.ts',
        'vitest.config.ts',
    ],
    rules: {
        'import/no-default-export': 'off',
    },
};

const combinedConfig: Array<FlatConfig> = [
    basicConfig,
    ...vueConfig,
    fileBasedModificationConfig,
];

export default combinedConfig;
