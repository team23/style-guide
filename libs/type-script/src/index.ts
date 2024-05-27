import tseslint from 'typescript-eslint';
import globals from "globals";
import stylistic from '@stylistic/eslint-plugin'

const strictTypeCheckedOverwrites = tseslint.config(
    {
        rules: {
            "@typescript-eslint/no-floating-promises": "off",
            "@typescript-eslint/no-namespace": "off",
            "@typescript-eslint/no-unused-vars": [
                "error",
                {
                    args: "after-used",
                    ignoreRestSiblings: true,
                    argsIgnorePattern: "^_",
                },
            ],
            "@typescript-eslint/triple-slash-reference": [
                "error",
                {
                    path: "always",
                    types: "prefer-import",
                    lib: "always",
                },
            ],
            "@typescript-eslint/no-extraneous-class": "off",
        },
    }
);

const stylisticTypeCheckedOverwrites = tseslint.config(
    {
        rules: {
            "@typescript-eslint/array-type": [
                "error",
                {
                    default: "generic",
                },
            ],

            "@typescript-eslint/dot-notation": [
                "error",
                {
                    allowIndexSignaturePropertyAccess: true,
                },
            ],
            "@typescript-eslint/no-inferrable-types": [
                "error",
                {
                    ignoreParameters: true,
                },
            ],
        },
    }
);

const stylisticOverwrites = tseslint.config({
    rules: {
        // may cause performance issues with large codebase
        "@stylistic/indent": "off",
        "@stylistic/multiline-ternary": ["error", "always-multiline"],
        "@stylistic/quotes": [
            "error",
            {
                avoidEscape: true,
            },
        ],
        "@stylistic/space-infix-ops": ["error", { int32Hint: true }],
    },
});

const stylisticOptional = tseslint.config({
    rules: {
        "@line-comment-position": "error",
        "@stylistic/array-bracket-newline": "error",
        "@stylistic/array-bracket-spacing": "error",
        "@stylistic/function-paren-newline": "error",
        "@stylistic/generator-star-spacing": "error",
        "@stylistic/implicit-arrow-linebreak": "error",
        "@stylistic/linebreak-style": "error",
        "@stylistic/lines-around-comment": "error",
        "@stylistic/max-len": "error",
        "@stylistic/multiline-comment-style": "error",
        "@stylistic/newline-per-chained-call": "error",
        "@stylistic/no-confusing-arrow": "error",
        "@stylistic/no-extra-semi": "error",
        "@stylistic/object-curly-newline": "error",
        "@stylistic/object-property-newline": "error",
        "@stylistic/padding-line-between-statements": "error",
        "@stylistic/semi-style": "error",
        "@stylistic/switch-colon-spacing": "error",
        "@stylistic/func-call-spacing": "error",
        "@stylistic/wrap-regex": "error",
    },
});

const notConfigRelatedOrContained = tseslint.config({
    rules: {
        "@typescript-eslint/explicit-function-return-type": [
            "error",
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: false,
            },
        ],
        "@typescript-eslint/explicit-member-accessibility": [
            "error",
            {
                accessibility: "explicit",
                overrides: {
                    constructors: "no-public",
                },
            },
        ],
        "@typescript-eslint/member-ordering": "error",
        "@typescript-eslint/naming-convention": [
            "error",
            {
                selector: "default",
                format: ["camelCase", "UPPER_CASE", "snake_case", "PascalCase"],
                leadingUnderscore: "allow",
                filter: {
                    regex: "^(O_o)$",
                    match: false,
                },
            },
            {
                selector: "variable",
                types: ["boolean"],
                format: ["PascalCase"],
                prefix: ["is", "should", "has", "can", "will", "are"],
            },
            {
                selector: "enumMember",
                format: ["PascalCase"],
            },
            {
                selector: "typeLike",
                format: ["PascalCase"],
            },
            {
                selector: "memberLike",
                modifiers: ["private"],
                format: ["camelCase"],
                leadingUnderscore: "require",
            },
            {
                selector: "memberLike",
                modifiers: ["protected"],
                format: ["camelCase"],
                leadingUnderscore: "require",
            },
        ],
        "no-magic-numbers": "off",
        "@typescript-eslint/no-magic-numbers": [
            "error",
            {
                ignoreDefaultValues: true,
                detectObjects: false,
                ignore: [-1, 1, 0],
                ignoreReadonlyClassProperties: true,
                ignoreEnums: true,
            },
        ],
        "@typescript-eslint/no-require-imports": "error",
        "no-shadow": "off",
        "@typescript-eslint/no-shadow": [
            "error",
            {
                hoist: "all",
            },
        ],
        "no-unused-expression": "off",
        "@typescript-eslint/no-unused-expressions": [
            "error",
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        "@typescript-eslint/prefer-readonly": "error",
        "@typescript-eslint/promise-function-async": "error",
        "@typescript-eslint/typedef": "error",

        "@typescript-eslint/consistent-type-imports": "error",
        "@typescript-eslint/consistent-type-exports": "error",
        "default-param-last": "off",
        "@typescript-eslint/default-param-last": "error",
        "@typescript-eslint/no-unnecessary-qualifier": "error",
        "init-declarations": "off",
        "@typescript-eslint/init-declarations": "error",
        "@typescript-eslint/no-import-type-side-effects": "error",
        "no-loop-func": "off",
        "@typescript-eslint/no-loop-func": "error",
        "@typescript-eslint/no-unsafe-unary-minus": "error",
        "no-use-before-define": "off",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-useless-empty-export": "error",
        "@typescript-eslint/prefer-enum-initializers": "error",
        "@typescript-eslint/prefer-find": "error",
        "@typescript-eslint/prefer-regexp-exec": "error",
        "@typescript-eslint/require-array-sort-compare": "error",
        "return-await": "off",
        "@typescript-eslint/return-await": "error",
        "@typescript-eslint/switch-exhaustiveness-check": "error",
    },
});

const tseslintConfig = tseslint.config(
    {
        ignores: [
            "polyfills.ts",
            "jest.config.ts",
            "dist/**",
            "node_modules/**",
            "*.min.js"
        ],
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
    },
    ...tseslint.configs.strictTypeChecked,
    ...strictTypeCheckedOverwrites,
    ...tseslint.configs.stylisticTypeChecked,
    ...stylisticTypeCheckedOverwrites,
    ...stylisticOverwrites,
    ...stylisticOptional,
    ...notConfigRelatedOrContained,
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
);

const stylisticConfig = stylistic.configs.customize({
    indent: 4,
    semi: true,
});

export default [
    stylisticConfig,
    tseslintConfig,
]
