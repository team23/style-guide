import tseslint from 'typescript-eslint';
import angularConfig from './config/angular-config.js';
import { Linter } from 'eslint';
import FlatConfig = Linter.Config;

const fileBasedModificationConfig = tseslint.config({
    name: 'team23/angular/core/file-based/routes',
    files: ['**/*.routes.ts'],
    rules: {
        '@typescript-eslint/promise-function-async': 'off',
    },
});

/**
 * Creates an ESLint configuration tailored for Angular projects.
 *
 * @returns Array of ESLint configuration objects.
 */
function createAngularEslintConfig(): Array<FlatConfig> {
    return tseslint.config(
        ...angularConfig,
        ...fileBasedModificationConfig,
    ) as Array<FlatConfig>;
}

export { createAngularEslintConfig };
