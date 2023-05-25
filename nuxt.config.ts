// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | Bitwo',
      link: [
        { rel: 'icon', href: 'https://arweave.net/yR5W4hOdA5C-YUKGpXIWx4_yMgtV6G_ZFSn8AdUGdM4' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Bitwo' },
        { name: 'application-name', content: 'Bitwo' },
        { name: 'msapplication-TileColor', content: '#22c55e' },
        { name: 'msapplication-TileImage', content: 'https://arweave.net/yR5W4hOdA5C-YUKGpXIWx4_yMgtV6G_ZFSn8AdUGdM4' },
        { name: 'theme-color', content: '#22c55e' },
      ],
    },
    baseURL: './',
    buildAssetsDir: 'assets',
    rootId: '__bitwo_links',
    rootTag: 'body'
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  tailwindcss: {
    viewer: false,
  },
  i18n: {
    baseUrl: 'https://tree.bitwo.io',
    locales: [
      {
        code: 'us',
        iso: 'en-US',
        name: 'English',
        nativeName: 'English',
        files: ['en-US.json'],
      },
      {
        code: 'br',
        iso: 'pt-BR',
        name: 'Portuguese',
        nativeName: 'Português',
        files: ['pt-BR.json'],
      },
    ],
    lazy: true,
    langDir: 'lang',
    strategy: 'prefix_except_default',
    defaultLocale: 'us',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'bitwo_i18n_redirected',
      redirectOn: 'root',
      cookieCrossOrigin: true,
    },
  },
});
