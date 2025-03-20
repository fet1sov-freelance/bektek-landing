<script lang="ts" setup>
import { HeaderItems } from '~/content/header/HeaderItems';
import WebStudioLogo from '~/assets/web-studio.svg';
</script>

<template>
  <div >
    <Header :items="HeaderItems"/>

    <ul class="flex flex-col items-center justify-center bg-secondary-primary">
      <li class="flex flex-col justify-center items-center w-full max-w-[1200px] h-[750px]">
        <div class="w-full">
          <WebStudioLogo/>

          <p class="text-primary-primary my-[15px] w-[50%] text-[16px] uppercase font-semibold">
            {{ $t("pages.landing.aboutus") }}
          </p>

          <div class="w-full flex flex-row justify-between">
            <RouterLink to="#">{{ $t("buttons.leaveblank") }}</RouterLink>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>