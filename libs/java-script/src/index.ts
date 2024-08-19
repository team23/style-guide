import globals from 'globals';
import stylisticConfig from './config/stylistic-config.js';
import jsdocConfig from './config/jsdoc-config.js';
import jsConfig from './config/js-config.js';
import tseslint from 'typescript-eslint';

const baseConfig = tseslint.config({
    name: 'team23/java-script/base',
    ignores: ['dist/', 'node_modules/', '*.min.js'],
    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.es2021,
        },
    },
});

const combinedConfig = tseslint.config({
    files: ['**/*.js', '**/*.jsx'],
    extends: [
        ...baseConfig,
        ...jsConfig,
        ...stylisticConfig,
        ...jsdocConfig,
    ],
});

export default combinedConfig;
