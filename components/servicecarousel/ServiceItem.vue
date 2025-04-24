<script lang="ts" setup>
import type { ServiceIt } from '~/types/services/ServiceItem';
const props = defineProps<ServiceIt>();
</script>

<template>
  <li class="bg-primary-primary w-[300px] min-w-[300px] min-h-[400px] h-[400px]">
    <img 
    class="w-full h-[220px] object-cover"
    :src="props.imgSource">

    <div class="flex flex-col px-[15px] py-[10px]">
      <h3 class="text-[24px]">{{ props.title }}</h3>
      <p>{{ $t("preposition.from") }} {{ props.price }}₽</p>
      <p class="text-[14px]">{{ props.description }}</p>
    </div>
  </li>
</template>