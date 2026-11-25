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
      'vue/multi-word-component-names': 'off'
    }
  },
  {
    files: ['scripts/**', 'vite.config.js', 'eslint.config.js'],
    languageOptions: { globals: { ...globals.node } }
  }
]
