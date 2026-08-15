import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],
  // Sets the base path to your repository name.
  // This ensures assets (images, scripts) load correctly at https://yitzhach.github.io/newTEST/
  base: '/newTEST/', 
});