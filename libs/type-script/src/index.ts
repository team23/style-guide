import tseslint from 'typescript-eslint';
import tseslintConfig from './config/tseslint-config.js';
import stylisticConfig from './config/stylistic-config.js';
import tseslintStylisticConfig from './config/tseslint-stylistic-config.js';
import type { Linter } from 'eslint';
import jsdocConfig from './config/jsdoc-config';

interface ConfigOptions {

    /**
     * File glob patterns indicating the files that the configuration should be applied to.
     *
     * @default ['**\/*.?([cm])t', '**\/*.?([cm])tsx']
     */
    files?: Array<string>;

    /**
     * Optional file extensions for non TypeScript languages, e.g. vue.
     * Will automatically be added to linted files if not overwritten.
     *
     * @example ['vue']
     */
    fileExtensions?: Array<string>;

    /**
     * Optional path to a TypeScript configuration file to use for the slower default project.
     * See https://typescript-eslint.io/blog/announcing-typescript-eslint-v8/#project-service.
     */
    tsconfigPath?: string;
}

const GLOB_TS = '**/*.?([cm])ts';
const GLOB_TSX = '**/*.?([cm])tsx';

const fileBasedModificationConfigs: Array<Linter.Config> = [
    {
        name: 'team23/type-script/core/file-based/cypress',
        files: ['cypress.config.ts', 'cypress.**.config.ts'],
        rules: {
            'no-console': 'off',
        },
    },
    {
        name: 'team23/type-script/core/file-based/page-object',
        files: ['*.po.ts'],
        rules: {
            '@typescript-eslint/explicit-function-return-type': 'off',
        },
    },
    {
        name: 'team23/type-script/core/file-based/mocks',
        files: ['*.spec.ts', '*.spec.tsx', '**/__mocks__/**/*.ts', '**/__mocks__/**/*.tsx'],
        rules: {
            '@typescript-eslint/no-magic-numbers': 'off',
            '@typescript-eslint/no-empty-function': 'off',
            'max-lines': 'off',
        },
    },
];

/**
 * Creates an ESLint configuration tailored for TypeScript projects with optional settings.
 *
 * @param [options] - Optional configuration settings.
 *
 * @returns Array of ESLint configuration objects.
 */
function createTSEslintConfig(options?: ConfigOptions): Array<Linter.Config> {
    const {
        fileExtensions = [],
        tsconfigPath = undefined,
    } = options ?? {};

    const files = options?.files ?? [
        GLOB_TS,
        GLOB_TSX,
        ...fileExtensions.map(extension => `**/*.${ extension }`),
    ];

    const setupConfig: Linter.Config = {
        name: 'team23/type-script/setup',
        ignores: ['polyfills.ts', 'jest.config.ts', 'dist/**', 'node_modules/**'],
        plugins: {
            // @ts-expect-error tseslint uses own not so strict type
            '@typescript-eslint': tseslint.plugin,
        },
        languageOptions: {
            // @ts-expect-error typing mismatch: tseslint provides extended parser
            parser: tseslint.parser,
            parserOptions: {
                sourceType: 'module',
                parser: tseslint.parser,
                extraFileExtensions: fileExtensions.map(extension => `.${ extension }`),
                projectService: {
                    allowDefaultProject: ['./*js'],
                    defaultProject: tsconfigPath,
                },
                tsconfigRootDir: process.cwd(),
            },
        },
    };

    return tseslint.config(
        // do not set with extends, parser will not be configured correctly
        setupConfig,
        {
            files,
            extends: [
                ...tseslintConfig,
                ...tseslintStylisticConfig,
                ...stylisticConfig,
                ...jsdocConfig,
            ],
        },
        ...fileBasedModificationConfigs,
    ) as Array<Linter.Config>;
}

export {
    type ConfigOptions,
    createTSEslintConfig,
};
