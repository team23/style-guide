import { beforeEach, describe, expect, it } from 'vitest';
import config from '../index.js';
import fs from 'fs';
import stylelint, { type LinterResult } from 'stylelint';

const validScss = fs.readFileSync('./src/tests/valid.scss', 'utf-8');
const invalidScss = fs.readFileSync('./src/tests/invalid.scss', 'utf-8');

const expectedErrorRules = [
    'scss/at-function-pattern',
    'scss/at-mixin-pattern',
    'scss/dollar-variable-pattern',
    'scss/percent-placeholder-pattern',
    'at-rule-empty-line-before',
    'no-duplicate-selectors',
];

describe('flags no warnings with valid SCSS', () => {
    let result: Promise<LinterResult>;

    beforeEach(() => {
        result = stylelint.lint({
            code: validScss,
            config,
        });
    });

    it('did not error', async () => result.then(
        data => expect(data.errored).toBeFalsy(),
    ));

    it('flags no warnings', async () => result.then(
        data => expect(data.results[0].warnings).toHaveLength(0),
    ));
});

describe('flags warnings with invalid SCSS', () => {
    let result: Promise<LinterResult>;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidScss,
            config,
        });
    });

    it('should flag as errored', async () => result.then(data => {
        expect(data.errored).toBeTruthy();
    }));

    it('should flag the correct number of errors', async () => result.then(
        data => {
            const expectedErrorCount = expectedErrorRules.length;
            const actualErrorCount = data.results[0].warnings.filter(w => w.severity === 'error').length;
            expect(actualErrorCount).toBe(expectedErrorCount);
        },
    ));

    it.each(expectedErrorRules)('should contain error for rule: "%s"', async rule => {
        const _result = await result;
        const rules = _result.results[0].warnings.map(warning => warning.rule);
        expect(rules).toContain(rule);
    });
});
