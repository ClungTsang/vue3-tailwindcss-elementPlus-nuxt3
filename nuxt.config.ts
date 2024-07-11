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
          hid: "description", name: 'description', content: 'description'
        },
        { name: 'keywords', content: 'keywords' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'applicable-device', content: 'pc' },
        {
          name: "HIsheR", // 网站作者
          content: "HIsheR",
        },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }, // 浏览器优先打开谷歌和edge
        { "http-equiv": "Cache-Control", content: "no-transform" },

      ],
      link: [
        { rel: 'shortcut icon', href: '/favicon.ico', type: 'image/x-icon' }
      ],
    },
  },
  // 指定路由配置
  routeRules: {
    // 请求转发
    '/proxy/**': {
      proxy: `${process.env.NUXT_BASE_URL}/**`,
    },
  },
  postcss: {
    plugins: {
      "autoprefixer": {},
      "cssnano": {}
    }
  },
})
