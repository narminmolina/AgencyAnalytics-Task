/// <reference types="vitest" />
import { defineConfig } from 'vite';

import react from '@vitejs/plugin-react-swc';
import tsconfigPaths from 'vite-tsconfig-paths';
import eslintPlugin from '@nabla/vite-plugin-eslint';

export default defineConfig({
  plugins: [react(), tsconfigPaths(), eslintPlugin()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: 'src/tests/_setup.ts',
  },
});
