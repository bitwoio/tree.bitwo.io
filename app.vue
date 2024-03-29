<script setup lang="ts">
const { t, locale } = useI18n();
const localePath = useLocalePath();
const socialMedias = useSocialMedias();
const links = useLinks();
const year = new Date().getFullYear();
const author = t('app.author');
const head = useLocaleHead({
  addDirAttribute: true,
  identifierAttribute: 'id',
  addSeoAttributes: true
});
const cookieLocale = computed(() => {
  switch (locale.value) {
    case 'en':
    case 'us':
      return 'en';
    case 'es':
      return 'es';
    case 'fr':
      return 'fr';
    case 'pt':
    case 'br':
      return 'pt';
    default:
      return 'en';
  }
});
const options = {
  url: 'https://calendly.com/bitwo/consultancy',
}

useHead({
  title: t('app.title'),
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: t('app.description'),
    },
  ],
});

useSeoMeta({
  title: t('app.title'),
  description: t('app.description'),
  ogDescription: t('app.description'),
  ogTitle: t('app.title'),
  ogImage: '',
  twitterCard: 'summary_large_image',
});

useServerSeoMeta({
  title: t('app.title'),
  description: t('app.description'),
  ogDescription: t('app.description'),
  ogTitle: t('app.title'),
  ogImage: '',
  twitterCard: 'summary_large_image',
});
</script>

<template>
  <Html :lang="head.htmlAttrs?.lang" :dir="head.htmlAttrs?.dir">
      <Head>
        <Title>{{ $t('app.title') }}</Title>
        <template v-for="link in head.link" :key="link.id">
          <Link :id="link.id" :rel="link.rel" :href="link.href" :hreflang="link.hreflang" />
        </template>
        <template v-for="meta in head.meta" :key="meta.id">
          <Meta :id="meta.id" :property="meta.property" :content="meta.content" />
        </template>
      </Head>
      <Body>
        <CookieControl :locale="cookieLocale" />
        <div class="flex flex-col items-center justify-center container mx-auto">

          <div class="mt-8 relative">
            <a :href="localePath('/')" target="_blank" class="avatar">
              <div class="bg-logo rounded-full p-1">
                <IconTheLogo class="h-20 w-full" />
              </div>
            </a>
          </div>

          <div class="flex flex-col items-center justify-center gap-2 m-1">
            <h1 class="text-2xl font-bold">
              {{ $t('tree.title') }}
            </h1>

            <p class="text-lg text-center">
              {{ $t('tree.description') }}
            </p>

            <div class="flex flex-row justify-center gap-1 mb-5">
              <ModalSelectTheme class="px-2" />
              <ModalSelectLanguage class="px-2" />
            </div>

            <div class="flex flex-row justify-center gap-4 mb-4">
              <a v-for="socialMedia in socialMedias" :key="socialMedia.name" :href="socialMedia.url" target="_blank">
                <IconGetIcon :icon="socialMedia.name" class="fill-current w-6 h-6" />
              </a>
            </div>
          </div>

          <div class="flex flex-col gap-4 m-6">
            <a v-for="link in links" :key="link.name" :href="link.url" target="_blank" class="btn btn-primary btn-wide rounded-lg gap-2" :disabled="link.disabled">
              <div class="avatar">
                <div class="h-7 w-full rounded-full bg-white">
                  <img v-if="link.img" :src="link.img" class="scale-100 hover:scale-110" />
                  <IconGetIcon v-else-if="link.icon" :icon="link.icon" class="fill-current w-7 h-7 p-1" />
                </div>
              </div>
              {{ link.name }}
            </a>

            <button class="btn btn-primary btn-wide rounded-lg gap-2" onclick="calendly.showModal()">
              <div class="avatar">
                <div class="h-7 w-full rounded-full bg-white">
                  <IconGetIcon icon="calendly" class="fill-current w-7 h-7 p-1" />
                </div>
              </div>
              Schedule a meeting
            </button>
            <dialog id="calendly" class="modal modal-bottom sm:modal-middle">
              <form method="dialog" class="modal-box overflow-hidden">
                <CalendlyInlineWidget v-bind="options" />
              </form>
              <form method="dialog" class="modal-backdrop">
                <button>Close</button>
              </form>
            </dialog>
          </div>

          <footer class="footer footer-center p-4 m-12 text-base-content">
            <p>
              {{ $t('footer.rights', {year: year, copyright: author}) }}
            </p>
          </footer>
        </div>
      </Body>
  </Html>
</template>
