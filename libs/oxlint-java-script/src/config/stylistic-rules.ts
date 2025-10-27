/**
 * Stylistic rules configuration for oxlint
 * Note: Oxlint focuses on correctness and performance issues.
 * Many stylistic rules are handled by formatters like Prettier or Biome.
 * This file maintains the stylistic preferences from the original ESLint config.
 */
import type { OxlintRules } from '../types';

const maxLength = 140;

export const stylisticRulesConfig: OxlintRules = {
    // Note: Oxlint may not support all stylistic rules as it focuses on correctness.
    // Consider using a formatter like Prettier or Biome for stylistic consistency.
    // The following rules are included for reference and compatibility where supported.

    // Array formatting
    'array-bracket-newline': ['error', 'consistent'],
    'array-bracket-spacing': 'error',
    'array-element-newline': ['error', 'consistent'],

    // Arrow function formatting
    'arrow-parens': ['error', 'as-needed'],
    'arrow-spacing': 'error',

    // Block formatting
    'block-spacing': 'error',
    'brace-style': ['error', '1tbs', { allowSingleLine: true }],

    // Comma formatting
    'comma-dangle': ['error', 'always-multiline'],
    'comma-spacing': 'error',
    'comma-style': 'error',

    // Property and spacing
    'computed-property-spacing': ['error', 'never'],
    'eol-last': 'error',

    // Function formatting
    'function-call-argument-newline': ['error', 'consistent'],
    'function-call-spacing': 'error',
    'generator-star-spacing': 'error',

    // Arrow linebreak
    'implicit-arrow-linebreak': 'error',

    // JSX
    'jsx-quotes': 'error',

    // Spacing
    'key-spacing': 'error',
    'keyword-spacing': 'error',

    // Comments
    'line-comment-position': 'error',
    'linebreak-style': 'error',
    'lines-around-comment': 'error',

    // Line length
    'max-len': ['error', maxLength],
    'max-statements-per-line': 'error',

    // Ternary
    'multiline-ternary': ['error', 'always-multiline'],

    // Parens and chaining
    'new-parens': 'error',
    'newline-per-chained-call': 'error',

    // Arrow confusion
    'no-confusing-arrow': 'error',

    // Extra syntax
    'no-extra-parens': 'error',
    'no-extra-semi': 'error',
    'no-floating-decimal': 'error',

    // Spacing
    'no-multi-spaces': 'error',
    'no-multiple-empty-lines': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-whitespace-before-property': 'error',

    // Object formatting
    'object-curly-newline': 'error',
    'object-curly-spacing': ['error', 'always'],
    'object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],

    // Operators
    'operator-linebreak': 'error',
    'padding-line-between-statements': 'error',

    // Quotes
    'quote-props': ['error', 'as-needed'],
    'quotes': ['error', 'single'],

    // Semicolons
    'rest-spread-spacing': 'error',
    'semi': ['error', 'always'],
    'semi-spacing': 'error',
    'semi-style': 'error',

    // Blocks and functions
    'space-before-blocks': 'error',
    'space-before-function-paren': [
        'error',
        {
            anonymous: 'never',
            named: 'never',
            asyncArrow: 'always',
        },
    ],
    'space-in-parens': 'error',
    'space-infix-ops': ['error', { int32Hint: true }],
    'space-unary-ops': 'error',

    // Comments and templates
    'spaced-comment': 'error',
    'switch-colon-spacing': 'error',
    'template-curly-spacing': ['error', 'always'],

    // Regex
    'wrap-regex': 'error',
    'yield-star-spacing': 'error',
};
