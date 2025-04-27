<script lang="ts" setup>
import BurgerMenu from '~/components/burgermenu/BurgerMenu.vue';

import type { HeaderItem } from '~/types/header/HeaderItem';
import LogoIcon from '~/assets/logo.svg';

const props = defineProps<{
  items: Array<HeaderItem>
}>();

const headerStyles = ref("");

function handleScroll(event: any)
{
    if(window.scrollY > 70){
        headerStyles.value = "bg-secondary-primary";
    } else {
        headerStyles.value = "";
    }
}

if (import.meta.client)
{ 
    window.addEventListener('scroll', handleScroll);
}

</script>

<template>
  <nav class="fixed flex flex-row justify-center w-full z-[99999] transition-all ease-in duration-300" :class="headerStyles">
      <div class="flex flex-row items-center justify-between w-full max-w-[1200px] h-[80px] lg:h-[135px] px-[10px] lg:px-[0]">
        <div>
          <RouterLink to="/">
            <LogoIcon class="w-[100px] lg:w-[unset]"/>
          </RouterLink>
        </div>

        <ul class="flex-row hidden lg:flex">
          <li class="mx-[15px] text-primary-primary" v-for="item in props.items">
            <a :href="item.route">{{ item.label }}</a>
          </li>
        </ul>

        <div class="flex lg:hidden">
          <BurgerMenu 
          :items="props.items"
          />
        </div>
      </div>
    </nav>
</template>