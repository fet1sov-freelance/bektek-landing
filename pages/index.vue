<script lang="ts" setup>
import { HeaderItems } from '~/content/header/HeaderItems';
import { SocialLinkItems } from '~/content/sociallinks/SocialLinks';

import WebStudioLogo from '~/assets/web-studio.svg';

import SmallArrowLeft from '~/assets/small-ar-left.svg';
import SmallArrowRight from '~/assets/small-ar-right.svg';

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

      <li class="w-full flex justify-center h-full bg-secondary-primary">
        <div class="w-full my-[90px] max-w-[1200px] flex flex-col justify-between">
          <h2 class="text-[42px] text-primary-primary font-bold">{{ $t("header.do") }}</h2>

          <div class="flex flex-col">
            <div class="w-full flex flex-col justify-between max-w-[240px]">
              <button 
              class="w-full py-[15px] border-accent-primary border-2 text-primary-primary text-[600] transition-all hover:bg-accent-primary"
              type="submit">{{ $t('buttons.contact') }}</button>

              <p class="text-[600] text-primary-primary">{{ $t("sections.do.message") }}</p>

              <div class="flex flex-row mt-[10px]">
                <button class="flex flex-col justify-center border-primary-gray border-[1px] p-[5px] py-[12px] mr-[10px]">
                  <SmallArrowLeft/>
                </button>

                <button class="flex flex-col justify-center border-primary-gray border-[1px] p-[5px] py-[12px]">
                  <SmallArrowRight/>
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>

      <li class="w-full flex justify-center h-full bg-secondary-light">
        <div class="w-full my-[90px] max-w-[1200px] flex justify-between">
          <div class="w-full max-w-[570px]">
            <ul class="w-full h-full flex flex-col justify-between">
              <li class="flex flex-col">
                <p class="text-primary-primary text-[64px]">20</p>
                <p class="text-primary-gray text-[14px]">{{ $t("projects.web") }}</p>
              </li>

              <li class="flex flex-col">
                <p class="text-primary-primary text-[64px]">10</p>
                <p class="text-primary-gray text-[14px]">{{ $t("projects.desktop") }}</p>
              </li>

              <li class="flex flex-col">
                <p class="text-primary-primary text-[64px]">15</p>
                <p class="text-primary-gray text-[14px]">{{ $t("projects.rebranding") }}</p>
              </li>
            </ul>
          </div>

          <div class="w-full max-w-[570px] flex flex-col justify-between">
            <h2 class="text-[40px] text-primary-primary font-bold">
              {{ $t("description.title") }}
            </h2>

            <p class="text-primary-primary">
              {{ $t("description.subtitle") }}
            </p>
          </div>
        </div>
      </li>

      <li class="w-full flex justify-center h-full bg-secondary-primary">
        <div class="w-full my-[90px] max-w-[1200px] flex justify-between">

        </div>
      </li>

      <li class="w-full flex justify-center h-full bg-secondary-light">
        <div class="w-full my-[90px] max-w-[1200px] flex justify-between">
          <div>
            <form @onSubmit="sendApplication">
              <h2 class="text-primary-primary text-[64px] font-bold">{{ $t("application.title") }}</h2>
              <p class="text-primary-gray text-[24px]">{{ $t("application.subtitle") }}</p>

              <input 
              class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-2 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold" 
              :placeholder="$t('application.inputs.fio')">

              <input 
              class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-2 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold" 
              :placeholder="$t('application.inputs.email')">

              <input 
              class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-2 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold" 
              :placeholder="$t('application.inputs.phone')">

              <div class="flex my-[40px] flex-row justify-between items-center">
                <p class="uppercase font-bold text-[12px] text-secondary-dark">{{ $t('application.types.title') }}</p>

                <div class="flex flex-row">
                  <label class="text-secondary-secondary flex flex-row items-center pointer-none cursor-pointer uppercase mr-[20px]" for="web">
                    <input 
                      type="radio"
                      class="w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-secondary-secondary checked:border-secondary-secondary checked:bg-secondary-secondary transition-all"
                      id="web"
                      name="type"
                      checked>
                      &nbsp;
                      Web
                  </label>

                  <label class="text-secondary-secondary flex flex-row items-center pointer-none cursor-pointer uppercase mr-[20px]" for="desktop">
                    <input 
                      type="radio"
                      class="w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-secondary-secondary checked:border-secondary-secondary checked:bg-secondary-secondary transition-all"
                      id="desktop"
                      name="type"
                      >
                      &nbsp;
                      Desktop
                  </label>

                  <label class="text-secondary-secondary flex flex-row items-center pointer-none cursor-pointer uppercase mr-[20px]" for="design">
                    <input 
                      type="radio"
                      class="w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-secondary-secondary checked:border-secondary-secondary checked:bg-secondary-secondary transition-all"
                      id="design"
                      name="type"
                      >
                      &nbsp;
                      Design
                  </label>

                  <label class="text-secondary-secondary flex flex-row items-center pointer-none cursor-pointer uppercase" for="other">
                    <input 
                      type="radio"
                      class="w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-secondary-secondary checked:border-secondary-secondary checked:bg-secondary-secondary transition-all"
                      id="other"
                      name="type"
                      >
                      &nbsp;
                      {{ $t('application.types.other') }}
                  </label>
                </div>
              </div>

              <input 
              class="w-full py-[15px] border-accent-primary border-2 text-primary-primary text-[600] transition-all hover:bg-accent-primary"
              type="submit" 
              :value="$t('buttons.send')">

              <div class="flex flex-row">
                <label class="flex flex-row mt-[10px] items-center relative">
                  <input
                    type="checkbox"
                    class="peer w-[20px] h-[20px] border-secondary-secondary border appearance-none"
                    name="confirm"
                    >

                    <span class="absolute w-[18px] h-[24px] text-white opacity-0 peer-checked:opacity-100 left-[0] pointer-events-none">
                      <svg xmlns="http://www.w3.org/2000/svg" class="h-[24px] w-[18px]" viewBox="0 0 20 20" fill="currentColor" stroke="currentColor" stroke-width="1">
                        <path fill-rule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd"></path>
                      </svg>
                    </span>

                  <label 
                    class="text-secondary-secondary my-[5px] ml-[10px] flex items-center w-full text-[16px]" 
                    for="confirm">{{ $t("application.confirmation") }}&nbsp;<p class="underline">{{ $t("application.personaldata") }}</p></label>
                </label>
                
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