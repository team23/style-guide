# eslint-config-team23-angular

A set of eslint rules used by TEAM23 for standard angular projects

## Installation
Add the library to your `package.json` as a `devDependency`:

```bash
npm i --save-dev @team23/eslint-config-team23-angular
```

To use the shareable config, import the package inside an `eslint.config.js` file and add it to the exported array:

```js
// eslint.config.js
import team23Angular from "@team23/eslint-config-team23-angular";

export default [
    ...team23Angular,
];
```

## Overriding Settings

You can override settings from the shareable config by adding them directly into your eslint.config.js
file after importing the shareable config. For example:

```js
// eslint.config.js
import team23Angular from "@team23/eslint-config-team23-angular";

export default [
    ...team23Angular,

    // Any settings added here will override team23Angular
    {
        rules: {
            "@angular-eslint/template/cyclomatic-complexity": "error",
        }
    }
];
```

## Development

#### Rules that should be included here
 - angular rules (including ones that relate to templates)

#### Rules that should NOT be included here
 - eslint rules
 - @typescript-eslint rules
 - rules from other frameworks (react, vue), libraries (nx), etc.

### Proposing rule changes

For proposing changes to the ruleset please open a merge request reviewed and approved by at least one mid-senior level developer.
Additional permission is required if you would like to make a new version after the rule change

## [License](LICENSE)
TEAM23 GmbH
