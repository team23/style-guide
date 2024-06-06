import jsdoc from "eslint-plugin-jsdoc";
import { Linter } from "eslint";
import FlatConfig = Linter.FlatConfig;

const jsdocBaseConfig: FlatConfig = {
    files: ["**/*.js"],
    plugins: {
        jsdoc,
    },
};

const jsdocRecommendedConfig: FlatConfig = {
    ...jsdocBaseConfig,
    ...jsdoc.configs["flat/recommended"],
}

const jsdocRecommendedModificationConfig: FlatConfig = {
    ...jsdocBaseConfig,
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
