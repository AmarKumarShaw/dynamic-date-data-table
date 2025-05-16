/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        status: {
          active: '#e4e7eb',
          processing: '#e9eaf6',
          paid: '#e9eaf6',
          overdue: '#fdf1e7',
          expired: '#fbe6ea',
          canceled: '#fbe6ea',
        },
        statusText: {
          active: '#4a5568',
          processing: '#5a67d8',
          paid: '#5a67d8',
          overdue: '#ed8936',
          expired: '#e53e3e',
          canceled: '#e53e3e',
        }
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}