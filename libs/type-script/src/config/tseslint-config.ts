import tseslint from 'typescript-eslint';
import type { Linter } from 'eslint';

// remove preconfigured base setup since we use our own.
const strictTypeCheckedConfigWithoutSetup = tseslint.configs.strictTypeChecked.filter(
    config => config.name !== 'typescript-eslint/base',
);

const strictTypeCheckedModificationConfig: Linter.Config = {
    name: 'team23/type-script/core/strict',
    rules: {
        '@typescript-eslint/no-floating-promises': 'off',
        '@typescript-eslint/no-namespace': 'off',
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                args: 'after-used',
                ignoreRestSiblings: true,
                argsIgnorePattern: '^_',
            },
        ],
        '@typescript-eslint/triple-slash-reference': [
            'error',
            {
                path: 'always',
                types: 'prefer-import',
                lib: 'always',
            },
        ],
        '@typescript-eslint/no-extraneous-class': 'off',
        '@typescript-eslint/restrict-template-expressions': 'off',
        '@typescript-eslint/no-confusing-void-expression': 'off',
        '@typescript-eslint/no-unsafe-enum-comparison': 'off',
        '@typescript-eslint/non-nullable-type-assertion-style': 'off',
        '@typescript-eslint/no-unnecessary-type-parameters': 'off',
    },
};

const optionalConfig: Linter.Config = {
    name: 'team23/type-script/core/optional',
    rules: {
        '@typescript-eslint/explicit-function-return-type': [
            'error',
            {
                allowExpressions: true,
                allowTypedFunctionExpressions: true,
                allowHigherOrderFunctions: true,
                allowDirectConstAssertionInArrowFunctions: true,
                allowConciseArrowFunctionExpressionsStartingWithVoid: false,
            },
        ],
        '@typescript-eslint/no-non-null-assertion': 'error',
        '@typescript-eslint/explicit-member-accessibility': [
            'error',
            {
                accessibility: 'explicit',
                overrides: {
                    constructors: 'no-public',
                },
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'default',
                format: ['camelCase', 'UPPER_CASE', 'snake_case', 'PascalCase'],
                leadingUnderscore: 'allow',
                filter: {
                    regex: '^(O_o)$',
                    match: false,
                },
            },
            {
                selector: 'variable',
                types: ['boolean'],
                format: ['PascalCase'],
                prefix: ['is', 'should', 'has', 'can', 'will', 'are'],
            },
            {
                selector: 'enumMember',
                format: ['PascalCase'],
            },
            {
                selector: 'typeLike',
                format: ['PascalCase'],
            },
            {
                selector: 'memberLike',
                modifiers: ['private'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
            {
                selector: 'memberLike',
                modifiers: ['protected'],
                format: ['camelCase'],
                leadingUnderscore: 'require',
            },
        ],
        'no-magic-numbers': 'off',
        '@typescript-eslint/no-magic-numbers': [
            'error',
            {
                ignoreDefaultValues: true,
                detectObjects: false,
                ignore: [-1, 1, 0],
                ignoreReadonlyClassProperties: true,
                ignoreEnums: true,
            },
        ],
        '@typescript-eslint/no-require-imports': 'error',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'no-unused-expression': 'off',
        '@typescript-eslint/no-unused-expressions': [
            'error',
            {
                allowShortCircuit: true,
                allowTernary: true,
            },
        ],
        '@typescript-eslint/prefer-readonly': 'error',
        '@typescript-eslint/promise-function-async': 'error',
        '@typescript-eslint/typedef': 'error',

        '@typescript-eslint/consistent-type-imports': 'error',
        '@typescript-eslint/consistent-type-exports': 'error',
        'default-param-last': 'off',
        '@typescript-eslint/default-param-last': 'error',
        '@typescript-eslint/no-unnecessary-qualifier': 'error',
        '@typescript-eslint/no-import-type-side-effects': 'error',
        'no-loop-func': 'off',
        '@typescript-eslint/no-loop-func': 'error',
        '@typescript-eslint/no-unsafe-unary-minus': 'error',
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': 'error',
        '@typescript-eslint/no-useless-empty-export': 'error',
        '@typescript-eslint/prefer-enum-initializers': 'error',
        '@typescript-eslint/prefer-find': 'error',
        '@typescript-eslint/prefer-regexp-exec': 'error',
        '@typescript-eslint/require-array-sort-compare': 'error',
        'return-await': 'off',
        '@typescript-eslint/return-await': 'error',
        '@typescript-eslint/switch-exhaustiveness-check': 'error',
    },
};

export default [
    ...strictTypeCheckedConfigWithoutSetup,
    strictTypeCheckedModificationConfig,
    optionalConfig,
];
