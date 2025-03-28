import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
       '@components': path.resolve(__dirname, 'src/components'),
       '@reducers': path.resolve(__dirname, 'src/store/reducers'),
       '@helpers': path.resolve(__dirname, 'src/helpers'),
       '@assets': path.resolve(__dirname, 'src/assets'),
       '@hooks': path.resolve(__dirname, 'src/hooks'),
       '@store': path.resolve(__dirname, 'src/store')
    }
  },
  plugins: [react()],

});