import stylistic, { RuleOptions } from '@stylistic/eslint-plugin';
import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;
import { UnprefixedRuleOptions } from '@stylistic/eslint-plugin/dist/dts/rule-options';

const stylisticRecommendedConfig = {
    name: 'team23/type-script/stylistic/recommended',
    ...stylistic.configs.customize({
        indent: 4,
        semi: true,
    }) as FlatConfig,
};

const stylisticModificationConfig: FlatConfig = {
    name: 'team23/type-script/stylistic/modification',
    rules: {
        // may cause performance issues with large codebase
        "@stylistic/indent": "off",
        "@stylistic/multiline-ternary": ["error", "always-multiline"],
        /*"@stylistic/quotes": [
            "error",
            {
                "avoidEscape": true,
            },
        ],*/
        "@stylistic/space-infix-ops": ["error", { int32Hint: true }],
    },
};

const stylisticOptionalConfig: FlatConfig = {
    name: 'team23/type-script/stylistic/optional',
    rules: {
        "@stylistic/line-comment-position": ["error"],
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
};

export default [
    stylisticRecommendedConfig,
    stylisticModificationConfig,
    stylisticOptionalConfig
];
