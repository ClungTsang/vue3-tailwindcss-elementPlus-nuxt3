// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  compatibilityDate: '2024-07-10',
  app: {
    head: {
      charset: 'utf-8',
      bodyAttrs:{style: 'height: 100%; margin:0; padding: 0;' },
      meta: [
        {
          hid: "description", name: 'description', content: 'AutoY，智能出行领域从业者互动平台。汽车体验设计,HMI设计,UX设计,UI设计,动效设计,智能出行工具造型设计,交通工具体验设计,汽车造型设计,汽车软件开发,汽车研发,HMI培训,用户体验设计培训,UX设计培训,UI设计培训,体验设计培训。'
        },
        { name: 'keywords', content: '设计,设计师,设计社区,汽车用户体验设计,智能出行用户体验设计,智驾,智能座舱设计,HMI设计,仪表HMI设计,中控HMI设计,车载APP设计,车载软件设计,HUD设计,ARHUD设计,交互设计,UX设计,界面设计,UI设计,用户调研,汽车测评,汽车渲染,汽车工业设计,汽车品牌设计,汽车软件开发,汽车研发。' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'applicable-device', content: 'pc' },
        {
          name: "autoxyz", // 网站作者
          content: "AutoY，智能出行领域从业者互动平台。汽车体验设计,HMI设计,UX设计,UI设计,动效设计,智能出行工具造型设计,交通工具体验设计,汽车造型设计,汽车软件开发,汽车研发,HMI培训,用户体验设计培训,UX设计培训,UI设计培训,体验设计培训。",
        },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }, // 浏览器优先打开谷歌和edge
        { "http-equiv": "Cache-Control", content: "no-transform" },

      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }
      ],
    },
  },
  postcss: {
    plugins: {
      "autoprefixer": {},
      "cssnano": {}
    }
  },
})
