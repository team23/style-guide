#!/usr/bin/env node
/**
 * Example script demonstrating how to generate oxlint configuration
 *
 * Usage:
 *   npx tsx examples/generate-config.ts
 *   node --loader tsx examples/generate-config.ts
 *   npx jiti examples/generate-config.ts
 */

import { writeFileSync } from 'fs';
import { createJSOxlintConfig, createJSOxlintConfigFile } from '../src/index';

// Example: Generate configuration object
console.log('Generating oxlint configuration object...');
const config = createJSOxlintConfigFile({
    files: ['**/*.js', '**/*.mjs'],
    includeStylistic: true,
    includeJsdoc: true,
});

// Write to .oxlintrc.json
const outputPath = '.oxlintrc.json';
writeFileSync(outputPath, config);
console.log(`Configuration written to ${outputPath}`);
