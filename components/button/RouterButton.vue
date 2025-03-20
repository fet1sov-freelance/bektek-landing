<script lang="ts" setup>
const props = defineProps<{
  label: string
}>();
</script>

<template>
  <RouterLink 
    class="bg-accent-primary text-primary-primary font-semibold py-[15px] px-[50px]" 
    to="#">
    {{ props.label }}
  </RouterLink>
</template>