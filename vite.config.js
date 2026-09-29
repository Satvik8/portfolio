import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Keep CRA's output folder so existing hosting settings keep working
    outDir: "build",
  },
});
