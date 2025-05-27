# eslint-config-team23-standard

A comprehensive ESLint configuration used by TEAM23 for maintaining consistent and strict JavaScript coding standards.
This package includes a combination of stylistic and rigorous rule sets to ensure high code quality across JavaScript projects.

## Installation

Add the library to your `package.json` as `devDependency`

```bash
npm i --save-dev @team23/eslint-config-team23-standard
```

## Usage in your project

To use the shareable config, import the package inside an `eslint.config.js` file and add it to the exported array:

```ts
// eslint.config.js
import { createJSEslintConfig } from "@team23/eslint-config-team23-standard";

export default [
    ...createJSEslintConfig(),
];
```

### Override rules

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
