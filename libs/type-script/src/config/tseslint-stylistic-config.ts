import tseslint from "typescript-eslint";
import { Linter } from 'eslint';
import FlatConfig = Linter.FlatConfig;

const stylisticTypeCheckedModificationConfig: FlatConfig = {
    name: 'team23/type-script/stylistic/type-checked-modification',
    rules: {
        "@typescript-eslint/array-type": [
            "error",
            {
                default: "generic",
            },
        ],

        "@typescript-eslint/dot-notation": [
            "error",
            {
                allowIndexSignaturePropertyAccess: true,
            },
        ],
        "@typescript-eslint/no-inferrable-types": [
            "error",
            {
                ignoreParameters: true,
            },
        ],
    },
};

export default [
    ...tseslint.configs.stylisticTypeChecked,
    stylisticTypeCheckedModificationConfig,
];
