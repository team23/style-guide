import { Linter } from 'eslint';
import vueConfig from './config/vue-config.js';
import vueParser from 'vue-eslint-parser';
import tseslint from 'typescript-eslint';
// @ts-expect-error no typings
import pluginVue from 'eslint-plugin-vue';

interface ConfigOptions {
    /**
     * File types indicating which files the configuration should be applied to.
     * @default ['**\/*.vue']
     */
    files?: Array<string>;
}

const GLOB_VUE = '**/*.vue';

function createVueEslintConfig(options: ConfigOptions): Array<Linter.Config> {
    const { files = [GLOB_VUE] } = options || {};

    const setupConfig: Linter.Config = {
        name: 'team23/vue/setup',
        plugins: {
            vue: pluginVue,
        },
        // This allows Vue plugin to work with auto imports
        // https://github.com/vuejs/eslint-plugin-vue/pull/2422
        languageOptions: {
            sourceType: 'module',
            globals: {
                computed: 'readonly',
                defineEmits: 'readonly',
                defineExpose: 'readonly',
                defineProps: 'readonly',
                onMounted: 'readonly',
                onUnmounted: 'readonly',
                reactive: 'readonly',
                ref: 'readonly',
                shallowReactive: 'readonly',
                shallowRef: 'readonly',
                toRef: 'readonly',
                toRefs: 'readonly',
                watch: 'readonly',
                watchEffect: 'readonly',
            },
            parser: vueParser,
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
                extraFileExtensions: ['.vue'],
                parser: tseslint.parser,
            },
        },
        processor: pluginVue.processors['.vue'],
    };

    return tseslint.config(
        // do not set with extends, parser will not be configured correctly
        setupConfig,
        {
            files,
            extends: [...vueConfig],
        },
        ...fileBasedModificationConfig
    ) as Array<Linter.Config>;
}

const fileBasedModificationConfig = tseslint.config({
    name: 'team23/type-script/core/file-based/vite',
    files: ['vite.config.ts', 'vitest.config.ts'],
    rules: {
        'import/no-default-export': 'off',
    },
});

export { createVueEslintConfig };
