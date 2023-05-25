<template>
  <div>
    <label for="modal-select-language" class="btn flex-nowrap rounded-2xl normal-case">
      <svg class="inline-flex h-4 w-4 fill-current md:h-5 md:w-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 512 512"><path d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"></path><path d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"></path></svg>
      <span class="ml-1">
        {{ $t('language.name') }}
      </span>
    </label>

    <input type="checkbox" id="modal-select-language" class="modal-toggle" />
    <label for="modal-select-language" class="modal modal-bottom sm:modal-middle cursor-pointer">
      <label for="" class="modal-box relative">
        <label id="close-modal-select-language" for="modal-select-language" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="font-bold text-lg">Select your Language</h3>
        <ul class="menu menu-compact gap-1 p-3" tabindex="0">
          <li v-for="availableLocale in locales" :key="availableLocale.code">
            <button class="flex p-6" :class="locale === availableLocale.code ? 'active' : ''" @click.prevent.stop="changeLanguage(availableLocale.code)">
              <IconGetFlag :code="availableLocale.code" class="w-5 h-5 rounded-full shadow-md" />
              <span class="flex flex-1 justify-between">
                {{ availableLocale.nativeName }}
              </span>
            </button>
          </li>
        </ul>
      </label>
    </label>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n();
const changeLanguage = (code: string) => {
  setLocale(code);
  document.getElementById('close-modal-select-language')?.click();
};
</script>
