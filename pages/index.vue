<script lang="ts" setup>
import { HeaderItems } from '~/content/header/HeaderItems';
import { SocialLinkItems } from '~/content/sociallinks/SocialLinks';

import WebStudioLogo from '~/assets/web-studio.svg';
import WebLogo from '~/assets/web.svg';
import StudioLogo from '~/assets/studio.svg';

import RouterButton from '~/components/button/RouterButton.vue';
import SocialLinks from '~/components/sociallnks/SocialLinks.vue';

import Services from '~/components/servicecarousel/Services.vue';

import { ServiceItems } from '~/content/services/ServiceItems';

import EmployeeList from '~/components/employeecarousel/EmployeeList.vue';
import { EmployeesData } from '~/content/employeeitems/EmployeeItems';

import ItemsList from '~/components/itemslist/ItemsList.vue';
import { ItemsListItems } from '~/content/itemslist/ItemsListItems';

defineEmits<{
    control: [value: string]
}>();

function sendApplication()
{

}

const serviceSlide : Ref<number> = ref(0);
const renderServiceList = ref(true);
async function handleServiceControls(control: string)
{
  if (control == "left")
  {
    if (serviceSlide.value)
    {
      serviceSlide.value--;
    }
    
  } else {
    if (serviceSlide.value + 1 <= ServiceItems.length - 1)
    {
      serviceSlide.value++;
    }
    
  }
  
  renderServiceList.value = false;
  await nextTick();
  renderServiceList.value = true;
}

const employeeSlide : Ref<number> = ref(0);
const renderEmployeeList = ref(true);
async function handleTeamControls(control: string)
{
  if (control == "left")
  {
    if (employeeSlide.value)
    {
      employeeSlide.value--;
    }
    
  } else {
    if (employeeSlide.value + 1 <= EmployeesData.length - 1)
    {
      employeeSlide.value++;
    }
    
  }
  
  renderEmployeeList.value = false;
  await nextTick();
  renderEmployeeList.value = true;
}
</script>

