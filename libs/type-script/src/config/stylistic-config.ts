import stylistic from '@stylistic/eslint-plugin';
import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;

const stylisticRecommendedConfig: FlatConfig = {
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
        '@stylistic/indent': 'off',
        '@stylistic/padded-blocks': 'off',
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],
        '@stylistic/template-curly-spacing': ['error', 'always'],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/brace-style': ['error', '1tbs', { 'allowSingleLine': true }],

        /**
         *'@stylistic/quotes': [
         *    'error',
         *    {
         *        avoidEscape: true,
         *    },
         *],
         */

        '@stylistic/space-infix-ops': ['error', { int32Hint: true }],
    },
};

const stylisticOptionalConfig: FlatConfig = {
    name: 'team23/type-script/stylistic/optional',
    rules: {
        '@stylistic/line-comment-position': ['error'],
        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/array-bracket-spacing': 'error',
        '@stylistic/function-paren-newline': ['error', 'consistent'],
        '@stylistic/generator-star-spacing': 'error',
        '@stylistic/implicit-arrow-linebreak': 'error',
        '@stylistic/linebreak-style': 'error',
        '@stylistic/lines-around-comment': 'error',
        '@stylistic/max-len': [
            'error',
            140,
        ],
        '@stylistic/newline-per-chained-call': 'error',
        '@stylistic/no-confusing-arrow': 'error',
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/object-curly-newline': 'error',
        '@stylistic/object-property-newline': ['error', { 'allowAllPropertiesOnSameLine': true }],
        '@stylistic/padding-line-between-statements': 'error',
        '@stylistic/semi-style': 'error',
        '@stylistic/switch-colon-spacing': 'error',
        '@stylistic/func-call-spacing': 'error',
        '@stylistic/wrap-regex': 'error',
    },
};

export default [
    stylisticRecommendedConfig,
    stylisticModificationConfig,
    stylisticOptionalConfig,
];
