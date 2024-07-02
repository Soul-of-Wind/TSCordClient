// @ts-check
import pluginVue from 'eslint-plugin-vue';
import eslint from '@eslint/js';
import tseslint from 'typescript-eslint';

export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.strict,
    ...pluginVue.configs['flat/base'],
    {
        files: ['**/*.ts'],
        ignores: ['*.config.{ts,js}'],
        languageOptions: {
            parserOptions: {

                parser: tseslint.parser,
                project: './tsconfig.json',
                extraFileExtensions: ['.vue'],
                sourceType: 'module',
            },
        },
        rules: {
            semi: 'error',
            "@typescript-eslint/naming-convention": "error",
            "@typescript-eslint/no-explicit-any": "error",
            quotes: ['error', 'single'],
        }

    },
    {
        ignores: ['**/vite-env.d.ts']
    },
);

