import jsdoc from 'eslint-plugin-jsdoc';
import type { Linter } from 'eslint';

const jsdocRecommendedConfig: Linter.Config = {
    name: 'team23/java-script/jsdoc/recommended',
    plugins: {
        jsdoc,
    },
    ...jsdoc.configs['flat/recommended'],
};

const jsdocRecommendedModificationConfig: Linter.Config = {
    name: 'team23/java-script/jsdoc/recommended-modification',
    rules: {
        'jsdoc/check-alignment': 'error',
        'jsdoc/check-indentation': 'error',
        'jsdoc/no-types': 'error',
        'jsdoc/tag-lines': [
            'error',
            'any',
            {
                startLines: 1,
            },
        ],
        'jsdoc/require-returns-typ': 'off',
        'jsdoc/require-param-typ': 'off',
    },
};

export default [
    jsdocRecommendedConfig,
    jsdocRecommendedModificationConfig,
];
