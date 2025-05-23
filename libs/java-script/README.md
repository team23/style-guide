# eslint-config-team23-standard

A comprehensive ESLint configuration used by TEAM23 for maintaining consistent and strict JavaScript coding standards.
This package includes a combination of stylistic and rigorous rule sets to ensure high code quality across JavaScript projects.

## Installation

Add the library to your `package.json` as `devDependency`

```bash
npm i --save-dev @team23/eslint-config-team23-standard
```

### Usage in your project

To use the shareable config, import the package inside an `eslint.config.js` file and add it to the exported array:

```ts
// eslint.config.js
import { createJSEslintConfig } from "@team23/eslint-config-team23-standard";

export default [
    ...createJSEslintConfig(),
];
```

#### Override rules

You can override settings from the shareable config by adding them directly into your eslint.config.js
file after importing the shareable config. For example:

```ts
import { createJSEslintConfig } from "@team23/eslint-config-team23-standard";

export default [
    ...createJSEslintConfig(),
    {
        files: ['*.js'],
        rules: {
            "no-magic-numbers": ["off"]
        }
    }
];
```

### Contribute

For information on how to contribute, checkout [CONTRIBUTING.md](https://github.com/team23/style-guide/CONTRIBUTING.md).

### Creating a new version after rule changes

1. Update CHANGELOG.md.
2. Run npm version [<newversion> | major | minor | patch] -m "feat(java-script): <your message>".
3. Push commits and tags.
4. Run npm publish --access public to publish the new version to npm.
