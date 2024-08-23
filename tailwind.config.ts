/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss"
// 自定义样式 https://tailwindcss.com/docs/configuration
export default <Partial<Config>>{
  content: ["./components/**/*.vue", "./layouts/**/*.vue", "./pages/**/*.vue"],
  theme: {
    // 放在extend下面是拓展样式
    extend: {
      screens: {
        "3xl": "2000px",
      },
      colors: {
        gray1: "#000000",
        gray2: "#333333",
        gray3: "#666666",
        gray4: "#999999",
        gray5: "#D9D9D9",
        "gray5-3": "#EAEAEA",
        gray6: "#EAEAEA",
        gray7: "#FAFAFA",
        gray8: "#FFFFFF",
        gray9: "#A8ABB2",

        brand1: "#007AFF",
        brand2: "#F2F7FF",

        alert: "#D62020",
        green: "#18C37C",
        purple: "#9000FF",
        orange: "#E89E42",

        "tips-color": "#999999",
        "border-color": "#D9D9D9",
      },
      padding: {
        first: "40px",
        two: "20px",
        base: "10px",
      },
      margin: {
        first: "40px",
        two: "20px",
        base: "10px",
      },
      gap: {
        first: "40px",
        two: "20px",
        base: "10px",
      },
      container: {
        center: true,
      },
      minWidth: {
        1024: "1024px",
      },
      maxWidth: {
        1024: "1024px",
        1280: "1280px",
      },
      fontSize: {
        large: ["24px", "30px"],
        first: ["20px", "26px"],
        two: ["16px", "22px"],
        base: ["14px", "20px"],
        tips: ["12px", "18px"],
      },
      fontFamily: {
        base: [
          "PingFang SC",
          "Microsoft YaHei",
          "system-ui",
          "Helvetica Neue",
          "Microsoft Yahei",
          "Hiragino Sans GB",
          "Heiti SC",
          "WenQuanYi Micro Hei",
        ],
      },
    },
    // 不在extend下面的话是覆盖默认样式
  },
}
