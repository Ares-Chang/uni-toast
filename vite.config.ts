/// <reference types="vitest" />

import path from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import UnoCSS from 'unocss/vite'
import Dts from 'vite-plugin-dts'

export default defineConfig({
  resolve: {
    alias: {
      '~/': `${path.resolve(__dirname, 'src')}/`,
    },
  },
  build: {
    target: 'ESNext',
    lib: {
      entry: 'src/index',
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  plugins: [
    Vue(),

    // https://github.com/antfu/unocss
    // see uno.config.ts for config
    UnoCSS(),

    /**
     * 打包时生成 .d.ts 文件
     *
     * @see https://github.com/qmhc/vite-plugin-dts
     */
    Dts({
      include: ['src/**/*.ts', 'src/**/*.vue'],
    }),
  ],

  // https://github.com/vitest-dev/vitest
  test: {
    environment: 'jsdom',
  },
})
