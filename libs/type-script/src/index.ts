import tseslint from "typescript-eslint";
import globals from "globals";
import stylisticConfig from "./config/stylistic-config";
import tseslintConfig from "./config/tseslint-config";
import tseslintStylisticConfig from "./config/tseslint-stylistic-config";

const globalConfig = tseslint.config({
    ignores: ["polyfills.ts", "jest.config.ts", "dist/**", "node_modules/**", "*.min.js"],
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

export default [
    ...globalConfig,
    ...tseslintConfig,
    ...tseslintStylisticConfig,
    ...stylisticConfig,
    ...modificationConfig,
];
