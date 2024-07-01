import tseslint from "typescript-eslint";
import angularConfig from './config/angular-config.js';
import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;

const fileBasedModificationConfig = tseslint.config({
    name: 'team23/angular/core/file-based/routes',
    files: ['**/*.routes.ts'],
    rules: {
        '@typescript-eslint/promise-function-async': 'off'
    },
});

const combinedConfig = tseslint.config(
    ...angularConfig,
    ...fileBasedModificationConfig,
);

export default combinedConfig as Array<FlatConfig>;
