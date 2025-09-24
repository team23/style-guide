import tseslint from 'typescript-eslint';
import angulareslint from 'angular-eslint';

const typescriptConfig = tseslint.config({
    name: 'team23/angular/core/typescript',
    files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
    extends: angulareslint.configs.tsRecommended,
    processor: {
        ...angulareslint.processInlineTemplates,
        // Eslint flat config processors fail without a meta.name property
        meta: {
            name: 'angular-eslint-process-inline-templates',
        },
    },
    languageOptions: {
        parserOptions: {
            project: ['tsconfig.?*.json'],
            createDefaultProgram: true,
        },
    },
    rules: {
        '@angular-eslint/no-forward-ref': 'off',
        '@angular-eslint/component-class-suffix': ['error', { suffixes: ['Component', 'View'] }],
        '@angular-eslint/component-max-inline-declarations': 'error',
        '@angular-eslint/component-selector': 'error',
        '@angular-eslint/contextual-lifecycle': 'error',
        '@angular-eslint/directive-class-suffix': ['error', { suffixes: ['Directive'] }],
        '@angular-eslint/directive-selector': 'error',
        '@angular-eslint/no-attribute-decorator': 'error',
        '@angular-eslint/no-conflicting-lifecycle': 'error',
        '@angular-eslint/no-input-prefix': 'error',
        '@angular-eslint/no-input-rename': 'error',
        '@angular-eslint/no-inputs-metadata-property': 'error',
        '@angular-eslint/no-lifecycle-call': 'error',
        '@angular-eslint/no-output-native': 'error',
        '@angular-eslint/no-output-on-prefix': 'error',
        '@angular-eslint/no-output-rename': 'error',
        '@angular-eslint/no-outputs-metadata-property': 'error',
        '@angular-eslint/no-pipe-impure': 'error',
        '@angular-eslint/no-queries-metadata-property': 'error',
        '@angular-eslint/prefer-on-push-component-change-detection': 'error',
        '@angular-eslint/prefer-output-readonly': 'error',
        '@angular-eslint/use-component-selector': 'error',
        '@angular-eslint/use-component-view-encapsulation': 'error',
        '@angular-eslint/use-lifecycle-interface': 'error',
        '@angular-eslint/use-pipe-transform-interface': 'error',
        '@angular-eslint/prefer-signals': ['error'],
        "@typescript-eslint/unbound-method": ["error", { ignoreStatic: true }],
    },
});

const templateConfig = tseslint.config({
    name: 'team23/angular/core/template',
    files: ['**/*.html'],
    extends: angulareslint.configs.templateRecommended,
    rules: {
        '@angular-eslint/template/i18n': 'off',
        '@angular-eslint/template/no-positive-tabindex': 'error',
        '@angular-eslint/template/banana-in-box': 'error',
        '@angular-eslint/template/no-any': 'error',
        '@angular-eslint/template/no-autofocus': 'error',
        '@angular-eslint/template/no-distracting-elements': 'error',
        '@angular-eslint/template/no-negated-async': 'error',
        '@angular-eslint/template/conditional-complexity': 'error',
        '@angular-eslint/template/cyclomatic-complexity': 'error',
        '@angular-eslint/template/no-call-expression': 'error',
        '@angular-eslint/template/use-track-by-function': 'error',
        '@angular-eslint/template/mouse-events-have-key-events': 'error',
        '@angular-eslint/template/click-events-have-key-events': 'error',
        '@angular-eslint/template/alt-text': 'error',
        '@angular-eslint/template/elements-content': 'error',
        '@angular-eslint/template/interactive-supports-focus': 'error',
        '@angular-eslint/template/label-has-associated-control': 'error',
        '@angular-eslint/template/role-has-required-aria': 'error',
        '@angular-eslint/template/table-scope': 'error',
        '@angular-eslint/template/valid-aria': 'error',
        '@angular-eslint/template/prefer-self-closing-tags': 'error',
        '@angular-eslint/template/attributes-order': [
            'error',
            {
                alphabetical: false,
                order: [
                    'STRUCTURAL_DIRECTIVE',
                    'TEMPLATE_REFERENCE',
                    'ATTRIBUTE_BINDING',
                    'INPUT_BINDING',
                    'TWO_WAY_BINDING',
                    'OUTPUT_BINDING',
                ],
            },
        ],
    },
});

export default [
    ...typescriptConfig,
    ...templateConfig,
];
