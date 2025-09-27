import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  //base: 'https://Nico2530.github.io/TP3', (Segun el video de youtube)
  base: process.env.NODE_ENV === 'production' //(Segun Cloude)
    ? '/TP3/'
    : '/',
})
