# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.0] - 2025-10-27

### Added

- Initial release of oxlint configuration for JavaScript projects
- Migrated ESLint rules from @team23/eslint-config-team23-standard to oxlint format
- Core JavaScript rules for code quality and correctness
- Stylistic rules for code formatting (optional)
- JSDoc validation rules (optional)
- TypeScript-based configuration generation
- Programmatic API for creating oxlint configurations
- Comprehensive documentation and usage examples

### Features

- `createJSOxlintConfig()` - Generate oxlint configuration object
- `createJSOxlintConfigFile()` - Generate .oxlintrc.json file content
- Support for custom file patterns
- Optional stylistic and JSDoc rule sets
- Environment configuration for browser, Node.js, and ES2021
