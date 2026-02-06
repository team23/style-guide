# @team23/oxlint-config-team23-standard

A set of oxlint rules used by TEAM23 for standard JavaScript projects.

## About

This package provides an oxlint configuration that mirrors the ESLint rules from `@team23/eslint-config-team23-standard`. Oxlint is a high-performance JavaScript linter built with Rust that offers significantly faster linting compared to ESLint.

## Installation

```bash
npm install --save-dev @team23/oxlint-config-team23-standard oxlint
```

### Quick Start

Generate your `.oxlintrc.json` configuration file:

```bash
# After installing the package
npx jiti node_modules/@team23/oxlint-config-team23-standard/examples/generate-config.ts
```

Then run oxlint:

```bash
npx oxlint
```

### Programmatic Configuration

You can generate an oxlint configuration programmatically. There are several ways to run the script:

#### Using npx with jiti (recommended for development)

```bash
npx --yes nx build --excludeTaskDependencies
npx jiti generate-config.ts
```

#### Using tsx (TypeScript runner)

```bash
npx --yes nx build --excludeTaskDependencies
npx tsx generate-config.ts
```

#### Example Script (generate-config.mjs)

```javascript
import { writeFileSync } from 'fs';
import { createJSOxlintConfigFile } from '@team23/oxlint-config-team23-standard';

// Generate configuration file content
const configFileContent = createJSOxlintConfigFile({
    files: ['**/*.js', '**/*.mjs'],
    includeStylistic: true,
    includeJsdoc: true,
});

// Write to .oxlintrc.json
writeFileSync('.oxlintrc.json', configFileContent);
console.log('✓ Configuration written to .oxlintrc.json');
```

#### Example Scripts Included

This package includes example scripts in the `examples/` directory:

- `examples/generate-config.ts` - TypeScript version (use with tsx or jiti)

Run them with:

```bash
# After installing the package
npx jiti node_modules/@team23/oxlint-config-team23-standard/examples/generate-config.ts

# Or from the package directory during development
npx jiti examples/generate-config.ts
```

### Manual Configuration

Create an `.oxlintrc.json` file in your project root:

```json
{
    "categories": {
        "correctness": "error",
        "suspicious": "warn"
    },
    "ignorePatterns": [
        "dist/",
        "node_modules/",
        "*.min.js"
    ],
    "env": {
        "browser": true,
        "node": true,
        "es2021": true
    },
    "rules": {
        "no-console": ["error", {
            "allow": ["warn", "error", "dir", "timeLog", "assert", "clear", "count", "countReset", "group", "groupEnd", "table", "dirxml", "groupCollapsed", "Console", "profile", "profileEnd", "timeStamp"]
        }],
        "no-var": "error",
        "prefer-const": "error",
        "eqeqeq": [2, "allow-null"]
    }
}
```

### Run Oxlint

```bash
# Lint all JavaScript files
npx oxlint

# Lint specific files
npx oxlint src/**/*.js

# Lint with auto-fix
npx oxlint --fix
```

## Configuration Options

The `createJSOxlintConfig` function accepts the following options:

- `files` (Array<string>): File glob patterns to lint. Default: `['**/*.js', '**/*.mjs']`
- `includeStylistic` (boolean): Include stylistic rules. Default: `true`. Note: Consider disabling if using a formatter like Prettier or Biome.
- `includeJsdoc` (boolean): Include JSDoc validation rules. Default: `true`

## Features

### Core JavaScript Rules

All core JavaScript quality rules from the ESLint configuration are included:
- No magic numbers
- Prefer const over let
- No var declarations
- Proper equality checks
- And many more...

### Stylistic Rules (Optional)

Stylistic rules for code formatting are included but can be disabled if you're using a dedicated formatter like Prettier or Biome.

### JSDoc Rules (Optional)

JSDoc validation rules ensure your documentation comments are properly formatted.

## Migration from ESLint

This package is designed to be a drop-in replacement for `@team23/eslint-config-team23-standard`. The rules have been carefully mapped from ESLint to oxlint format.

### Key Differences

1. **Performance**: Oxlint is 50-100x faster than ESLint
2. **Configuration Format**: Uses `.oxlintrc.json` instead of `eslint.config.js`
3. **Stylistic Rules**: Consider using a formatter (Prettier/Biome) instead of linter rules for styling
4. **Plugin Support**: Oxlint has different plugin ecosystem; some ESLint plugins may not be available

## Notes

- **Stylistic Rules**: Oxlint focuses on correctness and performance. For styling, consider using Prettier or Biome formatter instead of relying on linter rules.
- **JSDoc Plugin**: Native JSDoc support in oxlint may differ from eslint-plugin-jsdoc. Some rules may need adjustment.
- **Rule Compatibility**: Not all ESLint rules have direct oxlint equivalents. This configuration includes the closest matches.

## License

MIT

## Contributing

See [CONTRIBUTING.md](../../CONTRIBUTING.md) for contribution guidelines.

## Links

- [GitHub Repository](https://github.com/team23/style-guide)
- [Oxlint Documentation](https://oxc.rs/docs/guide/usage/linter)
- [ESLint Config (Original)](https://github.com/team23/style-guide/tree/main/libs/java-script)
