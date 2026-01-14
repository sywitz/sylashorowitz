import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.JPG', '**/*.jpg', '**/*.PNG', '**/*.png', '**/*.JPEG', '**/*.jpeg', '**/*.GIF', '**/*.gif', '**/*.AVI', '**/*.avi', '**/*.MP4', '**/*.mp4'],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js'
  }
});

