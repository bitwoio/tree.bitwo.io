<template>
  <IconFlagsFlagUS v-if="'us' === Icon" />
  <IconFlagsFlagFR v-else-if="'fr' === Icon" />
  <IconFlagsFlagES v-else-if="'es' === Icon" />
  <IconFlagsFlagBR v-else-if="'br' === Icon" />
</template>

<script setup lang="ts">
const props = defineProps<{
  code: string
}>()

const { code } = toRefs(props)

const Icon = code.value.toLocaleLowerCase()
</script>
