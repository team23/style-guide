# Changelog

All notable changes to this project will be documented in this file.

## v5.0.0

### Breaking Changes

#### Updated ESLint version to 9.0.0

- The minimum required version of ESLint has been updated from `^8.0.0` to `^9.9.0`. This is a significant update
  that does require making changes to accommodate the new linting rules and features provided by ESLint 9.x.
- A key feature introduced in ESLint 9.x is the required use
  [of the new Flat Config format](https://eslint.org/docs/latest/use/configure/configuration-files).
  Flat Config is a modern and streamlined approach to configuring ESLint, replacing the traditional `.eslintrc`
  configuration files.
- If you do want to know how to use this library with Flat Config, checkout its [README.md](README.md).

#### Changes to rules

- This config now only exports vue eslint rule specific configurations. If you do want to use
  TypeScript, `eslint-config-team23-ts` has to be added.
- As part of the update, all ESLint rules have been reviewed and adjusted to align with our latest coding
  guidelines and best practices.
  This ensures that the linting rules we enforce are both relevant and effective in maintaining code quality across
  all projects.
- The upgrade to ESLint 9.x and associated plugins brought about changes in several existing rules.
  Some rules have been deprecated, modified, or replaced with more up-to-date equivalents.
  These changes reflect the latest developments in TypeScript standards and best practices, and may require you to
  adjust your code to meet the new requirements.
- We extend upon the flat recommended rule config from `eslint-plugin-vue`.
- Remove TypeScript specific packages.

### Changes

- Updated the repository URL and structure to reflect the new project structure within a monorepo
  at `https://github.com/team23/style-guide.git` under the `libs/vue` directory.
- Updated `homepage` URL to `https://github.com/team23/style-guide/libs/vue`.
- Enhanced the keywords in `package.json` to improve discoverability. New keywords
  include `"eslint-config"` and `"vue"`.
- The license and documentation files have been explicitly listed in the `files` field
  to ensure they are included in the published package.
- The package now uses an `exports` field to define the entry points for different
  module formats (`import`, `require`, `types`). This change might affect how the package is consumed in different
  environments.
- `tsc-multi` was introduced to support usage in ESM and CommonJS projects.
- The `files` field in `package.json` has been defined to include only the necessary files in the
  npm package, improving the package's footprint.
- `typescript-eslint` has been introduced as a dependency for type-safe rule configuration.

## v4.0.0

- Include new linting rules based upon our vue coding guidelines

## v3.0.1

- close CVE-2023-45133

## v3.0.0

- add plugin `plugin:vuejs-accessibility/recommended` for accessibility checks

## v2.1.0

- update dependency `@team23/eslint-config-team23-standard` to `v8.2.0`

## v2.0.0

- Add additional rules to overrides

## v1.0.1

- Create GitHub Actions workflow for automated publishing

## v1.0.0

- Initial release with eslint rules for Vue 3
