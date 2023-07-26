import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "PassMan",
        short_name: "PassMan",
        background_color: "#000000",
        display: "standalone",
        scope: "/",
        start_url: "/",
        registerType: "autoUpdate",
        // injectRegister: 'auto',
        icons: [
          {
            src: "/192x192.png",
            sizes: "192x192",
            type: "image/png",
            purpose: "any maskable",
          },
          {
            src: "/256x256.png",
            sizes: "256x256",
            type: "image/png",
          },
          {
            src: "/384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "/512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        theme_color: "#ffffff",
      },
    }),
  ],
  test: {
    environment: "jsdom",
    setupFiles: ["./tests/setup.js"],
    testMatch: ["./tests/**/*.test.jsx"],
    globals: true,
  },
  resolve: {
    alias: [
    {
      find: './runtimeConfig',
      replacement: './runtimeConfig.browser', // ensures browser compatible version of AWS JS SDK is used
    },
  ]
}
});
