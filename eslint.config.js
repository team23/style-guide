import team23angular from './libs/angular/dist/index.js';
import team23standard from './libs/java-script/dist/index.js';
import tseslint from './libs/type-script/dist/index.js';

export default [
    {
        ignores: ['**/node_modules/**/*', '**/dist/**/*'],
    },
    ...team23standard,
    ...tseslint,
    ...team23angular,
    {
        rules: {
            '@typescript-eslint/naming-convention': 'off',
        },
    },
];
