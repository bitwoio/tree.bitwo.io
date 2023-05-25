<template>
  <IconSocialFacebookMedia v-if="'facebook' === Icon" class="scale-100 hover:scale-110 text-[#4267B2]" />
  <IconSocialGithubMedia v-else-if="'github' === Icon" class="scale-100 hover:scale-110 text-[#171515] bg-white rounded-full p-[1.5px]" />
  <IconSocialInstagramMedia v-else-if="'instagram' === Icon" class="scale-100 hover:scale-110" />
  <IconSocialLinkedinMedia v-else-if="'linkedin' === Icon" class="scale-100 hover:scale-110 text-[#0A66C2]" />
  <IconSocialTwitterMedia v-else-if="'twitter' === Icon" class="scale-100 hover:scale-110 text-[#1DA1F2]" />
  <IconSocialExternalMedia v-else-if="'external' === Icon" class="scale-100 hover:scale-110" />
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()

const { icon } = toRefs(props)

const Icon = icon.value.toLocaleLowerCase()
</script>
