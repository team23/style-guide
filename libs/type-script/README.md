# eslint-config-team23-ts

A comprehensive ESLint configuration used by TEAM23 for maintaining consistent and strict TypeScript coding standards.
This package includes a combination of stylistic and rigorous rule sets to ensure high code quality across TypeScript projects.

## Installation

Add the library to your `package.json` as a `devDependency`:

```bash
npm i --save-dev @team23/eslint-config-team23-ts
```

To use the shareable config, import the package inside an `eslint.config.js` file and add it to the exported array:

```js
// eslint.config.js
import team23TypeScript from "@team23/eslint-config-team23-ts";

export default [
    ...team23TypeScript,
];
```

## Overriding Settings

You can override settings from the shareable config by adding them directly into your eslint.config.js
file after importing the shareable config. For example:

```js
// eslint.config.js
import team23TypeScript from "@team23/eslint-config-team23-ts";

export default [
    ...team23TypeScript,

    // Any settings added here will override team23TypeScript
    {
        rules: {
            "@typescript-eslint/prefer-readonly": "off",
        }
    }
];
```

## Development

### Creating a new version after rule changes

1. Update CHANGELOG.md.
2. Run npm version [<newversion> | major | minor | patch] -m "feat(core): <versionmessage>".
3. Push commits and tags.
4. Run npm publish --access public to publish the new version to npm.
