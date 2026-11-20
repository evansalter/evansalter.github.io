import js from '@eslint/js'
import pluginVue from 'eslint-plugin-vue'
import globals from 'globals'

export default [
  { ignores: ['dist/', 'node_modules/'] },
  js.configs.recommended,
  ...pluginVue.configs['flat/vue2-essential'],
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: { ...globals.browser }
    },
    rules: {
      // Legacy component names predate this rule
      'vue/multi-word-component-names': 'off',
      // Vuetify 0.10 components are used with v-text, and lists filter with v-if
      // so the staggered nth-child animations line up
      'vue/no-v-text-v-html-on-component': 'off',
      'vue/no-use-v-if-with-v-for': 'off'
    }
  },
  {
    files: ['scripts/**', 'vite.config.js', 'eslint.config.js'],
    languageOptions: { globals: { ...globals.node } }
  }
]
