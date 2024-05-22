# eslint-config-team23-standard

A set of eslint rules used by TEAM23 for standard js projects.

## Installation

Add the library to your `package.json` as `devDependency`

```bash
npm i --save-dev @team23/eslint-config-team23-standard
```

### Usage in your project

Include rules in your eslint flat config file (eslint.config.[js/ts]):

```ts
import team23Standard from "@team23/eslint-config-team23-standard";

export default config = [
    team23Standard,
];
```

#### Override rules

```ts
import team23Standard from "@team23/eslint-config-team23-standard";

export default config = [
    team23Standard,
    {
        files: ['*.js'],
        rules: {
            "no-magic-numbers": ["off"]
        }
    }
];
```

### Extending the .eslintrc.json

Simply add a `"rules"` key to your config, then add your overrides and additions there.

## Development

#### Rules that should be included here

 - eslint rules

#### Rules that should NOT be included here

 - @typescript-eslint rules
 - rules from other frameworks (angular, react, vue), libraries (nx), etc.

### Proposing rule changes

For proposing changes to the ruleset please open either

-   a pull request
-   reviewed and approved by at least one mid-senior level developer
-   additional permission is required if you would like to make a new version after the rule change

### Creating a new version after new rule changes

1) update [CHANGELOG.md](CHANGELOG.md)
2) Run `npm version [<newversion> | major | minor | patch] -m "feat(v${ VERSION }): release new version"`
3) Push commits and tags
4) Run `npm publish --access public` to publish the new version to npm

### Usage inside of this project

If you want a brief test of this repo, do the following:

- `npm ci`
- Run `npm run lint`
