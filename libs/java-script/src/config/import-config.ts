import { Linter } from "eslint";
// @ts-expect-error no typings
import importPlugin from "eslint-plugin-import";
import FlatConfig = Linter.FlatConfig;

const importConfig: FlatConfig = {
    plugins: {
        import: importPlugin,
    },
    // support for non flatConfig plugins: https://github.com/import-js/eslint-plugin-import/issues/2556
    settings: {
        "import/parsers": {
            espree: [".js", ".cjs", ".mjs", ".jsx"],
        },
    },
};

const importModificationConfig: FlatConfig = {
    rules: {
        "import/no-default-export": "error",
        "import/no-deprecated": "error",
        "import/no-extraneous-dependencies": "off",
        "import/no-internal-modules": "off",
        "import/no-unassigned-import": "off",
    },
};

export {
    importModificationConfig,
    importConfig,
};
