<template>
  <section class="bg-[url('@/assets/img/home/main.jpg')] bg-center bg-no-repeat bg-cover pt-12 sm:pt-24 pb-12 sm:pb-32 md:pb-48 2xl:pb-96">
        <div class="container">
            <div class=" mt-8 sm:mt-16 md:mt-32 w-full h-full">
                <div class="text-white tracking-5">Posted on <b>startup</b></div>
                <h1 class="mt-6 text-4xl sm:text-5xl md:text-6xl font-sen text-white -tracking-2">Step-by-step guide to choosing great font pairs</h1>
                <div class="mt-6 w-[250px] text-lightGrey flex items-center justify-between">
                    <span>By <span class="text-yellow">James West</span></span>
                    <span>|</span>
                    <span >May 23, 2022 </span>
                </div>
                <p class="mt-4 text-lightGrey w-full sm:w-3/4 md:w-1/2 mb-12">
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident.
                </p>
                <uiButtonVue class="hover:bg-purple hover:text-white" background="bg-yellow">Read More ></uiButtonVue>
            </div>
        </div>
    </section>
</template>

<script setup>
import uiButtonVue from '@/components/ui/ui-button.vue';

</script>

