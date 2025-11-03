import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';
import { createJSEslintConfig } from '../index.js';

describe('ESLint Configuration Tests', () => {
    it('should lint test.js file and catch expected errors', async () => {
        // Create ESLint instance with our flat configuration
        const eslint = new ESLint({
            baseConfig: createJSEslintConfig(),
            overrideConfigFile: true,
        });

        // Lint the test file
        const results = await eslint.lintFiles(['src/test/test.js']);
        const result = results[0];

        // Verify that linting errors were found
        expect(result.messages.length).toBeGreaterThan(0);

        // Check for specific expected errors
        const errorMessages = result.messages.map(msg => msg.ruleId);

        // Verify some key rules are triggered
        expect(errorMessages).toContain('@stylistic/line-comment-position');
        expect(errorMessages).toContain('no-unused-vars');
        expect(errorMessages).toContain('jsdoc/require-param-description');
        expect(errorMessages).toContain('jsdoc/require-returns-description');
        expect(errorMessages).toContain('jsdoc/require-returns-type');
        expect(errorMessages).toContain('@stylistic/key-spacing');
        expect(errorMessages).toContain('@stylistic/object-curly-spacing');
        expect(errorMessages).toContain('@stylistic/comma-spacing');
        expect(errorMessages).toContain('no-magic-numbers');
        expect(errorMessages).toContain('@stylistic/semi');
        expect(errorMessages).toContain('@stylistic/max-len');

        expect(errorMessages.length).toBe(11);
    });
});
