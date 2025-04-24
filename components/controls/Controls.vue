<script lang="ts" setup>
import SmallArrowLeft from '~/assets/small-ar-left.svg';
import SmallArrowRight from '~/assets/small-ar-right.svg';
</script>

<template>
  <div class="flex flex-row mt-[10px]">
    <button
        @click="$emit('controlLeft')"
        class="flex flex-col justify-center border-primary-gray border-[1px] p-[5px] py-[12px] mr-[10px]">
      <SmallArrowLeft />
    </button>

    <button 
      @click="$emit('controlRight')"
      class="flex flex-col justify-center border-primary-gray border-[1px] p-[5px] py-[12px]">
      <SmallArrowRight />
    </button>
  </div>
</template>