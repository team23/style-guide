# Changelog

All notable changes to this project will be documented in this file.

## v10.1.15 - v10.1.14

No changes

## v10.1.13

- Disable 'sort-keys' rule to allow context based sorting
- Disable '@stylistic/operator-linebreak' rule to allow better type formatting

## v10.1.12

No changes

## v10.1.11

- Disable 'capitalized-comments'

## v10.1.10

- Disable 'sort-imports'

## v10.1.9

- Disable 'jsdoc/require-jsdoc' for meaningful function comments
- Disable 'jsdoc/require-param' for lightweight function comments
- Disable 'jsdoc/require-returns' for lightweight function comments
- Disable '@stylistic/function-paren-newline' to allow readable formattings

## v10.1.8

- Fix: remove broken eslint rule @stylistic/func-call-spacing (#23)

## v10.1.7

- Migrate '@stylistic/eslint-plugin-js' to '@stylistic/eslint-plugin' (#25)
- Disable '@stylistic/multiline-comment-style' rule for smoother DX

## v10.1.6

No changes

## v10.1.5

No changes

## v10.1.4

No changes

## v10.1.3

No changes

## v10.1.2

No changes

## v10.1.1

No changes

## v10.1.0

- The minimum required version of ESLint has been updated to 9.32.0
- Update @eslint/js to 9.32.0
- Update @stylistic/eslint-plugin-js to ^4.4.0
- Update eslint-plugin-jsdoc to 52.0.4
- Update globals to 16.3.0
- Update typescript-eslint to 8.39.0

## v10.0.1

- Remove left-over CommonJS build files
- Add missing breaking change information for release v10.0.0

## v10.0.0

### Breaking Changes

- Only ESM is supported from now on
- The minimum required version of ESLint has been updated to 9.21.0

### Changes

- Update @eslint/js to 9.21.0
- Update @stylistic/eslint-plugin-js to ^4.1.0
- Update eslint-plugin-jsdoc to 50.6.3
- Update globals to 16.0.0
- Update typescript-eslint to 8.25.0

## v9.0.3

- Fix homepage url in package.json
- Adjust keywords in package.json

## v9.0.2

- Changed jsdoc configuration to `flat/recommended-typescript-flavor-error`

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
  These changes reflect the latest developments in JavaScript standards and best practices, and may require you to
  adjust your code to meet the new requirements.
- Additionally, note that the basic configuration of rules has changed:
    - We extend upon the recommended config from `@eslint/js`
    - Since stylistic rules have been extracted from the eslint core to `@stylistic/eslint-plugin-js, we do use
      this plugin and enable rules on per-use basis.
- `eslint-plugin-import` has been removed since it causes too many issues and does not fully support flat config.

### Changes

- Updated the repository URL and structure to reflect the new project structure within a monorepo
  at `https://github.com/team23/style-guide.git` under the `libs/java-script` directory.
- Updated `homepage` URL to `https://github.com/team23/style-guide/libs/java-script`.
- Enhanced the keywords in `package.json` to improve discoverability. New keywords
  include `"eslint-config"` and `"js"`.
- The license and documentation files have been explicitly listed in the `files` field
  to ensure they are included in the published package.
- The package now uses an `exports` field to define the entry points for different
  module formats (`import`, `require`, `types`). This change might affect how the package is consumed in different
  environments.
- The testing framework `jest` has been removed from the project.
- Added dependency `globals` to provide a standardized global variable configuration for ESLint.
- `typescript-eslint`: Included to enable TypeScript support within ESLint.
- `tsc-multi` was introduced to support usage in ESM and CommonJS projects.
- The `files` field in `package.json` has been defined to include only the necessary files in the
  npm package, improving the package's footprint.
- `typescript-eslint` has been introduced as a dependency for type-safe rule configuration

## v8.3.1

### Changes

- Update `eslint-plugin-jsdoc` peer-dependency to Version `48`

## v8.3.0

### Breaking Change

- Change `complexity` rule to limit code complexity to `10`

## v8.2.0

### Breaking Change

- set max-lines to max 400 per file

## v8.1.0

### Breaking Change

- Update peerDependency `eslint-plugin-jsdoc` to version `^46.4.3`

### Other changes

- Migrate `jsdoc/newline-after-description` rule to `jsdoc/tag-lines`

## v8.0.3

- Allow broader versions of eslint-plugin-jsdoc

## v8.0.2

- Allow broader versions of eslint-plugins

## v8.0.1

- Allow broader versions of eslint

## v8.0.0

- Update eslint and plugins
- Adapt version to major eslint version

## v2.0.7

- Remove peer dependencies due to breaking changes in **max-classes-per-file**

## v2.0.6

- Cleanup package to not container typescript/angular features

## v2.0.5

- Disable **detectObjects** in **no-magic-numbers**
- Disable **ignoreArrayIndexes** in **no-magic-numbers**

## v2.0.4

- Disable **computed-property-spacing**

## v2.0.3

- Add rule **array-bracket-spacing**
- Add rule **computed-property-spacing**

## v2.0.2

- Allow Class definitionis in Expressions for **max-classes-per-file**

## v1.0.6

- Add missing peer dependency **eslint-plugin-prefer-arrow**

## v1.0.5

- Remove **ident** rule due to misbehaviour in //existing projects//

## v1.0.4

- Update package lock to contain update peer dependencies of release v1.0.3

## v1.0.3

- Update peer dependencies for better integration in existing projects

## v1.0.2

- Update package json to contain correct version

## v1.0.1

- Update main entry point for working integration

## v1.0.0

- Initial release with eslint rules for js inspired by current projects
