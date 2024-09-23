// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-10",
  devtools: { enabled: true },
  // 开发阶段的端口
  devServer: {
    port: 8962
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss"],
  app: {
    head: {
      title: "Nuxt3 + Tailwindcss快速开发模板",
      charset: "utf-8",
      bodyAttrs: { style: "height: 100%; margin:0; padding: 0;" },
      link: [{ rel: "icon", href: "/favicon.ico", type: "images/x-icon" }],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "your description",
        },
        { name: "keywords", content: "your keywords" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { name: "applicable-device", content: "pc" },
        {
          name: "HIsheR", // 网站作者
          content: "HIsheR",
        },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge,chrome=1" }, // 浏览器优先打开谷歌和edge
        { "http-equiv": "Cache-Control", content: "no-transform" },
      ],
    },
  },
  nitro: {
    // 预渲染规则：默认全部预渲染
    prerender: {
      // 允许爬取
      crawlLinks: true,
      // 生效规则
      routes: [
        "/robots.txt"
      ],
      // 忽略规则
      // ignore: ['/user'],
    },
  },
  robots: {
    // allow: ["/"], // 自定义填写生效规则
    // disallow: ['/user'], // 自定义填写忽略规则
  },
  // 参考文档 https://nuxt.com.cn/docs/api/composables/use-runtime-config
  runtimeConfig: {
    // 只有服务端请求时可用私密属性
    // siteUrl: process.env.NUXT_SITE_URL,
    // 对客户端暴露的内容
    public: {
      proxyUrl: process.env.NUXT_PROXY_URL,
      baseUrl: process.env.NUXT_BASE_URL,
      siteUrl: process.env.NUXT_SITE_URL,
    },
  },
  // 指定路由配置
  routeRules: {
    // 请求转发
    "/prod-api/**": {
      proxy: `${process.env.NUXT_BASE_URL}/**`,
    },
    // 测试环境
    "/test-api/**": {
      proxy: `${process.env.NUXT_BASE_URL}/**`,
    },
    // 生产端
    "/prod-api/**": {
      proxy: `${process.env.NUXT_BASE_URL}/**`,
    },
  },
  // 参考文档 https://tailwindcss.nuxtjs.org/getting-started/installation#options
  tailwindcss: {
    // Options
    // https://tailwindcss.nuxtjs.org/getting-started/configuration
    cssPath: ["~/assets/css/tailwind.css", { injectPosition: "first" }], // 指定tailwind.css路径
    configPath: "tailwind.config",
    // exposeConfig: {
    //   level: 2,
    // },
    config: {},
    viewer: true,
  },
  // 导入第三方样式库
  css: [
    "~/assets/css/flex.css",
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {},
    },
  },
});
