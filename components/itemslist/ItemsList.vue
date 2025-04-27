<script lang="ts" setup>
import ListItem from "~/components/itemslist/ListItem.vue";
import type { ItemList } from '~/types/itemlist/ItemList';

const props = defineProps<{
  items: Array<ItemList>
}>();
</script>

<template>
  <ul class="flex flex-col justify-center xl:flex-wrap xl:flex-row items-center">
    <ListItem 
      v-for="(item, index) in props.items"
      class="p-[10px] odd:mt-[-80px] even:mt-[60px]"
      :img-source="item.imgSource"
      :index="index + 1"
      :name="item.name"
      :category="item.category"
      />
  </ul>
</template>