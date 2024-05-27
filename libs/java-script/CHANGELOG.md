# Changelog

## v9.0.0

### Breaking Change

- Migrate eslint config format to flat config
- Update linting dependencies to latest
- Update peer dependencies

### Other changes

- Split eslint configuration into different files
- Removed duplicate rule declarations which were defined in recommended ruleset
- use ESLint Stylistic for formatting rules

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
