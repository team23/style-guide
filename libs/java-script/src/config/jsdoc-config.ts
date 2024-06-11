import jsdoc from "eslint-plugin-jsdoc";
import { Linter } from "eslint";
import FlatConfig = Linter.FlatConfig;

const jsdocRecommendedConfig: FlatConfig = {
    name: 'team23/javascript/jsdoc/recommended',
    plugins: {
        jsdoc,
    },
    ...jsdoc.configs["flat/recommended"],
};

const jsdocRecommendedModificationConfig: FlatConfig = {
    name: 'team23/javascript/jsdoc/recommended-modification',
    rules: {
        "jsdoc/check-alignment": "error",
        "jsdoc/check-indentation": "error",
        "jsdoc/no-types": "error",
        "jsdoc/tag-lines": [
            "error",
            "any",
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
