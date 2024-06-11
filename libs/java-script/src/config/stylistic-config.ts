import { ESLintRules } from "eslint/rules";
import { Linter } from "eslint";
import stylisticJs from "@stylistic/eslint-plugin-js";
import FlatConfig = Linter.FlatConfig;

const stylisticBaseConfig: FlatConfig = {
    name: 'team23/java-script/stylisticJs/recommended',
    plugins: {
        "@stylistic/js": stylisticJs,
    },
};

const stylisticRecommendedModificationConfig: FlatConfig = {
    name: 'team23/java-script/stylisticJs/recommended-modifications',
    rules: {
        "@stylistic/js/array-bracket-spacing": ["error", "never"],
        "@stylistic/js/arrow-parens": ["error", "as-needed"],
        "@stylistic/js/brace-style": ["error", "1tbs", { allowSingleLine: true }],
        "@stylistic/js/comma-dangle": ["error", "always-multiline"],
        "@stylistic/js/computed-property-spacing": ["error", "never"],
        "@stylistic/js/eol-last": "error",
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
    },
};

const stylisticOptionalConfig: FlatConfig<ESLintRules> = {
    name: 'team23/java-script/stylisticJs/optional',
    rules: {
        "@stylistic/js/array-bracket-newline": "error",
        "@stylistic/js/function-paren-newline": "error",
        "@stylistic/js/generator-star-spacing": "error",
        "@stylistic/js/implicit-arrow-linebreak": "error",
        "@stylistic/js/linebreak-style": "error",
        "@stylistic/js/lines-around-comment": "error",
        "@stylistic/js/max-len": [
            "error",
            {
                ignorePattern: "^import [^,]+ from |^export | implements ",
                code: 140,
            },
        ],
        "@stylistic/js/multiline-comment-style": "error",
        "@stylistic/js/newline-per-chained-call": "error",
        "@stylistic/js/no-confusing-arrow": "error",
        "@stylistic/js/no-extra-semi": "error",
        "@stylistic/js/object-curly-newline": "error",
        "@stylistic/js/object-property-newline": "error",
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
        "@stylistic/js/semi-style": "error",
        "@stylistic/js/switch-colon-spacing": "error",
        "@stylistic/js/wrap-regex": "error",
    },
};

export default [
    stylisticBaseConfig,
    stylisticRecommendedModificationConfig,
    stylisticOptionalConfig,
];
