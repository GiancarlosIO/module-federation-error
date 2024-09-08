import { createModuleFederationConfig } from '@module-federation/modern-js';

export default createModuleFederationConfig({
  name: 'host',
  remotes: {
    remote:
      'frontend_admin_panel@http://localhost:3000/build/static/mf-manifest.json',
  },
  shared: {
    react: {
      singleton: true,
      requiredVersion: '18.2.0',
      eager: true,
    },
    'react-dom': {
      singleton: true,
      requiredVersion: '18.2.0',
      eager: true,
    },
  },
});
