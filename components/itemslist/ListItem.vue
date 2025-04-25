<script lang="ts" setup>
import type { ItemList } from "~/types/itemlist/ItemList";
const props = defineProps<ItemList>();
</script>

<template>
  <li class="w-[300px] xl:w-[570px]">
      <div class="w-full">
        <img
          :src="props.imgSource"
          class="h-[300px] xl:h-[570px] object-contain">
      </div>

      <div class="flex flex-col xl:flex-row text-primary-primary justify-between mt-[10px]">
        <p>{{ props.index ? props.index + "." : ""}} {{ props.name }}</p>
        <p class="mr-[10px] text-primary-gray">{{ props.category }}</p>
      </div>
  </li>
</template>