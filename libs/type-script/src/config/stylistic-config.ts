import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";

const stylisticRecommendedConfig = stylistic.configs.customize({
    indent: 4,
    semi: true,
});

const stylisticModificationConfig = tseslint.config({
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

const stylisticOptionalConfig = tseslint.config({
    rules: {
        "@stylistic/line-comment-position": "error",
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

export default [
    stylisticRecommendedConfig,
    ...stylisticModificationConfig,
    ...stylisticOptionalConfig
];
