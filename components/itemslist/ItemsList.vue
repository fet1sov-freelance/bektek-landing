<script lang="ts" setup>
import ListItem from "~/components/itemslist/ListItem.vue";
import type { ItemList } from '~/types/itemlist/ItemList';

const props = defineProps<{
  items: Array<ItemList>
}>();
</script>

<template>
  <ul class="">
    <ListItem 
      v-for="item in props.items"
      :img-source="item.imgSource"
      :name="item.name"
      :category="item.category"
      />
  </ul>
</template>