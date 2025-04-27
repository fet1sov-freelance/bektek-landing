<script lang="ts" setup>
import type { HeaderItem } from '~/types/header/HeaderItem';
import MenuIcon from '~/assets/menu.svg';

import LogoIcon from '~/assets/logo.svg';
import CrossIcon from '~/assets/cross.svg';

const props = defineProps<{
  items: Array<HeaderItem>
}>();

const menuShow: Ref<boolean> = ref(false);

function showMenu()
{
  menuShow.value = !menuShow.value;
}
</script>

<template>
  <button @click="showMenu()">
    <MenuIcon />
  </button>

  <div class="top-0 left-0 w-full h-[100vh] fixed z-99999 bg-secondary-primary" v-if="menuShow">
    <div class="flex flex-col p-[15px]">
      <div class="flex flex-row justify-between mt-[10px]">
        <LogoIcon class="w-[100px] lg:w-[unset]"/>
        <CrossIcon @click="showMenu()"/>
      </div>

      <ul class="flex-col flex mt-[30px]">
        <li class="my-[10px] text-[20px] text-primary-primary" v-for="item in props.items">
            <a :href="item.route" @click="showMenu()">{{ item.label }}</a>
        </li>
      </ul>
    </div>
  </div>
</template>