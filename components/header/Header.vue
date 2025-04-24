<script lang="ts" setup>
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
    <div class="flex flex-row items-center justify-between w-full max-w-[1200px] h-[135px]">
      <div>
        <RouterLink to="/">
          <LogoIcon/>
        </RouterLink>
      </div>

      <ul class="flex flex-row">
        <li class="mx-[15px] text-primary-primary" v-for="item in props.items">
          <RouterLink :to="item.route">{{ item.label }}</RouterLink>
        </li>
      </ul>
    </div>
  </nav>
</template>