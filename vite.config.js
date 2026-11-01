import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Vite is the tool that runs your app while you develop and bundles it for release.
export default defineConfig({
  plugins: [react()],
});
