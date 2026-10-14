import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base: './', // supaya jalan di subfolder GitHub Pages (/nama-repo/tailwind/)
  plugins: [
    tailwindcss(),
  ],
})
