/**
 * JSDoc rules configuration for oxlint
 * Migrated from eslint-plugin-jsdoc
 */

export const jsdocRulesConfig = {
    // JSDoc validation rules
    'jsdoc/check-alignment': 'error',
    'jsdoc/check-indentation': 'error',
    'jsdoc/tag-lines': [
        'error',
        'any',
        {
            startLines: 1,
        },
    ],

    // Type requirements - turned off for JavaScript
    'jsdoc/require-returns-type': 'off',
    'jsdoc/require-param-type': 'off',
    'jsdoc/require-param': 'off',
    'jsdoc/require-returns': 'off',
    'jsdoc/require-property-type': 'off',
    'jsdoc/require-jsdoc': 'off',
};
