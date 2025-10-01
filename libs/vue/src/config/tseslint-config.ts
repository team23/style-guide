import tseslint from 'typescript-eslint';
import type { Linter } from 'eslint';

// remove preconfigured base setup since we use our own.
const strictTypeCheckedConfigWithoutSetup = tseslint.configs.strictTypeChecked.filter(
    config => config.name !== 'typescript-eslint/base',
);

const optionalConfig: Linter.Config = {
    name: 'team23/vue/type-script/optional',
    rules: {
        '@typescript-eslint/no-unsafe-assignment': 'off',
        '@typescript-eslint/no-unsafe-argument': 'off',
    },
};

export default [
    ...strictTypeCheckedConfigWithoutSetup,
    optionalConfig,
];
