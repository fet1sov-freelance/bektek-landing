<script lang="ts" setup>
import { SeoDataConstants } from './content/seodata/SeoDataConstants';

useHead({
  title: SeoDataConstants.title,
  meta: [
    { name: 'description', content: SeoDataConstants.description }
  ]
})
</script>

<template>
  <main class="w-full h-full">
      <NuxtPage/>
  </main>
</template>