import { Linter } from "eslint";
import pluginImport from 'eslint-plugin-import-x';
import FlatConfig = Linter.FlatConfig;

const importConfig: FlatConfig = {
    name: 'team23/java-script/import/recommended',
    plugins: {
        import: pluginImport,
    },
    rules: {
        "import/no-default-export": "error",
        "import/no-deprecated": "error",
    },
};

export default [
    importConfig,
];
