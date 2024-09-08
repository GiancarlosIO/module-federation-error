/* eslint-disable no-process-exit */
import { appTools, defineConfig } from '@modern-js/app-tools';
import { moduleFederationPlugin } from '@module-federation/modern-js';
import NodePolyfillPlugin from 'node-polyfill-webpack-plugin';

const { API_URL, NODE_ENV, ASSET_PREFIX } = process.env;
const isProduction = NODE_ENV === 'production';
const STATIC_DIST_PATH = 'build/static';

// validate required environment variables
if (!API_URL) {
  console.error('> Missing API_URL environment variable.');
  process.exit(1);
}

// https://modernjs.dev/en/configure/app/usage
export default defineConfig<'rspack'>({
  dev: {
    port: 3000,
  },
  runtime: {
    router: true,
  },
  plugins: [
    appTools({
      bundler: 'experimental-rspack',
    }),
    moduleFederationPlugin(),
  ],
  output: {
    overrideBrowserslist: isProduction
      ? ['chrome 64', 'edge 79', 'firefox 67', 'opera 51', 'safari 12']
      : [
          'last 1 chrome version',
          'last 1 firefox version',
          'last 1 safari version',
        ],
    assetPrefix: ASSET_PREFIX,
    distPath: {
      root: 'dist',
      html: '/',
      js: `${STATIC_DIST_PATH}/js`,
      css: `${STATIC_DIST_PATH}/css`,
      svg: `${STATIC_DIST_PATH}/svg`,
      font: `${STATIC_DIST_PATH}/font`,
      wasm: `${STATIC_DIST_PATH}/wasm`,
      image: `${STATIC_DIST_PATH}/image`,
      media: `${STATIC_DIST_PATH}/media`,
      server: 'bundles',
      worker: 'worker',
    },
    disableTsChecker: true,
  },
  html: {
    disableHtmlFolder: true,
    template: './src/index.html',
    templateParameters: {
      isProduction,
    },
  },
  tools: {
    devServer: {
      proxy: {
        '/api': API_URL as string,
      },
    },
    rspack: config => {
      config.plugins?.push(new NodePolyfillPlugin());

      return config;
    },
  },
});
