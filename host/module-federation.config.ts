import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote:
      'frontend_admin_panel@http://localhost:3000/build/static/mf-manifest.json',
  },
  dts: true,
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
