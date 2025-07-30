import path from 'node:path'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ mode }) => {
  const isDev = mode === 'development'

  return {
    plugins: [
      react(),
      tailwindcss(),
      svgr(),
      tsconfigPaths({
        // This ensures vite-tsconfig-paths uses the local tsconfig
        root: __dirname,
      }),
    ],
    optimizeDeps: {
      esbuildOptions: {
        jsx: 'automatic',
      },
      // In dev mode, exclude workspace packages to enable hot reload
      // In production, include them for pre-bundling
      include: isDev ? [] : ['@ysplitter/sdk', '@ysplitter/contracts'],
      exclude: isDev ? ['@ysplitter/sdk', '@ysplitter/contracts'] : [],
    },
    define: {
      global: 'globalThis',
    },
    server: {
      port: 3000,
    },
    build: {
      outDir: 'build',
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
        // In development, use source files directly
        // In production, Vite will use the package.json exports
        ...(isDev
          ? {
              '@ysplitter/sdk': path.resolve(__dirname, '../sdk/src/index.ts'),
              '@ysplitter/contracts': path.resolve(__dirname, '../contracts/src/wagmi.ts'),
            }
          : {}),
      },
      // This tells Vite to use the 'development' export condition in dev mode
      conditions: isDev ? ['development'] : [],
    },
  }
})
