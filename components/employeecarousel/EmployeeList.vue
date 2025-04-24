<script lang="ts" setup>
import EmployeeItem from "~/components/employeecarousel/EmployeeItem.vue";
import type { EmployeeData } from "~/types/employeedata/EmployeeData";

const props = defineProps<{
  items: Array<EmployeeData>
}>();
</script>

<template>
  <ul class="w-full flex flex-row">
    <EmployeeItem
      class="mr-[40px]"
      v-for="employee in props.items"
      :photo-src="employee.photoSrc"
      :name="employee.name"
      :position="employee.position"
      />
  </ul>
</template>