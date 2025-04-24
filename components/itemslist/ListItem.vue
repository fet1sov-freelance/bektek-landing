<script lang="ts" setup>
import type { ItemList } from "~/types/itemlist/ItemList";
const props = defineProps<ItemList>();
</script>

<template>
  <li>
      <img
      :src="props.imgSource"
      class="w-[570px] h-[570px] object-contain">

      <div class="flex flex-row">
        <p>{{ props.name }}</p>
        <p>{{ props.category }}</p>
      </div>
  </li>
</template>