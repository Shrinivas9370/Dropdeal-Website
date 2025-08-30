
// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
// import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
    server: {
        host: "::",
        port: 8080,
    },
    plugins: [react()],
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
        alias: {
            "@": path.resolve(__dirname, "./src"),
        },
    },
})