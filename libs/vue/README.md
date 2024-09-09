# eslint-config-team23-vue

A comprehensive ESLint configuration used by TEAM23 for maintaining consistent and strict Vue coding standards.
This package includes a combination of stylistic and rigorous rule sets to ensure high code quality across Vue projects.

## Installation

Add the library to your `package.json` as `devDependency`

```bash
npm i --save-dev @team23/eslint-config-team23-vue
```

To use the shareable config, import the package inside an `eslint.config.js` file and add it to the exported array:

```ts
// eslint.config.js (ES Module)
import team23Vue from "@team23/eslint-config-team23-vue";

export default [
    ...team23Vue,
];
```

```js
// eslint.config.js (CommonJS)
const team23Vue = require('@team23/eslint-config-team23-vue');

module.exports = [
    ...team23Vue.default,
];
```

## Overriding Settings

You can override settings from the shareable config by adding them directly into your eslint.config.js
file after importing the shareable config. For example:

```js
// eslint.config.js
import team23Vue from "@team23/eslint-config-team23-vue";

export default [
    ...team23Vue,

    // Any settings added here will override team23Vue
    {
        rules: {
            "@typescript-eslint/prefer-readonly": "off",
        }
    }
];
```

### Additional configuration

- If your project relies on internationalization, you may want to add [vue/no-bare-strings-in-template](https://eslint.vuejs.org/rules/no-bare-strings-in-template) to your config.
- It may be helpful to enable [vue/require-prop-comment](https://eslint.vuejs.org/rules/require-prop-comment) to document component interfaces.

## Development

### Creating a new version after rule changes

1. Update CHANGELOG.md.
2. Run npm version [<newversion> | major | minor | patch] -m "feat(core): <versionmessage>".
3. Push commits and tags.
4. Run npm publish --access public to publish the new version to npm.
