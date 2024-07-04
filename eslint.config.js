import team23angular from './libs/angular/dist/libs/angular/src/index.js';
import team23standard from './libs/java-script/dist/libs/java-script/src/index.js';
import tseslint from './libs/type-script/dist/libs/type-script/src/index.js';

export default [
    {
        ignores: ['**/node_modules/**/*', '**/dist/**/*'],
    },
    ...team23standard,
    ...tseslint,
    ...team23angular,
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
