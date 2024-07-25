/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './composables/**/*.{js,vue,ts}',
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    // 参考文档 https://www.tailwindcss.cn/docs/installation
    extend: {
      colors: {
        'gray1': '#000000',
        'gray2': '#333333',
        'gray3': '#666666',
        'gray4': '#999999',
        'gray5': '#D9D9D9',
        'gray6': '#EAEAEA',
        'gray7': '#FAFAFA',
        'gray8': '#FFFFFF',

        'brand1': '#007AFF',
        'brand2': '#F2F7FF',
        
        'alert': '#D62020',
        'green': '#18C37C',
        'purple': '#9000FF',
        'orange': '#E89E42',
      }
    },
  },
}
