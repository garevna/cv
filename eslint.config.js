import pluginVue from 'eslint-plugin-vue'
import vueTsEslintConfig from '@vue/eslint-config-typescript'
import pluginVitest from '@vitest/eslint-plugin'
import skipFormatting from '@vue/eslint-config-prettier/skip-formatting'

export default [
  {
    name: 'app/files-to-lint',
    files: ['**/*.{ts,mts,tsx,vue}'],
  },

  {
    name: 'app/files-to-ignore',
    ignores: ['**/dist/**', '**/dist-ssr/**', '**/coverage/**'],
  },

  ...pluginVue.configs['flat/essential'],
  ...vueTsEslintConfig(),
  
  {
    ...pluginVitest.configs.recommended,
    files: ['src/**/__tests__/*'],
    rules: {
      ...pluginVitest.configs.recommended.rules,
      // Vitest takes a message as expect's second argument, and the tests use
      // it heavily — "Roles manager opens nothing" is worth far more than
      // "expected false to be true" when a data check fails. The rule defaults
      // to allowing one argument, so it is told the real limit.
      'vitest/valid-expect': ['error', { maxArgs: 2 }],
    },
  },

  {
    // Route views are named after their route — About, Skills, Portfolio,
    // Reviews — and that is the convention, not an oversight. Renaming them to
    // satisfy a rule meant for components in a shared namespace would make the
    // router harder to read for nothing.
    name: 'app/route-views',
    files: ['src/views/*.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  {
    // The rule reports at file level, so it cannot be switched off from inside
    // the component. There is exactly one roulette and it is rendered in
    // exactly one place, so the name is not ambiguous — rename it to
    // SkillsRoulette if that ever stops being true.
    name: 'app/roulette',
    files: ['src/components/Roulette.vue'],
    rules: {
      'vue/multi-word-component-names': 'off',
    },
  },

  skipFormatting,
]
