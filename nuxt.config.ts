// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      titleTemplate: '%s | Bitwo',
      link: [
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-touch-icon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon/favicon-16x16.png' },
        { rel: 'manifest', href: '/favicon/site.webmanifest' },
        { rel: 'mask-icon', href: '/favicon/safari-pinned-tab.svg', color: '#22c55e' },
        { rel: 'shortcut icon', href: '/favicon/favicon.ico' },
      ],
      meta: [
        { name: 'apple-mobile-web-app-title', content: 'Bitwo' },
        { name: 'application-name', content: 'Bitwo' },
        { name: 'msapplication-TileColor', content: '#22c55e' },
        { name: 'msapplication-TileImage', content: '/favicon/mstile-144x144.png' },
        { name: 'msapplication-config', content: '/favicon/browserconfig.xml' },
        { name: 'theme-color', content: '#22c55e' },
      ],
    },
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/i18n'
  ],
  tailwindcss: {
    viewer: false,
  },
  i18n: {
    baseUrl: 'https://bitwo.io/tree/',
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
})
