<script lang="ts" setup>
const props = defineProps<{
  label: string,
  to: string
}>();
</script>

<template>
  <a 
    class="bg-accent-primary text-primary-primary font-semibold py-[15px] px-[50px]" 
    :href="props.to">
    {{ props.label }}
  </a>
</template>