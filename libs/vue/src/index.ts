import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;

import pluginVueA11y from 'eslint-plugin-vuejs-accessibility';
import globals from "globals";
import vueConfig from './config/vue-config.js';
import team23Standard from '@team23/eslint-config-team23-standard';
import team23TypeScript from '@team23/eslint-config-team23-ts';

const basicConfig: FlatConfig = {
    ignores: [
        "polyfills.ts",
        "jest.config.ts",
        "dist/**",
        "node_modules/**",
        "*.min.js",
    ],
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
    },
}

const modificationConfig: FlatConfig = {
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
    ...team23Standard,
    ...team23TypeScript,
    ...vueConfig,
    ...pluginVueA11y.configs["flat/recommended"] as Array<FlatConfig>,
    modificationConfig,
];

export default combinedConfig;
