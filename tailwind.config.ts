import type { Config } from 'tailwindcss'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './components/**/*.vue',
    './layouts/**/*.vue',
    './pages/**/*.vue',
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
      },
    },
    // 参考文档 https://www.tailwindcss.cn/docs/font-family#using-custom-values
    fontFamily: {
      'sans': ['PingFang SC', 'Microsoft YaHei']
    },
    // 参考文档 https://tailwindcss.com/docs/font-size#customizing-your-theme
    fontSize: {
      'first': ['20px', '26px'],
      'two': ['16px', '22px'],
      'base': ['14px', '20px'],
      'tips': ['12px', '18px']
    }
  },
} satisfies Config
