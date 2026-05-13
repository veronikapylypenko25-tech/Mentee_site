import { defineConfig } from 'vite';

export default defineConfig({
  // База должна быть именно такой, чтобы ссылки работали на GitHub Pages
  base: '/Mentee_site/',
  build: {
    outDir: 'dist',
    rollupOptions: {
      // Убедитесь, что этот файл существует в корне проекта
      input: 'index.html',
      output: {
        entryFileNames: 'assets/index.js',
        chunkFileNames: 'assets/[name].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) {
            return 'assets/index.css';
          }
          return 'assets/[name][extname]';
        },
      },
    },
  },
});
