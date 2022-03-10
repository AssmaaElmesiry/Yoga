import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue()],
    server: {
        origin: 'http://localhost:3000/frontend/',
        host: '0.0.0.0',
        fs: {
            strict: true,
        }
    },
})