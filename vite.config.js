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
        // Manual chunks para optimizar caching
        manualChunks(id) {
          // Vendor chunks
          if (id.includes('node_modules')) {
            if (id.includes('react') || id.includes('react-dom')) {
              return 'react-vendor';
            }
            // Otros vendors en un chunk separado
            return 'vendor';
          }
        },
        // Nombres de archivo con hash para cache busting
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    
    // Target modern browsers para código más pequeño
    target: 'es2015',
    
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    
    // Enable CSS code splitting
    cssCodeSplit: true,
    cssMinify: true,
    
    // Disable source maps in production
    sourcemap: false,
    
    // Report compressed size
    reportCompressedSize: true,
    
    // Optimize asset inlining threshold
    assetsInlineLimit: 4096, // 4kb - inline smaller assets as base64
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
