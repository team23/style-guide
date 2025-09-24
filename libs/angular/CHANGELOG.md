# Changelog

All notable changes to this project will be documented in this file.

## v20.1.1

- change "@typescript-eslint/unbound-method" to allow static functions for Angular internals (e.g. Validations.require)

## v20.1.0

- Update angular-eslint to 20.1.1
- Update typescript-eslint to 8.39.0
- Update angular-core to 20.1.6
- Update @types/eslint to 9.6.1
- Update jiti to 2.5.1

This update supports Angular v20 and mainly includes these changes:
- add prefer-inject to recommended
- remove (component|directive)-class-suffix from recommended

## v20.0.1

- Remove left-over CommonJS build files
- Add missing breaking change information for release v20.0.0

## v20.0.0

### Breaking Changes

- Only ESM is supported from now on
- The minimum required version of ESLint has been updated to 9.21.0

### Changes

- Update angular-eslint to 19.1.0
- Update typescript-eslint to 8.25.0
- Update @angular/core to 19.2.0
- Update @types/eslint to 9.6.1

## v19.0.0

### ⚠️ Breaking Changes
- ⚠️ eslint-plugin: add prefer-signals rule to exported config ([#2150](https://github.com/angular-eslint/angular-eslint/pull/2150))
- ⚠️ eslint-plugin: remove deprecated no-host-metadata-property rule ([#2113](https://github.com/angular-eslint/angular-eslint/pull/2113))

### 🩹 Fixes
- update angular packages to v19.0.0 (#10)
- update typescript-eslint packages to v8.18.0
- update dependency eslint to v9.16.0

## v18.0.2

- Fix homepage url in package.json

## v18.0.0

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

- The upgrade to ESLint 9.x and associated plugins brought about changes in several existing rules.
  Some rules have been deprecated, modified, or replaced with more up-to-date equivalents.
  These changes reflect the latest developments in TypeScript standards and best practices, and may require you to
  adjust your code to meet the new requirements.

### Changes

- Updated the repository URL and structure to reflect the new project structure within a monorepo
  at `https://github.com/team23/style-guide.git` under the `libs/angular` directory.
- Updated `homepage` URL to `https://github.com/team23/style-guide/libs/angular`.
- Enhanced the keywords in `package.json` to improve discoverability. New keywords
  include `"eslint-config"` and `"angular"`.
- The license and documentation files have been explicitly listed in the `files` field
  to ensure they are included in the published package.
- The package now uses an `exports` field to define the entry points for different
  module formats (`import`, `require`, `types`). This change might affect how the package is consumed in different
  environments.
- `tsc-multi` was introduced to support usage in ESM and CommonJS projects.
- The `files` field in `package.json` has been defined to include only the necessary files in the
  npm package, improving the package's footprint.
- `typescript-eslint` has been introduced as a dependency for type-safe rule configuration.

## v17.0.1
- Update compatibilities to latest versions

## v17.0.0
### Breaking Change
- The major version primarily communicates the alignment with Angular's major version. Only Angular 17 is supported.
- Add `@angular-eslint/template/attributes-order` rule for ordering template attributes
- Add `@angular-eslint/template/@angular-eslint/template/prefer-self-closing-tags` rule for forcing self closing tags

## v16.1.1
- Disable `@typescript-eslint/promise-function-async` for angular `.routes.ts` files

## v16.1.0
- Switch the accessibility rules in the `@angular-eslint/eslint-plugin-template` dependency to `error`

## v16.0.1
- Update `@typescript-eslint` as peerDependency to version `^6.0.0`

## v16.0.0
### Breaking Change
- Update `@angular` as peerDependency to version `^16.0.0`
- Update `@angular-eslint` as peerDependency to version `^16.0.0`

## v15.0.1
- change path of typescript parserOptions

## v15.0.0
- Update all dependencies
- Adapt version to major angular version

## v2.0.2
- Add support for @angular@14

## v2.0.1
- Use **tsconfig.base.json** instead of **tsconfig.json**

## v2.0.0
- Clean new version

## v1.0.9
- Add support for eslint@8

## v1.0.8
- Add support for @angular@13

## v1.0.7
- Add eslint rules for *.ts files

## v1.0.6
- Add **eslint-plugin-html** to dependency to be able to lint html files

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
