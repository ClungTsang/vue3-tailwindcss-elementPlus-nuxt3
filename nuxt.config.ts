// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-07-10",
  devtools: { enabled: true },
  // 开发阶段的端口
  devServer: {
    port: 8962
  },
  modules: ["@element-plus/nuxt", "@nuxtjs/tailwindcss", "@vueuse/nuxt", "dayjs-nuxt"],
  app: {
    head: {
      title: "Nuxt3 + TailwindCSS + ElementPlus 的快速开发模板 ",
      charset: "utf-8",
      bodyAttrs: { style: "height: 100%; margin:0; padding: 0;" },
      link: [{ rel: "icon", href: "/favicon.ico", type: "images/x-icon" }],
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Nuxt3 + TailwindCSS + ElementPlus 的快速开发模板 ",
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
  // 参考文档：https://nitro.unjs.io/guide
  nitro: {
    // 预渲染规则：默认全部预渲染
    // 参考文档：https://nuxt.com/docs/getting-started/prerendering#selective-pre-rendering
    prerender: {
      // 允许爬取
      crawlLinks: false,
      // 生效规则
      routes: [
        "/robots.txt" // 生成利于搜索引擎爬取的规则文件
      ],
      // 忽略规则
      // ignore: ['/user'],
    },
  },
  //参考文档：https://nuxtseo.com/robots/api/config
  // 利于搜索引擎爬取的规则
  robots: {
    // allow: ["/"], // 自定义填写允许爬取的路径
    // disallow: ['/user'], // 自定义填写不允许爬取的路径
  },
  // 参考文档：https://nuxt.com.cn/docs/api/composables/use-runtime-config
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
  // 参考文档：https://nuxt.com/docs/getting-started/prerendering#selective-pre-rendering
  // 参考文档：https://nitro.unjs.io/config#routerules
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
    "~/assets/css/btn.css",
  ],
  postcss: {
    plugins: {
      autoprefixer: {},
      cssnano: {},
    },
  },
  // https://nuxt.com/modules/element-plus
  elementPlus: {
    // 设置默认语言：https://nuxt.com/modules/element-plus#defaultlocale
    defaultLocale: 'zh-CN'
  },
  // https://nuxt.com/modules/dayjs
  // 配置项：https://nuxt.com/modules/dayjs#configuration
  dayjs: {
    locales: ['zh-cn'],
    plugins: ['timezone'],
    defaultLocale: 'zh-cn',
    defaultTimezone: 'Asia/Shanghai'
  }
});
