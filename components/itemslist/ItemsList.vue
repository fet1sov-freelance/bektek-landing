<script lang="ts" setup>
import ListItem from "~/components/itemslist/ListItem.vue";
import type { ItemList } from '~/types/itemlist/ItemList';

const props = defineProps<{
  items: Array<ItemList>
}>();
</script>

<template>
  <ul class="flex flex-col justify-center xl:grid grid-cols-1 xl:grid-cols-2 gap-4 [&:nth-child(2)]:my-[10px] items-center">
    <ListItem 
      v-for="(item, index) in props.items"
      :img-source="item.imgSource"
      :index="index + 1"
      :name="item.name"
      :category="item.category"
      />
  </ul>
</template>