/**
 * Type definitions for oxlint configuration
 */

export type RuleSeverity = 'off' | 'warn' | 'error' | 0 | 1 | 2 | 'allow' | 'deny';

export type RuleConfig = RuleSeverity | [RuleSeverity, ...Array<unknown>];

export interface OxlintRules {
    [rule: string]: RuleConfig;
}

export interface OxlintCategory {
    correctness?: RuleSeverity;
    suspicious?: RuleSeverity;
    pedantic?: RuleSeverity;
    perf?: RuleSeverity;
    restriction?: RuleSeverity;
    style?: RuleSeverity;
    nursery?: RuleSeverity;
}

export interface OxlintOverride {
    files: Array<string>;
    rules?: OxlintRules;
    plugins?: Array<string>;
}

export interface OxlintConfig {
    /**
     * Lint rule configurations
     */
    rules?: OxlintRules;

    /**
     * Plugins to extend available rules
     */
    plugins?: Array<string>;

    /**
     * Rule categories with severity levels
     */
    categories?: OxlintCategory;

    /**
     * Patterns for files to ignore
     */
    ignorePatterns?: Array<string>;

    /**
     * Override configurations for specific file patterns
     */
    overrides?: Array<OxlintOverride>;

    /**
     * Environment globals
     */
    env?: {
        browser?: boolean;
        node?: boolean;
        es2021?: boolean;
        [key: string]: boolean | undefined;
    };
}
