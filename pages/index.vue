<script lang="ts" setup>
import { HeaderItems } from '~/content/header/HeaderItems';
import { SocialLinkItems } from '~/content/sociallinks/SocialLinks';

import WebStudioLogo from '~/assets/web-studio.svg';

import RouterButton from '~/components/button/RouterButton.vue';
import SocialLinks from '~/components/sociallnks/SocialLinks.vue';
</script>

<template>
  <div>
    <Header :items="HeaderItems"/>

    <ul class="flex flex-col items-center justify-center bg-secondary-primary h-full">
      <li class="w-full h-[750px]">
        <div class="w-full flex justify-center h-full bg-cover bg-[url(/background.png)]">
          <div class="w-full max-w-[1200px]">
            <WebStudioLogo/>

            <p class="text-primary-primary mb-[30px] w-[50%] text-[16px] uppercase font-semibold">
              {{ $t("pages.landing.aboutus") }}
            </p>

            <div class="w-full flex flex-row justify-between items-end">
              <RouterButton :label="$t('buttons.leaveblank')"/>
              <SocialLinks :items="SocialLinkItems" />
            </div>
          </div>
        </div>
      </li>

      <li class="w-full">
        
      </li>
    </ul>

    <Footer />
  </div>
</template>