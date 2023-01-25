<template>
   <section class="pt-8 sm:pt-16 md:pt-32 pb-0 sm:pb-8">
        <div class="container">
            <div class="flex flex-col md:flex-row w-full gap-0 md:gap-12 lg:gap-16">
                <div class="w-full md:w-1/2 flex flex-col">
                    <h2 class="section__title text-primary lg:w-full">Featured Post</h2>
                    <div class="mt-6 lg:mt-8 p-4 sm:p-5 md:p-8 border border-mediumGrey/10 h-auto sm:h-[720px]">
                        <div class="w-full h-[350px]">
                            <img src="@/assets/img/home/post.png" alt="post">
                        </div>
                        <div class="mt-8 w-[220px] text-sm text-darkGrey flex items-center justify-between">
                                <span>By <span class="text-purple">James West</span></span>
                                <span>|</span>
                                <span >May 23, 2022 </span>
                        </div>
                        <h3 class="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</h3>
                        <p class="mt-4 text-mediumGrey w-full  mb-12">
                            Duis aute irure dolor in reprehenderit in
                            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident.
                        </p>
                        <uiButtonVue type="link" to="#">Read More ></uiButtonVue>
                    </div>
                </div>
                <div class="w-full  md:w-1/2 flex flex-col mt-4 sm:mt-6 md:mt-0">
                <div class="flex justify-between items-center">
                    <h2 class="section__title text-primary lg:w-full">All Posts</h2>
                    <div class="text-purple w-20 text-right">View All</div>
                </div>
                <ul class="w-full flex flex-col items-center mt-6 lg:mt-8 h-auto sm:h-[720px]">
                    <li
                        class="w-full h-[180px] p-4 sm:p-6 custom-transition hover:bg-lightYellow cursor-pointer"
                        v-for="post in posts"
                        :key="post.id"
                    >
                        <div>{{ post.info.split(" ") }}</div>
                        <p class="mt-2 font-primary font-bold  font-sen  w-full lg:w-2/3 text-xl xs:text-2xl">{{ post.content }}</p>
                    </li>
                </ul>
                </div>
            </div>
        </div>
   </section>
</template>

<script setup>
import uiButtonVue from '../ui/ui-button.vue'
import { posts } from '@/js/constants'

const arr = posts.forEach(el => {
    const text = el.info.split(" ")
    console.log(text);
});




</script>

