import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  // IMPORTANT: Change 'YOUR_REPO_NAME' to the exact name of your GitHub repository.
  // For example, if your repo is named "portfolio", this should be '/portfolio/'
  // If you are deploying to skpthiran.github.io directly, change this to '/'
  base: '/YOUR_REPO_NAME/', 
  
  plugins: [react(), tailwindcss()],
  
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  
  build: {
    outDir: 'dist',
  }
});
