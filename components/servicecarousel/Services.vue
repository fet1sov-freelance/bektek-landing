<script lang="ts" setup>
import ServiceItem from '~/components/servicecarousel/ServiceItem.vue';

import type { ServiceIt } from '~/types/services/ServiceItem';
const props = defineProps<{
    items: Array<ServiceIt>
}>();
</script>

<template>
  <ul class="w-full flex flex-row">
    <ServiceItem
      class="mr-[20px]"
      v-for="item in props.items"
      :img-source="item.imgSource"
      :title="item.title"
      :description="item.description"
      :price="item.price"/>
  </ul>
</template>