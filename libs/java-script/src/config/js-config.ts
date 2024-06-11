import { ESLintRules } from "eslint/rules";
import { Linter } from "eslint";
import FlatConfig = Linter.FlatConfig;
import js from '@eslint/js';

const jsRecommendedConfig: FlatConfig<ESLintRules> = {
    name: 'team23/java-script/core/recommended',
    ...js.configs.recommended
};

const jsOptionalConfig: FlatConfig<ESLintRules> = {
    name: 'team23/java-script/core/optional',
    rules: {
        "arrow-body-style": "error",
        complexity: ["error", 10],
        curly: "error",
        "default-case": "error",
        eqeqeq: [2, "allow-null"],
        "guard-for-in": "error",
        "id-denylist": "error",
        "id-match": "error",
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
        "no-duplicate-imports": "error",
        "no-eval": "error",
        "no-extra-bind": "error",
        "no-invalid-this": "off",
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
        "no-template-curly-in-string": "error",
        "no-throw-literal": "error",
        "no-undef-init": "error",
        "no-underscore-dangle": "off",
        "no-unneeded-ternary": "error",
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
        "prefer-const": "error",
        "prefer-object-spread": "error",
        "prefer-template": "error",
        radix: "error",
        yoda: "error",
    },
};

export default [
    jsRecommendedConfig,
    jsOptionalConfig
];
