import { createTSEslintConfig } from '@team23/eslint-config-team23-ts';
import { createJSEslintConfig } from '@team23/eslint-config-team23-standard';

export default [
    ...createJSEslintConfig(),
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
    {
        files: ['**/*.spec.ts'],
        rules: {
            '@typescript-eslint/no-magic-numbers': 'off',
        },
    },
];
