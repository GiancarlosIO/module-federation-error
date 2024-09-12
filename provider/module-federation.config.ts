import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'frontend_admin_panel',
  filename: 'build/static/js/remoteEntry.js',
  manifest: {
    fileName: 'build/static/mf-manifest.json',
  },
  dts: true,
  exposes: {
    './button': './src/components/button.tsx',
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: '18.2.0',
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '18.2.0',
    },
    '@modern-js/runtime/router': {
      singleton: true,
      requiredVersion: '2.60.0',
    },
    'react-router-dom': {
      singleton: true,
    },
  },
});
