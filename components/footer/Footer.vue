<script lang="ts" setup>
import LogoIcon from '~/assets/logo.svg';

import { SocialLinkItems } from '~/content/sociallinks/SocialLinks';
import SocialLinks from '~/components/sociallnks/SocialLinks.vue';
</script>

<template>
  <div class="w-full flex justify-center h-full bg-secondary-primary">
    <div class="w-full my-[90px] max-w-[1200px] flex justify-between">
      <div>
        <RouterLink to="/">
          <LogoIcon />
        </RouterLink>

        <div class="text-secondary-secondary my-[20px]">
          <p>Республика Казахстан</p>
          <p>город Актобе</p>
          <p>+7 000 000 00 00</p>
        </div>

        <SocialLinks :items="SocialLinkItems" />
      </div>

      <div class="max-w-[570px]">
        <p class="text-primary-primary text-[32px]">{{ $t("footer.message") }}</p>
        
        
        <input placeholder="E-mail">
      </div>
    </div>
  </div>
</template>