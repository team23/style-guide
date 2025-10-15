# 6.1.5 - 6.1.1

No changes

# 6.1.0

- Update minimal required `stylelint` version to `16.23.0`

# 6.0.0

Library has been moved to `style-guide` mono-repository. Files and project structure have been updated accordingly.

## Breaking changes

- Update minimal required `stylelint` version to `16.19.1`
- Update dependency `stylelint-config-standard` from `37.0.0` to `38.0.1`

# 5.0.0

- Removed: stylelint less than 16.12.0 from peer dependencies. This introduces the following changes:
    - Only ESM syntax is now supported
    - Removed: 76 rules deprecated in 15.0.0
- Updated dep: `stylelint-config-standard` from `34.0.0` to `36.0.1`. This introduces the following changes:
    - Removed: Node.js less than 18.12.0 support.
    - Changed: updated to stylelint-config-recommended@14.0.0.
    - Added: lightness-notation: "percentage" rule.
- Other changes in project:
    - Migrated eslint to latest with flat config setup and usage of eslint-config-team23-standard
    - Removed prettier
    - Updated .editorconfig to use official team23 .editorconfig
    - Removed dependencies @stylelint/remark-preset, cz-conventional-changelog, husky, lint-staged, npm-run-all
      and remark-cli
    - Improved tests for stylint errors

# 4.0.0

- Removed: `stylelint` less than `15.10.0` from peer dependencies. This introduces the following changes:
    - Deprecated stylistic rules
    - Added the `declaration-property-value-no-unknown` rule
    - Removed support for Node.js 12
- Updated dep: `stylelint-config-standard` from `29.0.0` to `34.0.0`. This introduces the following changes:
    - Added: `media-feature-range-notation: "context"` rule
    - Removed: deprecated `no-extra-semicolons` rule.
    - Added: `selector-anb-no-unmatchable` rule.
    - Changed: `declaration-block-no-duplicate-properties` option to ignore:
      `['consecutive-duplicates-with-different-syntaxes']`.
    - Added: `media-query-no-invalid` rule.
- Removed dep: `stylelint-config-prettier` as it is not needed anymore with stylelint 15 and no longer maintained.
- Removed disabling stylelistic rules as they are deprecated and no longer used in this or upstream configs.

# 3.0.0

- Removed: `stylelint` less than `14.14.0` from peer dependencies.
- Updated dep: `stylelint-config-standard` from `26.0.0` to `29.0.0`.
- Disabled `import-notation` rule.

# 2.0.0

- Removed: `stylelint` less than `14.9.0` from peer dependencies.
- updated dep: `stylelint-config-standard` from `25.0.0` to `26.0.0`. This introduces the following changes:
    - Added: `'keyframe-block-no-duplicate-selectors': true` rule.
    - Added: `'import-notation': 'string'` rule.
    - Added: `'selector-not-notation': 'complex'` rule.

# 1.0.5

- updates readme and changelog

# 1.0.4

- updates readme

# 1.0.3

- the package is now available via npm!
- the package name changed from `stylelint-config-team23-standard` to `@team23/stylelint-config-team23-standard`

Note that as the package name changed, instead of

```json
{
    "extends": "stylelint-config-team23-standard"
}
```

in your stylelint config, you have to use

```json
{
    "extends": "@team23/stylelint-config-team23-standard"
}
```

since this version.

# 1.0.2

- update readme to include more details about how to install the package

# 1.0.1

- updates to `stylelint` from 14.5.1 to 14.6.0

# 1.0.0

## Dependencies

- updated `stylelint` from `^13.7.2` to `^14.5.0`
- updated `stylelint-config-standard` from `^20.0.0` to `^25.0.0`
- updated `stylelint` peer dependency to `^14.4.0`, i.e. removed support for older versions
- added `stylelint-config-prettier` dependency

## Changes to linting rules

- increased `max-nesting-depth` to 4.

- added rules:

```
'at-rule-disallowed-list': ['debug'],
'selector-type-no-unknown': null,
'function-no-unknown': null,
'no-empty-source': null,
```

- removed duplicate rules that were or became standard in stylelint-config-standard or
  stylelint-config-recommended:

```
'property-no-vendor-prefix': true,
'at-rule-no-vendor-prefix': true,
'selector-no-vendor-prefix': true,
'value-no-vendor-prefix': true,
'function-url-quotes': 'always',
'font-family-name-quotes': 'always-where-recommended',
'selector-attribute-quotes': 'always',
```

- by adding `stylelint-config-prettier`, all rules that might cause conflict when using prettier are disabled.

