import tseslint from 'typescript-eslint';
import { Linter } from 'eslint';

// remove preconfigured base setup since we use our own.
const stylisticTypeCheckedConfigWithoutSetup = tseslint.configs.stylisticTypeChecked.filter(
    config => config.name !== "typescript-eslint/base",
);

const stylisticTypeCheckedModificationConfig: Linter.Config = {
    name: 'team23/type-script/stylistic/type-checked-modification',
    rules: {
        '@typescript-eslint/array-type': [
            'error',
            {
                default: 'generic',
            },
        ],

        '@typescript-eslint/dot-notation': [
            'error',
            {
                allowIndexSignaturePropertyAccess: true,
            },
        ],
        '@typescript-eslint/no-inferrable-types': [
            'error',
            {
                ignoreParameters: true,
            },
        ],
    },
};

export default [
    ...stylisticTypeCheckedConfigWithoutSetup,
    stylisticTypeCheckedModificationConfig,
];
