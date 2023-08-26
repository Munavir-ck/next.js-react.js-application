/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'banner-bg': "url('/Assets/banner.jpg')",
        'content-bg': "url('/Assets/image.jpg')",
        'list-bg': "url('/Assets/list.jpg')",
        'perfooter-bg': "url('/Assets/3306603.jpg')",
        'footer-bg': "url('/Assets/party.jpg')"
      },
      height: {
        'height-500': '1000px',
        'height-300': '500px'
      },
     
      
      
    },
  },
  plugins: [],
}
