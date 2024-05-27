import js from "@eslint/js";
import { Linter } from "eslint";
import globals from "globals";
import { stylisticConfig, stylisticModificationConfig, stylisticOptionalConfig } from "./config/stylistic-config";
import { jsOptionalConfig } from "./config/js-config";
import { importConfig, importModificationConfig } from "./config/import-config";
import { jsdocConfig, jsdocModificationConfig } from "./config/jsdoc-config";
import FlatConfig = Linter.FlatConfig;

const globalConfig: FlatConfig = {
    ignores: ["dist/**", "node_modules/**", "*.min.js"],
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
        },
    },
};

export default [
    globalConfig,
    js.configs.recommended,
    jsOptionalConfig,
    stylisticConfig,
    stylisticModificationConfig,
    stylisticOptionalConfig,
    importConfig,
    importModificationConfig,
    jsdocConfig,
    jsdocModificationConfig,
];
