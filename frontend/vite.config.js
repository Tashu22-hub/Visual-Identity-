import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 4000, // Preferred port
    strictPort: false, // Allows switching if 4000 is busy
    host: "localhost",
    hmr: {
      protocol: "ws",
      host: "localhost",
    },
  },
});
