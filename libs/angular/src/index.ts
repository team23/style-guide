import { defineConfig } from 'eslint/config';
import angularConfig from './config/angular-config.js';
import { Linter } from 'eslint';
import FlatConfig = Linter.Config;

const fileBasedModificationConfig = defineConfig({
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
    return defineConfig(
        ...angularConfig,
        ...fileBasedModificationConfig,
    );
}

export { createAngularEslintConfig };
