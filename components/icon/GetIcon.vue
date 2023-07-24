<template>
  <IconSocialFacebookMedia v-if="'facebook' === Icon" class="scale-100 hover:scale-110 text-[#4267B2]" />
  <IconSocialGithubMedia v-else-if="'github' === Icon" class="scale-100 hover:scale-110 text-[#171515] bg-white rounded-full p-[1.5px]" />
  <IconSocialInstagramMedia v-else-if="'instagram' === Icon" class="scale-100 hover:scale-110" />
  <IconSocialLinkedinMedia v-else-if="'linkedin' === Icon" class="scale-100 hover:scale-110 text-[#0A66C2]" />
  <IconSocialTwitterMedia v-else-if="'twitter' === Icon" class="scale-100 hover:scale-110 text-[#1DA1F2]" />
  <IconSocialTelegramMedia v-else-if="'telegram' === Icon" class="scale-100 hover:scale-110 text-[#0088CC]" />
  <IconSocialWhatsappMedia v-else-if="'whatsapp' === Icon" class="scale-100 hover:scale-110 text-[#25D366]" />
  <IconSocialCalendlyMedia v-else-if="'calendly' === Icon" class="scale-100 hover:scale-110 text-[#006bff]" />
  <IconTheLogo v-else-if="'bitwo' === Icon" class="scale-100 hover:scale-110 bg-logo" />
  <IconSocialExternalMedia v-else class="scale-100 hover:scale-110" />
</template>

<script setup lang="ts">
const props = defineProps<{
  icon: string
}>()

const { icon } = toRefs(props)

const Icon = icon.value.toLocaleLowerCase()
</script>
