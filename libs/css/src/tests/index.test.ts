import { beforeEach, describe, expect, it } from 'vitest';
import config from '../index';
import fs from 'fs';
import stylelint, { type LinterResult } from 'stylelint';

const validCss = fs.readFileSync('./src/tests/valid.css', 'utf-8');
const invalidCss = fs.readFileSync('./src/tests/invalid.css', 'utf-8');

const expectedWarnings = [
    'Unknown at-rule "@debug" (at-rule-no-unknown)',
    'Disallowed !important (declaration-no-important)',
    'Disallowed !important (declaration-no-important)',
    'Disallowed !important (declaration-no-important)',
    'Disallowed !important (declaration-no-important)',
    'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
    'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
    'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
    'Selector should be written in lowercase with hyphens or underscores (selector-class-pattern)',
    'Too many compound selectors in ".header__nav-link .icon .svg .path", maximum 3 (selector-max-compound-selectors)',
    'Too many compound selectors in ".footer .container .row .col .content", maximum 3 (selector-max-compound-selectors)',
    'Too many ID selectors in "#main-header", maximum 0 (selector-max-id)',
    'Too many ID selectors in "#header #nav", maximum 0 (selector-max-id)',
];

describe('flags no warnings with valid css', () => {
    let result: Promise<LinterResult>;

    beforeEach(() => {
        result = stylelint.lint({
            code: validCss,
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

describe('flags warnings with invalid css', () => {
    let result: Promise<LinterResult>;

    beforeEach(() => {
        result = stylelint.lint({
            code: invalidCss,
            config,
        });
    });

    it('should flag as errored', async () => result.then(data => {
        expect(data.errored).toBeTruthy();
    }));

    it('should flag the correct number of warnings', async () => result.then(
        data => {
            const expectedWarningCount = 14;
            expect(data.results[0].warnings.length).toBe(expectedWarningCount);
        },
    ));

    it.each(expectedWarnings)('should contain warning: "%s"', async expectedWarning => {
        const _result = await result;
        const warnings = _result.results[0].warnings.map(warning => warning.text);
        expect(warnings).toContain(expectedWarning);
    });
});
