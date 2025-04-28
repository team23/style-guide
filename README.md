# Style Guide

## Overview

This repository contains the TEAM23 configuration for linting and styling rules.
It includes configurations for ESLint (JavaScript, TypeScript, Vue.js and Angular).
These configurations help maintain code quality and consistency across TEAM23's projects.

Checkout the independent README.md files for more information on how to install and use.

## Debug eslint configurations

### config-inspector

You may need to install bun and jiti:

```shell
npm install --global bun

bun add jiti
```

Now you can build the config:

```shell
bun build ./src/index.ts --target=node --outfile config.js
```

In some cases you may need to include external dependencies

```shell
bun build ./src/index.ts --target=node --outfile test.js --external eslint-plugin-vue
```

Now create an eslint.config.file and import from the outfile as described in the libraries README.md.
For example:

```ts
import { createVueEslintConfig } from "./test.js";

export default [
    ...createVueEslintConfig(),
];
```

Use the official config-inspector to inspect and understand the flat config.

```shell
npx @eslint/config-inspector
```

### Use --print-config

You can additionally use the `--print-config` CLI option to view the final configuration that will be used for a file. Note that only
configuration options applied to this file will be outputted.

You may want to use a bundler like bun to compile and bundle all files:

```
bun --bun eslint -c index.ts --print-config test.js > out.json
```
