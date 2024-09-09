import { createTSEslintConfig } from "@team23/eslint-config-team23-ts";

export default [
    ...createTSEslintConfig(),
    {
        files: ['**/eslint.config.js', '**/src/**/*.ts'],
        rules: {
            '@typescript-eslint/naming-convention': 'off',
        },
    },
    {
        files: ['**/eslint.config.js'],
        rules: {
            'import-x/default': 'off',
            'import-x/namespace': 'off',
            'import-x/no-deprecated': 'off',
            'import-x/no-named-as-default': 'off',
            'import-x/no-named-as-default-member': 'off',
            'no-magic-numbers': 'off',
        },
    },
];
