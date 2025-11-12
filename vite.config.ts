import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import vercelAPI from 'vite-plugin-vercel-api';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), vercelAPI()],
});
