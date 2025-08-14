# Changelog

All notable changes to this project will be documented in this file.

## v10.2.2

- Fix: remove broken eslint rule @stylistic/func-call-spacing (#23)

## v10.2.1

- Fix: Apply file configuration to `team23/type-script/setup`

## v10.2.0

- Update `@stylistic/eslint-plugin` to `5.2.2`
- Update `eslint-plugin-jsdoc` to `52.0.4`
- Update `typescript-eslint` to `8.39.0`

## v10.1.1

- Add missing files

## v10.1.0

- Update dependencies
- Remove rule `'@typescript-eslint/member-ordering`, since it caused problems with different tec-stacks. If you want to enable
  `'@typescript-eslint/member-ordering`, just set it to error in your eslint-config.

## v10.0.3

- Add missing build files

## v10.0.2

- Update documentation
- Add missing import file suffix

## v10.0.1

- Remove left-over CommonJS build files
- Add missing breaking change information for release v10.0.0

## v10.0.0

### Breaking Changes

- Only ESM is supported from now on
- The minimum required version of ESLint has been updated to 9.21.0

### Changes

- Update @stylistic/eslint-plugin to 4.1.0
- migrate to ESM-only, requires ESLint v9+

## v9.0.3

- Fix homepage url in package.json
- Adjust keywords in package.json

## v9.0.2

- Changed jsdoc configuration to `flat/recommended-typescript-error`

## v9.0.1

- Lint config
- Add 'jsdoc/require-returns-typ': 'off' and 'jsdoc/require-param-typ': 'off'

## v9.0.0

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

- As part of the update, all ESLint rules have been reviewed and adjusted to align with our latest coding
  guidelines and best practices.
  This ensures that the linting rules we enforce are both relevant and effective in maintaining code quality across
  all projects.
- The upgrade to ESLint 9.x and associated plugins brought about changes in several existing rules.
  Some rules have been deprecated, modified, or replaced with more up-to-date equivalents.
  These changes reflect the latest developments in TypeScript standards and best practices, and may require you to
  adjust your code to meet the new requirements.
- Additionally, note that the basic configuration of rules has changed:
    - We extend upon the strict type checked config from `typescript-eslint`
    - Since stylistic rules have been extracted from the eslint core to `@stylistic/eslint-plugin-js, we do use
      this plugin and enable rules on per-use basis.
- Add `eslint-plugin-jsdoc` to align use to eslint-config-team23-standard.

### Changes

- Updated the repository URL and structure to reflect the new project structure within a monorepo
  at `https://github.com/team23/style-guide.git` under the `libs/type-script` directory.
- Updated `homepage` URL to `https://github.com/team23/style-guide/libs/type-script`.
- Enhanced the keywords in `package.json` to improve discoverability. New keywords
  include `"eslint-config"`, `"typescript"` and `"ts"`.
- The license and documentation files have been explicitly listed in the `files` field
  to ensure they are included in the published package.
- The package now uses an `exports` field to define the entry points for different
  module formats (`import`, `require`, `types`). This change might affect how the package is consumed in different
  environments.
- Added dependency `globals` to provide a standardized global variable configuration for ESLint.
- Add typing to config.
- `tsc-multi` was introduced to support usage in ESM and CommonJS projects.
- The `files` field in `package.json` has been defined to include only the necessary files in the
  npm package, improving the package's footprint.
- `typescript-eslint` has been introduced as a dependency for type-safe rule configuration.
- Add `eslint-plugin-jsdoc` to align use to eslint-config-team23-standard.

## v8.0.0

### Breaking Changes

- Remove 'do', 'does' and 'did' from boolean prefixes for `@typescript-eslint/naming-convention`

### Other Changes

- Disable some rules for `cypress` projects

## v7.0.0

- Update peerDependency `@typescript-eslint/eslint-plugin` to version `^6.0.0 || ^7.0.0`
- Update peerDependency `@typescript-eslint/parser` to version `^6.0.0 || ^7.0.0`

## v6.0.0

### Breaking Changes

- Update peerDependency `@typescript-eslint/eslint-plugin` to version `^6.0.0`
- Update peerDependency `@typescript-eslint/parser` to version `^6.0.0`

### Other Changes

- Adapt version to major `@typescript-eslint`

## v4.0.2

- Update **@typescript-eslint/no-magic-numbers** to allow magic numbers in objects

## v4.0.1

- change path of typescript parserOptions

## v4.0.0

- Adapt version to major typescript version

## v2.0.7

- Add **ignoreEnums** to **@typescript-eslint/no-magic-numbers**

## v2.0.5

- Ignore **polyfills** and **jest.config** from linting

## v2.0.4

- Add rule **@typescript-eslint/space-infix-ops**

## v2.0.3

- Add exceptions to **@typescript-eslint/no-magic-numbers**

## v2.0.2

- Disable **no-magic-numbers** to avoid conflicts with **@typescript-eslint/no-magic-numbers**
- Update **@typescript-eslint/no-magic-numbers** to **ignoreReadonlyClassProperties**

## v2.0.1

- Update **dot-notation** to support **noPropertyAccessFromIndexSignature**

## v2.0.0

- Update **eslint** to version 2.0.0

## v1.0.8

- Disable **no-shadow** due to conflicts with **@typescript-eslint/no-shadow**

## v1.0.7

- Update **@typescript-eslint/naming-convention** to allow leading underscore to mark unused variables for ts

## v1.0.6

- Update package lock to contain update peer dependencies of release v1.0.5

## v1.0.5

- Remove **eslint-config-team23-standard** dependency for independent usage

## v1.0.4

- Update **eslint-config-team23-standard** to version 1.0.4

## v1.0.3

- Update version number to be aligned with eslint-config-team23-standard

## v1.0.2

- Update version number to be aligned with eslint-config-team23-standard

## v1.0.1

- Update version number to be aligned with eslint-config-team23-standard

## v1.0.0

- Initial release with eslint rules for js inspired by current projects