<template>
  <div>
    <Header :items="HeaderItems" />

    <ul class="flex flex-col items-center justify-center bg-secondary-primary h-full">
      <li class="w-full h-[750px]">
        <div class="w-full flex justify-center h-full bg-cover bg-[url(/background.png)]">
          <div class="w-full max-w-[1200px] flex lg:block flex-col justify-between p-[30px]">
            <WebStudioLogo class="hidden lg:block"/>

            <div class="flex-col mt-[110px] flex lg:hidden">
              <WebLogo/>
              <StudioLogo/>
            </div>
            
            <p class="text-primary-primary lg:mb-[30px] w-full lg:w-[50%] text-[24px] lg:text-[16px] uppercase font-semibold">
              {{ $t("pages.landing.aboutus") }}
            </p>

            <SocialLinks class="block lg:hidden my-[30px]" :items="SocialLinkItems" />

            <div class="w-full flex flex-col-reverse lg:flex-row justify-between items-end">
              <RouterButton class="w-full text-center mx-[5px] lg:w-[unset]" :label="$t('buttons.leaveblank')" to="#contact" />
              <SocialLinks class="hidden lg:flex" :items="SocialLinkItems" />
            </div>
          </div>
        </div>
      </li>

      <li class="w-full relative flex justify-center px-[10px] lg:px-[unset] h-full bg-secondary-primary">
        <a class="absolute top-[-50px] invisible" name="services"></a>

        <div class="w-full my-[90px] max-w-[1200px] flex flex-col justify-between">

          <div class="flex w-full my-[20px] flex-row justify-between lg:justify-start">
            <h2 class="text-[24px] lg:text-[42px] text-primary-primary font-normal lg:font-bold">{{ $t("header.do") }}</h2>
            <Controls @control="handleServiceControls" class="flex lg:hidden"/>
          </div>
          

          <div class="flex flex-col-reverse lg:flex-row w-full">
            <div class="w-full lg:h-[420px] flex flex-col-reverse lg:flex-col justify-between lg:mr-[25px] lg:min-w-[240px]">
              <a
                class="w-full py-[15px] text-center border-accent-primary border-2 text-primary-primary text-[600] transition-all hover:bg-accent-primary"
                href="#contact">{{ $t('buttons.contact') }}</a>

              <div class="my-[20px] lg:my-[unset]">
                <p class="text-[600] text-primary-primary">{{ $t("sections.do.message") }}</p>
                <Controls @control="handleServiceControls" class="hidden lg:flex"/>
              </div>
            </div>

            <div class="w-full">
              <Services
                v-if="renderServiceList"
                :current-slide="serviceSlide"
                :items="ServiceItems"/>
            </div>
          </div>
        </div>
      </li>

      <li class="w-full flex relative justify-center h-full bg-secondary-primary">
        <a class="absolute top-[-100px] invisible" name="works"></a>

        <div class="w-full my-[90px] max-w-[1200px] flex flex-col justify-between">
          <h2 class="text-[24px] lg:text-[42px] text-primary-primary font-normal lg:font-bold">{{ $t("header.works") }}</h2>

          <ItemsList
            :items="ItemsListItems"
            />
        </div>
      </li>

      <li class="w-full relative flex justify-center h-full bg-secondary-light">
        <a class="absolute top-[-100px] invisible" name="aboutus"></a>

        <div class="w-full my-[90px] max-w-[1200px] flex justify-center lg:justify-between">
          <div class="w-full max-w-[570px] hidden lg:flex">
            <ul class="w-full h-full flex flex-col justify-between">
              <li class="flex flex-col">
                <p class="text-primary-primary text-[64px]">20</p>
                <p class="text-primary-gray text-[14px]">{{ $t("projects.web.projects") }}</p>
              </li>

              <li class="flex flex-col">
                <p class="text-primary-primary text-[64px]">10</p>
                <p class="text-primary-gray text-[14px]">{{ $t("projects.desktop.title") }}</p>
              </li>

              <li class="flex flex-col">
                <p class="text-primary-primary text-[64px]">15</p>
                <p class="text-primary-gray text-[14px]">{{ $t("projects.rebranding.title") }}</p>
              </li>
            </ul>
          </div>

          <div class="w-full max-w-[570px] flex flex-col justify-between">
            <h2 class="text-[24px] lg:text-[40px] text-primary-primary mb-[10px] lg:font-bold">
              {{ $t("description.title") }}
            </h2>

            <p class="text-primary-primary">
              {{ $t("description.subtitle") }}
            </p>
          </div>
        </div>
      </li>

      <li class="w-full flex flex-col justify-center items-center h-full bg-secondary-primary">
        <div class="flex w-full my-[20px] flex-row justify-between lg:hidden px-[10px]">
          <p class="text-[24px] text-primary-primary">{{ $t("header.team") }}</p>
          <Controls @control="handleTeamControls"/>
        </div>
      
        <div class="w-full my-[20px] lg:my-[90px] max-w-[1200px] flex flex-col justify-between p-[10px] lg:p-[unset]">
          <div class="relative h-[420px]">
            <EmployeeList
              v-if="renderEmployeeList"
              :current-slide="employeeSlide"
              class="absolute"
              :items="EmployeesData"
              />
          </div>
          
          <Controls @control="handleTeamControls" class="hidden lg:flex"/>

        </div>
      </li>

      <li class="w-full flex justify-center h-full bg-secondary-light">
        <div class="w-full my-[90px] max-w-[1200px] flex justify-center xl:justify-between">
          <div>
            <a class="relative top-[-200px] invisible" name="contact"></a>

            <form class="p-[10px] lg:p-[unset]" @onSubmit="sendApplication">
              <h2 class="text-primary-primary text-[24px] lg:text-[64px] font-normal lg:font-bold">{{ $t("application.title") }}</h2>
              <p class="text-primary-gray mt-[10px] text-[18px] lg:text-[24px]">{{ $t("application.subtitle") }}</p>

              <input
                class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-2 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold"
                :placeholder="$t('application.inputs.fio')">

              <input
                class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-2 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold"
                :placeholder="$t('application.inputs.email')">

              <input
                class="bg-transparent w-full py-[10px] text-[12px] my-[20px] border-b-2 border-secondary-secondary focus:outline-none placeholder:text-secondary-secondary text-primary-primary uppercase font-bold"
                :placeholder="$t('application.inputs.phone')">

              <div class="flex my-[40px] flex-col lg:flex-row justify-between items-start lg:items-center">
                <p class="uppercase font-bold text-[12px] text-secondary-dark">{{ $t('application.types.title') }}</p>

                <div class="flex flex-row">
                  <label
                    class="text-secondary-secondary flex flex-row items-center pointer-none cursor-pointer uppercase mr-[20px]"
                    for="web">
                    <input type="radio"
                      class="w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-secondary-secondary checked:border-secondary-secondary checked:bg-secondary-secondary transition-all"
                      id="web" name="type" checked>
                    &nbsp;
                    <p>Web</p>
                  </label>

                  <label
                    class="text-secondary-secondary flex flex-row items-center pointer-none cursor-pointer uppercase mr-[20px]"
                    for="desktop">
                    <input type="radio"
                      class="w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-secondary-secondary checked:border-secondary-secondary checked:bg-secondary-secondary transition-all"
                      id="desktop" name="type">
                    &nbsp;
                    <p>Desktop</p>
                  </label>

                  <label
                    class="text-secondary-secondary flex flex-row items-center pointer-none cursor-pointer uppercase mr-[20px]"
                    for="design">
                    <input type="radio"
                      class="w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-secondary-secondary checked:border-secondary-secondary checked:bg-secondary-secondary transition-all"
                      id="design" name="type">
                    &nbsp;
                    <p>Design</p>
                  </label>

                  <label
                    class="text-secondary-secondary flex flex-row items-center pointer-none cursor-pointer uppercase"
                    for="other">
                    <input type="radio"
                      class="w-[16px] h-[16px] cursor-pointer appearance-none rounded-full border border-secondary-secondary checked:border-secondary-secondary checked:bg-secondary-secondary transition-all"
                      id="other" name="type">
                    &nbsp;
                    <p>{{ $t('application.types.other') }}</p>
                  </label>
                </div>
              </div>

              <input
                class="w-full py-[15px] border-accent-primary border-2 text-primary-primary text-[600] transition-all hover:bg-accent-primary"
                type="submit" :value="$t('buttons.send')">

              <div class="flex flex-row">
                <label class="flex-row mt-[10px] items-center hidden lg:flex relative">
                  <input type="checkbox"
                    class="peer w-[20px] h-[20px] border-secondary-secondary border appearance-none" name="confirm">

                  <span
                    class="absolute w-[18px] h-[24px] text-white opacity-0 peer-checked:opacity-100 left-[0] pointer-events-none">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-[24px] w-[18px]" viewBox="0 0 20 20"
                      fill="currentColor" stroke="currentColor" stroke-width="1">
                      <path fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"></path>
                    </svg>
                  </span>

                  <label class="text-secondary-secondary my-[5px] ml-[10px] flex items-center w-full text-[16px]"
                    for="confirm">{{ $t("application.confirmation") }}&nbsp;<p class="underline">{{
                      $t("application.personaldata") }}</p></label>
                </label>

                <p class="block lg:hidden mt-[10px] text-secondary-secondary">{{ $t("application.confirmmessage") }}</p>
              </div>

            </form>
          </div>

          <div>
            <img class="hidden xl:block" src="/photos/photo_1.png">
          </div>
        </div>
      </li>
    </ul>

    <Footer />
  </div>
</template>