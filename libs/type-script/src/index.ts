import tseslint from "typescript-eslint";
import globals from "globals";
import tseslintConfig from './config/tseslint-config.js';
import stylisticConfig from './config/stylistic-config.js';
import tseslintStylisticConfig from './config/tseslint-stylistic-config.js';
import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;

const baseConfig = tseslint.config({
    ignores: ["polyfills.ts", "jest.config.ts", "dist/**", "node_modules/**"],
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
        parserOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            project: ["tsconfig.?*.json"],
        },
    },
});

const modificationConfig = tseslint.config(
    {
        files: ["cypress.config.ts", "cypress.**.config.ts"],
        rules: {
            "no-console": "off",
        },
    },
    {
        files: ["*.po.ts"],
        rules: {
            "@typescript-eslint/explicit-function-return-type": "off",
        },
    },
    {
        files: ["*.spec.ts", "*.spec.tsx"],
        rules: {
            "@typescript-eslint/no-magic-numbers": "off",
            "max-lines": "off",
        },
    },
    {
        files: ["*.spec.ts", "*.spec.tsx", "**/__mocks__/**/*.ts", "**/__mocks__/**/*.tsx"],
        rules: {
            "@typescript-eslint/no-empty-function": "off",
        },
    }
);

const combinedConfig = tseslint.config(
    ...baseConfig,
    ...tseslintConfig,
    ...tseslintStylisticConfig,
    ...stylisticConfig,
    ...modificationConfig,
);

export default combinedConfig as Array<FlatConfig>;
