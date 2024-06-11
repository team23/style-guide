import { Linter } from "eslint";
import globals from "globals";
import stylisticConfig from "./config/stylistic-config.js";
import jsdocConfig from "./config/jsdoc-config.js";
import FlatConfig = Linter.FlatConfig;
import jsConfig from './config/js-config.js';
import importConfig from './config/import-config';

const baseConfig: FlatConfig = {
    name: 'team23/java-script/base',
    ignores: ["dist/", "node_modules/", "*.min.js"],
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
    },
};

const combinedConfig: Array<FlatConfig> = [
    ...baseConfig,
    ...jsConfig,
    ...stylisticConfig,
    ...importConfig,
    ...jsdocConfig,
];

export default combinedConfig;