- disabled all stylistic rules as recommended by
  stylelint [here](https://stylelint.io/user-guide/rules/list/#stylistic-issues), by changing

```
    'max-empty-lines': 2,
    'string-quotes': 'single',
    'value-keyword-case': [
      'lower',
      {
        ignoreProperties: ['font-family', '/^\\$font-family-.*/']
      }
    ]
```

to

```
    'max-empty-lines': null,
    'string-quotes': null,
    'value-keyword-case': null,
```

- and by adding the following to disable all other stylistic rules which might come with stylelint-config-standard.
  Those should be handled by a pretty printer instead.

```
'function-name-case': null,
'custom-property-empty-line-before': null,
'selector-type-case': null,
'rule-empty-line-before': null,
'at-rule-empty-line-before': null,
'comment-empty-line-before': null,
'comment-whitespace-inside': null,
'color-hex-case': null,
'function-comma-newline-after': null,
'function-comma-newline-before': null,
'function-comma-space-after': null,
'function-comma-space-before': null,
'function-max-empty-lines': null,
'function-parentheses-newline-inside': null,
'function-parentheses-space-inside': null,
'function-whitespace-after': null,
'number-leading-zero': null,
'number-no-trailing-zeros': null,
'unit-case': null,
'value-list-comma-newline-after': null,
'value-list-comma-newline-before': null,
'value-list-comma-space-after': null,
'value-list-comma-space-before': null,
'value-list-max-empty-lines': null,
'property-case': null,
'declaration-bang-space-after': null,
'declaration-bang-space-before': null,
'declaration-colon-newline-after': null,
'declaration-colon-space-after': null,
'declaration-colon-space-before': null,
'declaration-empty-line-before': null,
'declaration-block-semicolon-newline-after': null,
'declaration-block-semicolon-newline-before': null,
'declaration-block-semicolon-space-after': null,
'declaration-block-semicolon-space-before': null,
'declaration-block-trailing-semicolon': null,
'block-closing-brace-empty-line-before': null,
'block-closing-brace-newline-after': null,
'block-closing-brace-newline-before': null,
'block-closing-brace-space-after': null,
'block-closing-brace-space-before': null,
'block-opening-brace-newline-after': null,
'block-opening-brace-newline-before': null,
'block-opening-brace-space-after': null,
'block-opening-brace-space-before': null,
'selector-attribute-brackets-space-inside': null,
'selector-attribute-operator-space-after': null,
'selector-attribute-operator-space-before': null,
'selector-combinator-space-after': null,
'selector-combinator-space-before': null,
'selector-descendant-combinator-no-non-space': null,
'selector-max-empty-lines': null,
'selector-pseudo-class-case': null,
'selector-pseudo-class-parentheses-space-inside': null,
'selector-pseudo-element-case': null,
'selector-list-comma-newline-after': null,
'selector-list-comma-newline-before': null,
'selector-list-comma-space-after': null,
'selector-list-comma-space-before': null,
'media-feature-colon-space-after': null,
'media-feature-colon-space-before': null,
'media-feature-name-case': null,
'media-feature-parentheses-space-inside': null,
'media-feature-range-operator-space-after': null,
'media-feature-range-operator-space-before': null,
'media-query-list-comma-newline-after': null,
'media-query-list-comma-newline-before': null,
'media-query-list-comma-space-after': null,
'media-query-list-comma-space-before': null,
'at-rule-name-case': null,
'at-rule-name-newline-after': null,
'at-rule-name-space-after': null,
'at-rule-semicolon-newline-after': null,
'at-rule-semicolon-space-before': null,
'indentation': null,
'linebreaks': null,
'max-line-length': null,
'no-eol-whitespace': null,
'no-missing-end-of-source-newline': null,
'no-empty-first-line': null,
'no-extra-semicolons': null,
```

## Changes to stylelint-config-standard

The update from stylelint-config-standard from version 20.0.0 to 25.0.0 introduced the following changes in
stylelint-config-standard:

**added:**

```
'alpha-value-notation': [
  'percentage',
  {
    exceptProperties: ['opacity'],
  },
],
'at-rule-no-vendor-prefix': true,
'color-function-notation': 'modern',
'custom-media-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected custom media query name to be kebab-case',
  },
],
'custom-property-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected custom property name to be kebab-case',
  },
],
'declaration-block-no-redundant-longhand-properties': true,
'function-url-quotes': 'always',
'hue-degree-notation': 'angle',
'keyframes-name-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected keyframe name to be kebab-case',
  },
],
'max-line-length': 120,
'media-feature-name-no-vendor-prefix': true,
'no-empty-first-line': true,
'no-irregular-whitespace': true,
'number-max-precision': 4,
'property-no-vendor-prefix': true,
'selector-attribute-quotes': 'always',
'selector-class-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected class selector to be kebab-case',
  },
],
'selector-id-pattern': [
  '^([a-z][a-z0-9]*)(-[a-z0-9]+)*$',
  {
    message: 'Expected id selector to be kebab-case',
  },
],
'selector-no-vendor-prefix': true,
'shorthand-property-no-redundant-values': true,
'string-quotes': 'double',
'value-no-vendor-prefix': true,
```

**removed:** none

**updated:** none

## Changes to stylelint-config-recommended

As stylelint-config-standard depends on stylelint-config-recommended and the stylelint-config-recommended
dependency was updated from version 3.0.0 to 6.0.0 in stylelint-config-standard version 25.0.0, the following
changes are introduced to stylelint-config-recommended:

**added:**

```
'custom-property-no-missing-var-function': true,
'declaration-block-no-duplicate-custom-properties': true,
'named-grid-areas-no-invalid': true,
'no-invalid-position-at-import-rule': true,
'no-irregular-whitespace': true,
```

**removed:**

```
'function-calc-no-invalid': true,
```

**udpated:**

from

```
'selector-type-no-unknown': true,
```

to

```
'selector-type-no-unknown': [
  true,
  {
    ignore: ['custom-elements'],
  },
],
```

# 0.2.0

- Update to use stylelint 13 and stylelint-config standard 20

# 0.1.0

- Initial release
