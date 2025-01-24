import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { resolve } from "path";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/components/index.ts"),
      name: "urbi-ui",
      fileName: (format) => `urbi-ui.${format}.ts`,
    },
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
    }),
  ],
  base: process.env.NODE_ENV === "production" ? "/urbi-ui/" : "/",
});
