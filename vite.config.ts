import { copyFile } from 'node:fs/promises'
import { fileURLToPath, URL } from 'node:url'
import { join } from 'node:path'

import { defineConfig, type Plugin } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vueDevTools from 'vite-plugin-vue-devtools'

/**
 * Makes a direct link to a route work on GitHub Pages.
 *
 * Pages serves files, and /cv/portfolio is not a file — so it answered with
 * 404.html, which carried `<meta http-equiv="refresh" content="0;url=/cv/">`
 * and bounced every such visitor to the front page. Clicking through the nav
 * worked, so the problem was invisible day to day; sending anyone a link
 * straight to the portfolio did not.
 *
 * Serving index.html as the 404 is the usual answer: the application boots, the
 * router reads the path it was asked for, and the right view renders. The
 * status line is still 404, which search engines are entitled to believe, so
 * this is a fallback for an app, not a substitute for real routing.
 */
function spaFallback(): Plugin {
  return {
    name: 'spa-fallback',
    apply: 'build',
    async closeBundle() {
      const dist = fileURLToPath(new URL('./dist', import.meta.url))
      await copyFile(join(dist, 'index.html'), join(dist, '404.html'))
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx(), vueDevTools(), spaFallback()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
})
