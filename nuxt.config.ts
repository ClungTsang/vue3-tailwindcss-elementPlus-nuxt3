// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-07-10',
  devtools: { enabled: true },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: '标签栏网站名称',
      charset: 'utf-8',
      bodyAttrs: { style: 'height: 100%; margin:0; padding: 0;' },
      link: [{ rel: 'icon', href: '/favicon.ico', type: "images/x-icon" }],
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
    },
  },
  // https://nuxt.com.cn/docs/api/composables/use-runtime-config
  runtimeConfig: {
    // 对客户端暴露的内容
    public: {
      proxyUrl: process.env.NUXT_PROXY_URL,
    }
  },
  // 指定路由配置
  routeRules: {
    // 请求转发
    '/prod-api/**': {
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
