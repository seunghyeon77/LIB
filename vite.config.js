import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    middleware: [
      "/books",
      {
        target: "https://6a4f-168-131-35-101.ngrok-free.app",
        changeOrigin: true,
        pathRewrite: {
          "^/books": "", 
        },
      },
    ],
  },
});
