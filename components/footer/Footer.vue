<script lang="ts" setup>
import LogoIcon from '~/assets/logo.svg';
import ArrowRight from '~/assets/arrow-right.svg';

import { SocialLinkItems } from '~/content/sociallinks/SocialLinks';
import SocialLinks from '~/components/sociallnks/SocialLinks.vue';
</script>

<template>
  <div class="w-full flex justify-center h-full bg-secondary-primary">
    <div class="w-full my-[90px] max-w-[1200px] flex justify-between">
      <div class="w-full flex flex-row justify-between items-center lg:items-start lg:flex-col">
        <div>
          <RouterLink to="/">
            <LogoIcon />
          </RouterLink>

          <div class="text-secondary-secondary my-[20px]">
            <p>Республика Казахстан</p>
            <p>город Актобе</p>
            <p>+7 000 000 00 00</p>
          </div>
        </div>

        <SocialLinks class="flex justify-between h-full flex-col lg:flex-row" :items="SocialLinkItems" />
      </div>

      <div class="max-w-[570px] flex flex-col justify-between hidden lg:flex">
        <p class="text-primary-primary text-[32px]">{{ $t("footer.message") }}</p>

        <div class="flex flex-row items-center border-primary-primary border-b-[2px]">
          <input class="bg-[transparent] text-primary-primary placeholder-primary-primary focus:outline-none w-full"
            placeholder="E-mail">
          <ArrowRight />
        </div>
      </div>
    </div>
  </div>
</template>