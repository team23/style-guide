import jsdoc from 'eslint-plugin-jsdoc';
import type { Linter } from 'eslint';

const jsdocRecommendedConfig: Linter.Config = {
    name: 'team23/type-script/jsdoc/recommended',
    plugins: {
        jsdoc,
    },
    ...jsdoc.configs['flat/recommended-typescript-error'],
};

const jsdocRecommendedModificationConfig: Linter.Config = {
    name: 'team23/type-script/jsdoc/recommended-modification',
    rules: {
        'jsdoc/check-indentation': 'error',
        'jsdoc/tag-lines': [
            'error',
            'any',
            {
                startLines: 1,
            },
        ],
    },
};

export default [
    jsdocRecommendedConfig,
    jsdocRecommendedModificationConfig,
];
