import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import copy from 'rollup-plugin-copy';
import gzipPlugin from 'rollup-plugin-gzip';
import eslintPlugin from 'vite-plugin-eslint';
import stylelintPlugin from 'vite-plugin-stylelint';
import AutoImport from 'unplugin-auto-import/vite';
import { ViteMinifyPlugin } from 'vite-plugin-minify';
import Unfonts from 'unplugin-fonts/vite';
import type { UserConfig } from 'vite';
import imageMinPlugin from './vite/image-min';
import pwaPlugin from './vite/pwa';

export default defineConfig(({ mode }): UserConfig => {
  const env = loadEnv(mode, process.cwd(), '');
  const port = env.PORT || 8001;

  return {
    base: '/',
    build: {
      target: 'esnext',
      outDir: 'public',
      emptyOutDir: true,
      manifest: true,
      cssCodeSplit: true,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          entryFileNames: 'app.[hash].js',
          chunkFileNames: 'app.[hash].chunk.js',
          assetFileNames: ({ name }) => {
            return 'assets/[name]-[hash][extname]';
          },
        },
      },
    },
    mode: env.NODE_ENV,
    server: {
      host: '0.0.0.0',
      port: port as number,
    },
    define: {
      APP_URL: JSON.stringify(env.APP_URL),
      NODE_ENV: JSON.stringify(env.NODE_ENV),
      PORT: JSON.stringify(env.PORT),
    },
    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        directives: path.resolve(__dirname, 'src/directives'),
        containers: path.resolve(__dirname, 'src/containers'),
        config: path.resolve(__dirname, 'src/config'),
        api: path.resolve(__dirname, 'src/api'),
        store: path.resolve(__dirname, 'src/store'),
        types: path.resolve(__dirname, 'src/types'),
        styles: path.resolve(__dirname, 'src/styles'),
        pages: path.resolve(__dirname, 'src/pages'),
        i18n: path.resolve(__dirname, 'i18n'),
        utils: path.resolve(__dirname, 'src/utils'),
        assets: path.resolve(__dirname, 'assets'),
        src: path.resolve(__dirname, 'src'),
        modals: path.resolve(__dirname, 'src/modals'),
        enums: path.resolve(__dirname, 'src/enums'),
        mixins: path.resolve(__dirname, 'src/mixins'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        plugins: path.resolve(__dirname, 'src/plugins'),
      },
      extensions: ['.tsx', '.ts', '.jsx', '.js', '.vue', '.json'],
    },
    plugins: [
      vue(),
      vueJsx({
        transformOn: true,
      }),
      ViteMinifyPlugin(),
      eslintPlugin(),
      stylelintPlugin(),
      imageMinPlugin,
      pwaPlugin,
      gzipPlugin({
        filter: /\.(js|css)$/i,
        fileName: '',
      }),
      copy({
        verbose: true,
        hook: 'writeBundle',
        targets: [
          {
            src: 'assets/fonts',
            dest: 'public/assets',
          },
          {
            src: ['assets/images/flags.png'],
            dest: 'public/assets/images',
          },
        ],
      }),
      AutoImport({
        vueTemplate: true,
        eslintrc: {
          enabled: true,
        },
        imports: [
          'vue',
          {
            'lodash-es': [
              'get',
              'head',
              'map',
              'size',
              'pick',
              'isEmpty',
              'isEqual',
              'isBoolean',
              'isNumber',
              'keyBy',
              'omit',
              'forEach',
              'isString',
              'isObject',
              'trim',
              'isArray',
              'isDate',
              'isNull',
              'keys',
              'mapValues',
              'noop',
              'has',
              'assign',
              'pickBy',
              'toArray',
              'omitBy',
              'isUndefined',
              'debounce',
              'intersection',
            ],
          },
          {
            classnames: [['default', 'classNames']],
          },
          {
            '@vueuse/core': ['useCssVar'],
          },
          {
            'vue-chartjs': ['Bar', 'Doughnut', 'Line'],
          },
          {
            from: 'chart.js',
            imports: ['Chart'],
            type: true,
          },
          {
            from: 'vue',
            imports: [
              'PropType',
              'Slot',
              ['App', 'VueApp'],
              'VNode',
              'StyleValue',
              'Component',
            ],
            type: true,
          },
        ],
        dts: 'src/types/auto-imports.d.ts',
      }),
      Unfonts({
        google: {
          preconnect: true,
          injectTo: 'head-prepend',
          families: [
            'Inter',
            {
              name: 'Inter',
              styles: 'wght@400;500;600;700',
              defer: true,
            },
          ],
        },
        custom: {
          families: [
            {
              name: 'font-icon',
              local: 'font-icon',
              src: 'assets/fonts/font-icon.ttf',
            },
            {
              name: 'font-icon',
              local: 'font-icon',
              src: 'assets/fonts/font-icon.woff',
            },
            {
              name: 'font-icon',
              local: 'font-icon',
              src: 'assets/fonts/font-icon.eot',
            },
          ],
        },
      }),
    ],
  };
});
