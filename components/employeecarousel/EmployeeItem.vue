<script lang="ts" setup>
import type { EmployeeData } from "~/types/employeedata/EmployeeData";

const props = defineProps<EmployeeData>();
</script>

<template>
  <li class="w-[300px]">
    <img 
    :src="props.photoSrc"
    class="w-full h-[330px] object-cover">

    <p class="text-[24px] text-primary-primary">{{ props.name }}</p>
    <p class="text-[14px] text-primary-primary">{{ props.position }}</p>
  </li>
</template>