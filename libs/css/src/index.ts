export default {
    extends: ['stylelint-config-standard'],
    rules: {

        /**
         * Specify a list of disallowed at-rules.
         */
        'at-rule-disallowed-list': ['debug'],

        /**
         * Disallow !important within declarations.
         */
        'declaration-no-important': true,

        /**
         * Disallow unknown functions.
         */
        'function-no-unknown': null,

        /**
         * Specify string or URL notation for @import rules.
         */
        'import-notation': null,

        /**
         * Limit the depth of nesting.
         */
        'max-nesting-depth': [
            // eslint-disable-next-line @typescript-eslint/no-magic-numbers
            4,
            {
                ignore: [

                    /**
                     * Ignore rules where the first selector in each selector list item is a pseudo-class
                     */
                    'pseudo-classes',
                ],
            },
        ],

        /**
         * Disallow selectors of lower specificity from coming after overriding selectors of higher specificity.
         * It is recommended turning this rule off if you use a lot of nesting.
         */
        'no-descending-specificity': null,

        /**
         * Disallow empty sources.
         */
        'no-empty-source': null,

        /**
         * Specify a pattern for class selectors.
         */
        'selector-class-pattern': [
            '^[a-z0-9\\-_]+$',
            {
                message: 'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
            },
        ],

        /**
         * Limit the number of compound selectors in a selector.
         */
        'selector-max-compound-selectors': 3,

        /**
         * Limit the number of ID selectors in a selector.
         */
        'selector-max-id': 0,

        /**
         * Disallow unknown type selectors.
         */
        'selector-type-no-unknown': null,
    },
};
