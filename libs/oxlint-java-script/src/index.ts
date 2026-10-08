import { jsRulesConfig } from './config/js-rules.js';
import { stylisticRulesConfig } from './config/stylistic-rules.js';
import { jsdocRulesConfig } from './config/jsdoc-rules.js';
import type { OxlintConfig } from './types.js';

export interface ConfigOptions {
    /**
     * File glob patterns indicating the files that the configuration should be applied to.
     *
     * @default ['**\/*.js', '**\/*.mjs']
     */
    files?: Array<string>;

    /**
     * Include stylistic rules (not recommended with formatters like Prettier)
     *
     * @default true
     */
    includeStylistic?: boolean;

    /**
     * Include JSDoc rules
     *
     * @default true
     */
    includeJsdoc?: boolean;
}

/**
 * Creates an oxlint configuration tailored for JavaScript projects with optional settings.
 *
 * @param [options] - Optional configuration settings.
 *
 * @returns Oxlint configuration object for JavaScript.
 */
function createJSOxlintConfig(options?: ConfigOptions): OxlintConfig {
    const {
        files = ['**/*.js', '**/*.mjs'],
        includeStylistic = true,
        includeJsdoc = true,
    } = options ?? {};

    const rules = {
        ...jsRulesConfig,
        ...(includeStylistic ? stylisticRulesConfig : {}),
        ...(includeJsdoc ? jsdocRulesConfig : {}),
    };

    const config: OxlintConfig = {
        // Enable recommended categories
        categories: {
            correctness: 'error',
            suspicious: 'warn',
        },

        // Ignore common directories
        ignorePatterns: [
            'dist/',
            'node_modules/',
            '*.min.js',
        ],

        // Environment configuration
        env: {
            browser: true,
            node: true,
            es2021: true,
        },

        // Rule overrides
        rules,

        // File-specific overrides
        overrides: [
            {
                files,
                rules,
            },
        ],
    };

    return config;
}

/**
 * Creates an oxlint configuration file content as JSON string
 *
 * @param [options] - Optional configuration settings.
 *
 * @returns JSON string of oxlint configuration
 */
function createJSOxlintConfigFile(options?: ConfigOptions): string {
    const config = createJSOxlintConfig(options);
    return JSON.stringify(config, null, 2);
}

export {
    type OxlintConfig,
    createJSOxlintConfig,
    createJSOxlintConfigFile,
};

export * from './types.js';
