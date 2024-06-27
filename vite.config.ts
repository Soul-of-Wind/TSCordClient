import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
import path from "path";
import stylelint from 'vite-plugin-stylelint';
import eslint from "vite-plugin-eslint";

// https://vitejs.dev/config/
export default defineConfig(async ({ mode }) => {
  const env = loadEnv('', process.cwd())

  return {
    plugins: [
      vue(),
      stylelint({
        fix: env.VITE_STYLELINT_AUTO_FIX === 'true',
        dev: mode === 'development'
      }),
      eslint()
    ],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    },

    // Vite options tailored for Tauri development and only applied in `tauri dev` or `tauri build`
    //
    // 1. prevent vite from obscuring rust errors
    clearScreen: false,
    // 2. tauri expects a fixed port, fail if that port is not available
    server: {
      port: 1420,
      strictPort: true,
      watch: {
        // 3. tell vite to ignore watching `src-tauri`
        ignored: ["**/src-tauri/**"],
      },
    },
  }
});
