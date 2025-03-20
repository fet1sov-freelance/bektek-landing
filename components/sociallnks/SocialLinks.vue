<script lang="ts" setup>
import type { SocialLink } from '~/types/sociallinks/SocialLink';

const props = defineProps<{
  items: Array<SocialLink>
}>();
</script>

<template>
  <ul class="flex flex-row">
    <li class="mx-[10px]" v-for="item in props.items">
      <a :href="item.link">
        <component :is="item.icon"></component>
      </a>
    </li>
  </ul>
</template>