<script lang="ts" setup>
import { SeoDataConstants } from './content/seodata/SeoDataConstants';

useHead({
  title: SeoDataConstants.title,
  meta: [
    { name: 'description', content: SeoDataConstants.description }
  ],
  htmlAttrs: {
    class: 'scroll-smooth',
  },
  bodyAttrs: {
    class: 'overflow-x-hidden',
    style: "overflow-x: hidden"
  }
})
</script>

<template>
  <main class="w-full h-full overflow-x-hidden">
      <NuxtPage/>
  </main>
</template>