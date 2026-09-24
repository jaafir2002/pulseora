import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Relative base works on Vercel (root) and GitHub Pages (/pulseora/)
export default defineConfig({
  base: './',
  plugins: [react(), tailwindcss()],
})
