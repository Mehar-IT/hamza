import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/new_portfolio/",
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 10000,
  },
});
