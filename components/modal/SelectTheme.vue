<template>
  <div>
    <label for="modal-select-theme" class="btn flex-nowrap rounded-2xl normal-case">
      <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-flex h-5 w-5 stroke-current md:h-6 md:w-6">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path>
      </svg>
      <span class="ml-1">
        {{ $t('menu.theme') }}
      </span>
    </label>

    <input type="checkbox" id="modal-select-theme" class="modal-toggle" />
    <label for="modal-select-theme" class="modal modal-bottom sm:modal-middle cursor-pointer">
      <label for="" class="modal-box relative">
        <label id="close-modal-select-theme" for="modal-select-theme" class="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
        <h3 class="font-bold text-lg">Select your Language</h3>
        <ul class="menu menu-compact" tabindex="0">
          <li v-for="theme in themes" :key="theme.id" class="grid grid-cols-1">
            <button @click="toggleTheme(theme.id)" :data-theme="theme.id" class="rounded-lg bg-base-100 text-base-content w-full cursor-pointer font-sans p-2 m-2 overflow-hidden shadow-3xl">
              <div class="grid grid-cols-5 grid-rows-3">
                <div class="col-span-5 row-span-3 row-start-1 flex gap-2 py-3 px-4 items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" class="w-3 h-3" :class="isCurrentTheme(theme.id) ? `btn-theme-svg-${theme.id}` : `btn-theme-svg-${theme.id} invisible`"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"></path></svg>

                  <div class="flex-grow text-sm font-bold">
                    {{ theme.name }}
                  </div>

                  <div class="flex flex-shrink-0 flex-wrap gap-1 h-full">
                    <div class="bg-primary w-2 rounded"></div>
                    <div class="bg-secondary w-2 rounded"></div>
                    <div class="bg-accent w-2 rounded"></div>
                    <div class="bg-neutral w-2 rounded"></div>
                  </div>
                </div>
              </div>
            </button>
          </li>
        </ul>
      </label>
    </label>
  </div>
</template>

<script setup lang="ts">
import { toggleTheme, isCurrentTheme, loadTheme } from '~/utils/theme';

const themes = useThemes();

onMounted(() => {
  loadTheme();
});
</script>
