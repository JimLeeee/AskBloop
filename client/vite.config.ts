import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import EnvironmentPlugin from 'vite-plugin-environment';
import { sentryVitePlugin } from '@sentry/vite-plugin';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:7878',
        changeOrigin: true,
        // rewrite: (path) => path.replace(/^\/api/, ''),
      },
    },
  },
  build: {
    sourcemap: true, // Source map generation must be turned on
  },
  envDir: '../.',
  plugins: [
    react(),
    EnvironmentPlugin(
      {
        ONBOARDING: 'true',
        API_URL: 'http://220.243.178.97:7878/api',
      },
      {
        defineOn: 'import.meta.env',
      },
    ),
    ...(process.env.SENTRY_AUTH_TOKEN
      ? [
          sentryVitePlugin({
            org: 'bloop-yr',
            project: 'bloop-frontend',
            authToken: process.env.SENTRY_AUTH_TOKEN,
            sourcemaps: {
              assets: './dist/**',
            },
            release: process.env.SENTRY_RELEASE_VERSION,
          }),
        ]
      : []),
  ],
  define: {
    __APP_SESSION__: (Math.random() * 100000).toString(),
  },
});
