# Style Guide

## Overview

This repository contains the TEAM23 configuration for linting and styling rules.
It includes configurations for ESLint (JavaScript, TypeScript and Vue.js).
These configurations help maintain code quality and consistency across TEAM23's projects.

## Debug eslint configurations

### config-inspector

Use the official config-inspector to inspect and understand the flat config.

```shell
bun build ./src/index.ts --target=node --outfile eslint.config.js
```

```shell
npx @eslint/config-inspector
```

You may need to install bun:

```shell
npm install --global bun
```

### Use --print-config

You can additionally use the `--print-config` CLI option to view the final configuration that will be used for a file. Note that only
configuration options applied to this file will be outputted.

You may want to use a bundler like bun to compile and bundle all files:

```
bun --bun eslint -c index.ts --print-config test.js > out.json
```
