# stylelint-config-team23-standard

CSS linting config for TEAM23 projects using [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard).

For linting SCSS files, see [`stylelint-config-team23-scss`](https://github.com/team23/stylelint-config-team23-scss.git).

## Installation

Add the library to your `package.json` as `devDependency`

```bash
npm i --save-dev @team23/stylelint-config-team23-standard
```

### Usage in your project

To use the shareable config, set this configuration in your `.stylelintrc.json`:

```json
{
    "extends": "@team23/stylelint-config-team23-standard"
}
```

If you use a version prior to v1.0.3, use

```json
{
    "extends": "stylelint-config-team23-standard"
}
```

instead.

#### Override rules

Simply add a `"rules"` key to your config, then add your overrides and additions there.

For example, to change the `selector-max-id` rule to allow one id selector in rules
(default is: no id selectors allowed):

```json
{
    "extends": "@team23/stylelint-config-team23-standard",
    "rules": {
        "selector-max-id": 1
    }
}
```
