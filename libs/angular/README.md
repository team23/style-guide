# eslint-config-team23-angular

A comprehensive ESLint configuration used by TEAM23 for maintaining consistent and strict angular coding standards.

## Installation

Add the library to your `package.json` as a `devDependency`:

```bash
npm i --save-dev @team23/eslint-config-team23-angular
```

To use the shareable config, import the package inside an `eslint.config.js` file and add it to the exported array:

```ts
// eslint.config.js (ES Module)
import team23Angular from "@team23/eslint-config-team23-angular";

export default [
    ...team23Angular,
];
```

```js
// eslint.config.js (CommonJS)
const team23Angular = require('@team23/eslint-config-team23-angular');

module.exports = [
    ...team23Angular.default,
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

## Compatibility

### Nx

If you are extending `plugin:@nx/angular` in your eslint config, you will use the `FlatCompat` utility make them available in your flat config. (See the [migration guide](https://eslint.org/docs/latest/use/configure/migration-guide#using-eslintrc-configs-in-flat-config) for more on this process.)
While the Nx config can be used this way in parallel with the team23 Angular config, both configs define the plugin `@angular-eslint`, which is not allowed. To use both configs, you can overwrite the `plugins` parameter in the FlatCompat result:

```js
// eslint.config.js
import team23Angular from "@team23/eslint-config-team23-angular";

// Prepare compat following the migration guide
// [...]

export default [
    ...team23Angular,

    ...compat
        .extends('plugin:@nx/angular')
        .map(config => ({
            ...config,
            // Replace the plugins object to prevent redefining
            plugins: {},
        })),
];
```

## Development

### Creating a new version after rule changes

1. Update CHANGELOG.md.
2. Run npm version [<newversion> | major | minor | patch] -m "feat(core): <versionmessage>".
3. Push commits and tags.
4. Run npm publish --access public to publish the new version to npm.
