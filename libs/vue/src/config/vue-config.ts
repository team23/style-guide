import { Linter } from 'eslint';
// @ts-expect-error no typings
import pluginVue from 'eslint-plugin-vue';

// remove preconfigured base setup since we use our own.
const vueRecommendedConfigWithoutSetup = pluginVue.configs['flat/recommended'].filter(
    (config: Linter.Config) => config.name !== 'vue:base:setup' && config.name !== 'vue:base:setup-for-vue'
);

const vueModificationConfig: Linter.Config = {
    name: 'team23/vue/core/modification',
    rules: {
        'vue/html-indent': ['error', 4],
    },
};

const vueOptionalConfig: Linter.Config = {
    name: 'team23/vue/core/optional',
    rules: {
        'vue/block-lang': [
            'error',
            {
                script: { lang: 'ts' },
                i18n: { lang: 'yaml' },
            },
        ],
        'vue/block-order': [
            'error',
            {
                order: ['script[setup]', 'script', 'template', 'style', 'i18n'],
            },
        ],
        'vue/block-tag-newline': 'error',
        'vue/component-api-style': 'error',
        'vue/component-name-in-template-casing': [
            'warn',
            'kebab-case',
            {
                registeredComponentsOnly: false,
            },
        ],
        'vue/custom-event-name-casing': 'error',
        'vue/define-emits-declaration': ['error', 'type-literal'],
        'vue/define-macros-order': [
            'error',
            {
                order: ['defineProps', 'defineEmits', 'defineModel', 'defineOptions', 'defineSlots'],
            },
        ],
        'vue/define-props-declaration': 'error',
        'vue/enforce-style-attribute': 'error',
        'vue/html-comment-content-newline': 'error',
        'vue/html-comment-content-spacing': 'error',
        'vue/html-comment-indent': ['error', 4],
        'vue/no-empty-component-block': 'error',
        'vue/no-multiple-objects-in-class': 'error',
        'vue/no-ref-object-reactivity-loss': 'warn',
        'vue/no-required-prop-with-default': 'error',
        'vue/no-root-v-if': 'warn',
        'vue/no-static-inline-styles': 'error',
        'vue/no-unused-emit-declarations': 'error',
        'vue/no-use-v-else-with-v-for': 'error',
        'vue/no-useless-mustaches': 'error',
        'vue/no-useless-v-bind': 'error',
        'vue/padding-line-between-blocks': 'error',
        'vue/prefer-separate-static-class': 'error',
        'vue/require-emit-validator': 'error',
        'vue/require-macro-variable-name': 'error',
        'vue/require-typed-ref': 'error',
        'vue/v-for-delimiter-style': 'error',
    },
};

export default [
    ...vueRecommendedConfigWithoutSetup,
    vueModificationConfig,
    vueOptionalConfig
];
