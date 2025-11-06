# TEAM23 Style Guide

> Unified linting and styling configurations for maintaining code quality and consistency across TEAM23 projects.

## Table of Contents

- [Overview](#overview)
- [Supported Tools](#supported-tools)
- [Installation](#installation)
- [Usage](#usage)
- [Debugging ESLint Configurations](#debugging-eslint-configurations)
- [Contributing](#contributing)
- [License](#license)

## Overview

This repository provides TEAM23's standardized configuration for linting and code styling tools. These configurations ensure consistent code quality, formatting, and best practices across all team projects.

## Supported Tools

### ESLint Configurations

- **JavaScript** - Core JavaScript linting rules
- **TypeScript** - Type-safe JavaScript with TypeScript-specific rules
- **Vue.js** - Vue.js framework-specific linting
- **Angular** - Angular framework-specific linting

### Stylelint Configurations

- **CSS** - Standard CSS linting rules
- **SCSS** - Sass/SCSS preprocessor linting rules

## Installation

Refer to the individual README.md files in each configuration directory for specific installation instructions:

- [JavaScript](`/libs/java-script/README.md`)
- [TypeScript](`/libs/type-script/README.md`)
- [Vue](`/libs/vue/README.md`)
- [Angular](`/libs/angular/README.md`)
- [CSS](`/libs/css/README.md`)
- [SCSS](`/libs/scss/README.md`)

## Usage

Each configuration package includes detailed usage instructions in its respective README.md file. Generally, you'll install the package and reference it in your project's linting configuration file.

For framework-specific setup and examples, please consult the documentation in each subdirectory.

## Debugging ESLint Configurations

### Prerequisites

Install the required global dependencies:

```bash
npm install --global bun
bun install
```

### Method 1: Using Config Inspector (Recommended)

The ESLint Config Inspector provides a visual interface to explore and understand your flat config setup.

#### Step 1: Build the Configuration

Build the TypeScript configuration into a JavaScript file:

```bash
bun build ./src/index.ts --target=node --outfile config.js
```

If you encounter issues with external dependencies, include them explicitly:

```bash
bun build ./src/index.ts --target=node --outfile config.js --external eslint-plugin-vue
```

#### Step 2: Create a Test Configuration

Create an `eslint.config.js` file and import your built configuration:

```javascript
import { createVueEslintConfig } from "./config.js";

export default [
    ...createVueEslintConfig(),
];
```

#### Step 3: Launch Config Inspector

Run the official ESLint Config Inspector:

```bash
npx @eslint/config-inspector
```

This will open an interactive browser interface where you can:
- Visualize the configuration hierarchy
- See which rules apply to specific files
- Understand plugin interactions
- Debug configuration conflicts

### Method 2: Using --print-config

For a quick inspection of the final configuration applied to a specific file, use the `--print-config` CLI option.

**Note:** This only outputs configuration options that apply to the specified file.

#### Example with Bun Bundler

```bash
bun --bun eslint -c index.ts --print-config test.js > out.json
```

This generates a JSON file containing the complete configuration for `test.js`, which you can inspect directly.

#### Use Cases

- Verify which rules are active for a specific file
- Debug why certain rules aren't applying
- Compare configurations across different file types
- Generate documentation of active rules

## Contributing

We welcome contributions to improve our style configurations! Please follow these guidelines:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes with clear commit messages
4. Test your changes thoroughly
5. Submit a pull request with a detailed description

## License

MIT 2025

## Support

For questions, issues, or suggestions:
- Open an issue in this repository
- Contact the TEAM23 development team
- Check the individual README files for specific configuration questions

---

**Maintained by TEAM23** | [Website](https://team23.de)
