<script lang="ts" setup>
import type { ItemList } from "~/types/itemlist/ItemList";
const props = defineProps<ItemList>();
</script>

<template>
  <li class="w-[570px]">
      <div class="w-full">
        <img
          :src="props.imgSource"
          class="h-[570px] object-contain">
      </div>

      <div class="flex flex-row text-primary-primary justify-between mt-[10px]">
        <p>{{ props.index ? props.index + "." : ""}} {{ props.name }}</p>
        <p class="mr-[10px] text-primary-gray">{{ props.category }}</p>
      </div>
  </li>
</template>