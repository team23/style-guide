import js from '@eslint/js';
import { Linter } from 'eslint';
// @ts-expect-error no typings
import importPlugin from 'eslint-plugin-import';
import jsdoc from 'eslint-plugin-jsdoc';
import FlatConfig = Linter.FlatConfig;
import stylisticJs from '@stylistic/eslint-plugin-js'
import globals from "globals";
import { ESLintRules } from 'eslint/rules';

const config: Array<FlatConfig<ESLintRules>> = [
    js.configs.recommended,
    {
        plugins: {
            "@stylistic/js": stylisticJs,
            import: importPlugin,
            jsdoc,
        },
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
        // support for non flatConfig plugins: https://github.com/import-js/eslint-plugin-import/issues/2556
        settings: {
            "import/parsers": {
                espree: [".js", ".cjs", ".mjs", ".jsx"],
            },
        },
        rules: {
            "@stylistic/js/array-bracket-spacing": ["error", "never"],
            "@stylistic/js/arrow-parens": ["error", "as-needed"],
            "@stylistic/js/brace-style": ["error", "1tbs", { allowSingleLine: true }],
            "@stylistic/js/comma-dangle": ["error", "always-multiline"],
            "@stylistic/js/computed-property-spacing": ["error", "never"],
            "@stylistic/js/eol-last": "error",
            "@stylistic/js/max-len": [
                "error",
                {
                    ignorePattern: "^import [^,]+ from |^export | implements ",
                    code: 140,
                },
            ],
            "@stylistic/js/no-multi-spaces": "error",
            "@stylistic/js/no-multiple-empty-lines": [
                "error",
                {
                    max: 2,
                },
            ],
            "@stylistic/js/no-trailing-spaces": "error",
            "@stylistic/js/no-whitespace-before-property": "error",
            "@stylistic/js/object-curly-spacing": ["error", "always"],
            "@stylistic/js/padding-line-between-statements": [
                2,
                {
                    blankLine: "always",
                    prev: "directive",
                    next: "*",
                },
                {
                    blankLine: "any",
                    prev: "directive",
                    next: "directive",
                },
                {
                    blankLine: "always",
                    prev: "import",
                    next: "*",
                },
                {
                    blankLine: "any",
                    prev: "import",
                    next: "import",
                },
                {
                    blankLine: "always",
                    prev: "*",
                    next: ["const", "let", "var", "export"],
                },
                {
                    blankLine: "always",
                    prev: ["const", "let", "var", "export"],
                    next: "*",
                },
                {
                    blankLine: "any",
                    prev: ["const", "let", "var", "export"],
                    next: ["const", "let", "var", "export"],
                },
                {
                    blankLine: "always",
                    prev: "*",
                    next: ["if", "class", "for", "do", "while", "switch", "try"],
                },
                {
                    blankLine: "always",
                    prev: ["if", "class", "for", "do", "while", "switch", "try"],
                    next: "*",
                },
                {
                    blankLine: "always",
                    prev: "*",
                    next: "return",
                },
            ],
            "@stylistic/js/quote-props": ["error", "as-needed"],
            "@stylistic/js/quotes": ["error", "single"],
            "@stylistic/js/semi": ["error", "always"],
            "@stylistic/js/space-before-function-paren": [
                "error",
                {
                    anonymous: "never",
                    named: "never",
                    asyncArrow: "always",
                },
            ],
            "@stylistic/js/space-in-parens": ["error", "never"],
            "@stylistic/js/template-curly-spacing": ["error", "always"],
            "arrow-body-style": "error",
            "class-methods-use-this": "off",
            complexity: ["error", 10],
            "consistent-return": "off",
            "constructor-super": "error",
            curly: "error",
            "default-case": "error",
            eqeqeq: [2, "allow-null"],
            "guard-for-in": "error",
            "id-blacklist": "error",
            "id-match": "error",
            "import/no-default-export": "error",
            "import/no-deprecated": "error",
            "import/no-extraneous-dependencies": "off",
            "import/no-internal-modules": "off",
            "import/no-unassigned-import": "off",
            "import/order": "off",
            "jsdoc/check-alignment": "error",
            "jsdoc/check-indentation": "error",
            "jsdoc/no-types": "error",
            "jsdoc/tag-lines": [
                "error",
                "any",
                {
                    startLines: 1,
                },
            ],
            // @ts-expect-error eslint rule provides wrong typing
            "max-classes-per-file": ["error", { ignoreExpressions: true }],
            "max-lines": [
                "error",
                {
                    max: 400,
                    skipComments: true,
                    skipBlankLines: true,
                },
            ],
            "new-parens": "error",
            "newline-per-chained-call": "error",
            "no-bitwise": "error",
            "no-caller": "error",
            "no-cond-assign": "error",
            "no-console": [
                "error",
                {
                    allow: [
                        "warn",
                        "dir",
                        "timeLog",
                        "assert",
                        "clear",
                        "count",
                        "countReset",
                        "group",
                        "groupEnd",
                        "table",
                        "dirxml",
                        "error",
                        "groupCollapsed",
                        "Console",
                        "profile",
                        "profileEnd",
                        "timeStamp",
                    ],
                },
            ],
            "no-debugger": "error",
            "no-delete-var": "error",
            "no-duplicate-case": "error",
            "no-duplicate-imports": "error",
            "no-empty": "error",
            "no-eval": "error",
            "no-extra-bind": "error",
            "no-extra-boolean-cast": "error",
            "no-fallthrough": "error",
            "no-invalid-this": "off",
            "no-irregular-whitespace": "error",
            "no-magic-numbers": [
                "error",
                {
                    detectObjects: false,
                    ignore: [-1, 1, 0],
                    ignoreArrayIndexes: false,
                    // @ts-expect-error eslint rule provides wrong typing
                    ignoreDefaultValues: true,
                },
            ],
            "no-new-func": "error",
            "no-new-wrappers": "error",
            "no-null/no-null": "off",
            "no-redeclare": "off",
            "no-return-await": "error",
            "no-sequences": "error",
            "no-shadow": [
                "error",
                {
                    hoist: "all",
                },
            ],
            "no-sparse-arrays": "error",
            "no-template-curly-in-string": "error",
            "no-throw-literal": "error",
            "no-undef-init": "error",
            "no-underscore-dangle": "off",
            "no-unneeded-ternary": "error",
            "no-unsafe-finally": "error",
            "no-unused-labels": "error",
            "no-use-before-define": "off",
            "no-var": "error",
            "no-void": "error",
            "object-shorthand": ["error", "properties"],
            "one-var": ["error", "never"],
            "prefer-arrow-callback": [
                "error",
                {
                    allowNamedFunctions: true,
                },
            ],
            "prefer-arrow/prefer-arrow-functions": [
                "error",
                {
                    allowStandaloneDeclarations: true,
                },
            ],
            "prefer-const": "error",
            "prefer-object-spread": "error",
            "prefer-template": "error",
            radix: "error",
            "use-isnan": "error",
            "valid-typeof": "error",
            yoda: "error",
        },
    },
];

export default config;
