import { Linter } from "eslint";
import pluginImport, { configs } from 'eslint-plugin-import-x';
import FlatConfig = Linter.FlatConfig;

const importRecommendedConfig: FlatConfig = {
    name: 'team23/java-script/import/recommended',
    plugins: {
        // @ts-expect-error
        'import-x': pluginImport,
    },
    rules: {
        ...configs.recommended.rules,
    }
};

export default [
    importConfig,
];
