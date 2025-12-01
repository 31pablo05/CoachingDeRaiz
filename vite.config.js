import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { visualizer } from 'rollup-plugin-visualizer'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // Visualizer plugin para analizar bundle size (solo en análisis)
    process.env.ANALYZE && visualizer({
      open: true,
      filename: 'dist/stats.html',
      gzipSize: true,
      brotliSize: true,
    }),
    // Plugin para hacer el CSS no bloqueante
    {
      name: 'non-blocking-css',
      transformIndexHtml(html) {
        // Convert CSS links to non-blocking preload
        return html.replace(
          /<link rel="stylesheet" crossorigin href="([^"]+\.css)">/g,
          '<link rel="preload" as="style" href="$1" onload="this.onload=null;this.rel=\'stylesheet\'" crossorigin><noscript><link rel="stylesheet" href="$1" crossorigin></noscript>'
        );
      },
    },
  ].filter(Boolean),
  
  build: {
    // Enable minification con terser (más agresivo que esbuild)
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true, // Remove console.logs
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug'], // Remove specific console methods
        passes: 2, // Multiple passes for better compression
      },
      mangle: {
        safari10: true, // Fix Safari 10 loop bug
      },
    },
    
    // Optimize chunk splitting for better caching and parallel loading
    rollupOptions: {
      output: {
        // Manual chunks para optimizar caching y reducir tamaño inicial
        manualChunks(id) {
          // Core React chunks
          if (id.includes('node_modules')) {
            if (id.includes('react-dom')) {
              return 'react-dom';
            }
            if (id.includes('react')) {
              return 'react';
            }
            // Large libraries in separate chunks
            if (id.includes('framer-motion')) {
              return 'framer-motion';
            }
            if (id.includes('swiper')) {
              return 'swiper';
            }
            if (id.includes('react-icons')) {
              return 'react-icons';
            }
            // Other vendors
            return 'vendor';
          }
          
          // App chunks by feature
          if (id.includes('/components/About')) {
            return 'about';
          }
          if (id.includes('/components/Services')) {
            return 'services';
          }
          if (id.includes('/components/Contact')) {
            return 'contact';
          }
        },
        // Nombres de archivo con hash para cache busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
        
        // Configuración adicional para chunks pequeños
        experimentalMinChunkSize: 0, // Allow small chunks for better code splitting
      },
    },
    
    // Target modern browsers para código más pequeño
    target: 'es2015',
    
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 500, // Lower limit to encourage smaller chunks
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    cssMinify: true,
    
    // Disable source maps in production
    sourcemap: false,
    
    // Report compressed size
    reportCompressedSize: true,
    
    // Keep images and fonts separate, allow small assets to be inlined
    assetsInlineLimit: 4096, // 4KB threshold
  },
  
  // Optimize dependencies pre-bundling
  optimizeDeps: {
    include: ['react', 'react-dom'],
    // Force pre-bundle these deps
    force: false,
  },
  
  // Server configuration
  server: {
    // Enable compression in dev
    compress: true,
  },
})
