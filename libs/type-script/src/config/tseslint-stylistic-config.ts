import tseslint from "typescript-eslint";

const stylisticTypeCheckedModificationConfig = tseslint.config({
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
});

export default [
    ...tseslint.configs.stylisticTypeChecked,
    ...stylisticTypeCheckedModificationConfig,
];
