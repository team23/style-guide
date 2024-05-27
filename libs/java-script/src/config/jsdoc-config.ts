import jsdoc from "eslint-plugin-jsdoc";
import { Linter } from "eslint";
import FlatConfig = Linter.FlatConfig;

const jsdocConfig: FlatConfig = {
    ...jsdoc.configs["flat/recommended"],
    files: ["**/*.js"],
    plugins: {
        jsdoc,
    },
};

const jsdocModificationConfig: FlatConfig = {
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

export {
    jsdocConfig,
    jsdocModificationConfig,
};
