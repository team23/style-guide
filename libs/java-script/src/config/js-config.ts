import type { Linter } from 'eslint';
import js from '@eslint/js';
import type { ESLintRules } from 'eslint/rules';

const jsRecommendedConfig: Linter.Config<ESLintRules> = {
    name: 'team23/java-script/core/recommended',
    ...js.configs.recommended,
};

const complexity = 10;
const eqeqeq = 2;
const jsOptionalConfig: Linter.Config<ESLintRules> = {
    name: 'team23/java-script/core/optional',
    rules: {
        'accessor-pairs': 'error',
        'arrow-body-style': 'error',
        'camelcase': 'error',
        'capitalized-comments': 'error',
        'complexity': ['error', complexity],
        'curly': 'error',
        'default-case': 'error',
        'default-case-last': 'error',
        'default-param-last': 'error',
        'eqeqeq': [eqeqeq, 'allow-null'],
        'guard-for-in': 'error',
        'id-denylist': 'error',
        'id-match': 'error',
        // @ts-expect-error wrong typing
        'max-classes-per-file': ['error', { ignoreExpressions: true }],
        'max-lines': [
            'error',
            {
                max: 400,
                skipComments: true,
                skipBlankLines: true,
            },
        ],
        'new-cap': 'error',
        'no-alert': 'error',
        'no-array-constructor': 'error',
        'no-await-in-loop': 'error',
        'no-bitwise': 'error',
        'no-caller': 'error',
        'no-console': [
            'error',
            {
                allow: [
                    'warn',
                    'dir',
                    'timeLog',
                    'assert',
                    'clear',
                    'count',
                    'countReset',
                    'group',
                    'groupEnd',
                    'table',
                    'dirxml',
                    'error',
                    'groupCollapsed',
                    'Console',
                    'profile',
                    'profileEnd',
                    'timeStamp',
                ],
            },
        ],
        'no-constructor-return': 'error',
        'no-duplicate-imports': 'error',
        'no-else-return': 'error',
        'no-empty-function': 'error',
        'no-empty-static-block': 'error',
        'no-eval': 'error',
        'no-extend-native': 'error',
        'no-extra-bind': 'error',
        'no-implicit-coercion': 'error',
        'no-implied-eval': 'error',
        'no-invalid-this': 'off',
        'no-iterator': 'error',
        'no-labels': 'error',
        'no-lonely-if': 'error',
        'no-loop-func': 'error',
        'no-magic-numbers': [
            'error',
            {
                detectObjects: false,
                ignore: [-1, 1, 0],
                ignoreArrayIndexes: false,
                // @ts-expect-error wrong typing
                ignoreDefaultValues: true,
            },
        ],
        'no-multi-assign': 'error',
        'no-multi-str': 'error',
        'no-nested-ternary': 'error',
        'no-new': 'error',
        'no-new-func': 'error',
        'no-new-wrappers': 'error',
        'no-null/no-null': 'off',
        'no-object-constructor': 'error',
        'no-octal-escape': 'error',
        'no-param-reassign': 'error',
        'no-proto': 'error',
        'no-redeclare': 'off',
        'no-return-assign': 'error',
        'no-script-url': 'error',
        'no-self-compare': 'error',
        'no-sequences': 'error',
        'no-shadow': [
            'error',
            {
                hoist: 'all',
            },
        ],
        'no-template-curly-in-string': 'error',
        'no-throw-literal': 'error',
        'no-undef-init': 'error',
        'no-underscore-dangle': 'off',
        'no-unneeded-ternary': 'error',
        'no-use-before-define': 'off',
        'no-useless-computed-key': 'error',
        'no-useless-concat': 'error',
        'no-useless-constructor': 'error',
        'no-useless-rename': 'error',
        'no-useless-return': 'error',
        'no-var': 'error',
        'no-void': 'error',
        'object-shorthand': ['error', 'properties'],
        'one-var': ['error', 'never'],
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true,
            },
        ],
        'prefer-const': 'error',
        'prefer-object-spread': 'error',
        'prefer-spread': 'error',
        'prefer-template': 'error',
        'radix': 'error',
        'sort-imports': 'error',
        'sort-keys': 'error',
        'sort-vars': 'error',
        'symbol-description': 'error',
        'yoda': 'error',
    },
};

export default [
    jsRecommendedConfig,
    jsOptionalConfig,
];
