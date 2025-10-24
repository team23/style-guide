import { describe, it, expect } from 'vitest';
import { ESLint } from 'eslint';
import { createTSEslintConfig } from '../index.js';
import LintResult = ESLint.LintResult;

describe('ESLint Configuration Tests', () => {
    it('should lint test.ts file and catch expected errors', async () => {
        // Create ESLint instance with our flat configuration
        const eslint = new ESLint({
            baseConfig: createTSEslintConfig(),
            overrideConfigFile: true,
        });

        // Lint the test file
        const results = await eslint.lintFiles(['src/test/test.ts']);
        const result = results[0] as LintResult;

        // Verify that linting errors were found
        expect(result.messages.length).toBeGreaterThan(0);

        // Check for specific expected errors
        const errorMessages = result.messages.map(msg => msg.ruleId);

        // Verify some key rules are triggered
        expect(errorMessages).toContain('@stylistic/line-comment-position');
        expect(errorMessages).toContain('@typescript-eslint/no-unused-vars');
        expect(errorMessages).toContain('@typescript-eslint/explicit-function-return-type');
        expect(errorMessages).toContain('@typescript-eslint/no-explicit-any');
        expect(errorMessages).toContain('@typescript-eslint/no-unsafe-assignment');
        expect(errorMessages).toContain('@typescript-eslint/restrict-plus-operands');
        expect(errorMessages).toContain('@typescript-eslint/no-unsafe-return');
        expect(errorMessages).toContain('@stylistic/key-spacing');
        expect(errorMessages).toContain('@stylistic/object-curly-spacing');
        expect(errorMessages).toContain('@stylistic/comma-spacing');
        expect(errorMessages).toContain('@typescript-eslint/no-magic-numbers');
        expect(errorMessages).toContain('@stylistic/semi');
        expect(errorMessages).toContain('@stylistic/max-len');

        console.log('# errorMessages:\n', errorMessages);

        expect(errorMessages.length).toBe(13);
    });
});
