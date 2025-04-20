<script lang="ts" setup>
import { HeaderItems } from '~/content/header/HeaderItems';
import { SocialLinkItems } from '~/content/sociallinks/SocialLinks';

import WebStudioLogo from '~/assets/web-studio.svg';

import RouterButton from '~/components/button/RouterButton.vue';
import SocialLinks from '~/components/sociallnks/SocialLinks.vue';

function sendApplication()
{

}
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

      <li class="w-full flex justify-center h-full bg-secondary-light">
        <div class="w-full my-[90px] max-w-[1200px] flex justify-between">
          <div>
            <form @onSubmit="sendApplication">
              <h2 class="text-primary-primary text-[64px] font-bold">{{ $t("application.title") }}</h2>
              <p class="text-primary-gray text-[24px]">{{ $t("application.subtitle") }}</p>

              <input 
              class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-4 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold" 
              :placeholder="$t('application.inputs.fio')">

              <input 
              class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-4 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold" 
              :placeholder="$t('application.inputs.email')">

              <input 
              class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-4 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold" 
              :placeholder="$t('application.inputs.phone')">


              <div class="flex my-[15px] flex-row justify-between items-center">
                <p class="uppercase font-bold text-[12px] text-secondary-dark">{{ $t('application.types.title') }}</p>

                <div class="flex flex-row">
                  <input 
                    type="radio"
                    class="h-6 w-6 checked:bg-green-500 text-green-500 p-3 my-4"
                    name="web"
                    >
                  <label class="text-secondary-secondary ml-[10px] flex items-center w-full text-[12px] font-bold" for="web">WEB</label>
                </div>
              </div>

              <input 
              class="w-full py-[15px] border-accent-primary border-2 text-primary-primary text-[600]"
              type="submit" 
              :value="$t('buttons.send')">

              <div class="flex flex-row">
                <input
                  type="checkbox"
                  name="confirm"
                  >

                <label 
                  class="text-secondary-secondary ml-[10px] flex items-center w-full text-[12px]" 
                  for="confirm">{{ $t("application.confirmation") }} &nbsp; <p class="underline">{{ $t("application.personaldata") }}</p></label>
              </div>

            </form>
          </div>
          
          <div>
            <img src="/photos/photo_1.png">
          </div>
        </div>
      </li>
    </ul>

    <Footer />
  </div>
</template>