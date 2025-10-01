import stylistic from '@stylistic/eslint-plugin';
import type { Linter } from 'eslint';

const stylisticRecommendedConfig: Linter.Config = {
    name: 'team23/type-script/stylistic/recommended',
    ...stylistic.configs.customize({
        indent: 4,
        semi: true,
    }),
};

const stylisticModificationConfig: Linter.Config = {
    name: 'team23/type-script/stylistic/modification',
    rules: {
        // may cause performance issues with large codebase
        '@stylistic/indent': 'off',
        '@stylistic/padded-blocks': 'off',
        '@stylistic/multiline-ternary': ['error', 'always-multiline'],
        '@stylistic/template-curly-spacing': ['error', 'always'],
        '@stylistic/arrow-parens': ['error', 'as-needed'],
        '@stylistic/brace-style': ['error', '1tbs', { allowSingleLine: true }],
        '@stylistic/quotes': ['error', 'single'],
        '@stylistic/space-infix-ops': ['error', { int32Hint: true }],
        '@stylistic/space-before-function-paren': [
            'error',
            {
                anonymous: 'never',
                named: 'never',
                asyncArrow: 'always',
            },
        ],
    },
};

const maxLength = 140;
const stylisticOptionalConfig: Linter.Config = {
    name: 'team23/type-script/stylistic/optional',
    rules: {
        '@stylistic/line-comment-position': ['error'],
        '@stylistic/array-bracket-newline': ['error', 'consistent'],
        '@stylistic/array-bracket-spacing': 'error',
        '@stylistic/function-call-argument-newline': ['error', 'consistent'],
        '@stylistic/function-call-spacing': 'error',
        '@stylistic/function-paren-newline': ['off'],
        '@stylistic/generator-star-spacing': 'error',
        '@stylistic/implicit-arrow-linebreak': 'error',
        '@stylistic/linebreak-style': 'error',
        '@stylistic/lines-around-comment': 'error',
        '@stylistic/max-len': [
            'error',
            maxLength,
        ],
        '@stylistic/multiline-comment-style': 'off',
        '@stylistic/newline-per-chained-call': 'error',
        '@stylistic/no-confusing-arrow': 'error',
        '@stylistic/no-extra-semi': 'error',
        '@stylistic/object-curly-newline': 'error',
        '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
        '@stylistic/padding-line-between-statements': 'error',
        '@stylistic/semi-style': 'error',
        '@stylistic/switch-colon-spacing': 'error',
        '@stylistic/wrap-regex': 'error',
    },
};

export default [
    stylisticRecommendedConfig,
    stylisticModificationConfig,
    stylisticOptionalConfig,
];
