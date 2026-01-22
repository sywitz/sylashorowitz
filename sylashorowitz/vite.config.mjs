import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png', '**/*.JPEG', '**/*.jpeg', '**/*.GIF', '**/*.gif', '**/*.AVI', '**/*.avi', '**/*.MP4', '**/*.mp4'],
  server: {
    host: '0.0.0.0', // Allow external connections
    port: 5173, // Default Vite port
    strictPort: false // Allow port to be changed if 5173 is taken
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
});

