<template>
    <section class="pt-0 pb-8 lg:py-16">
        <div class="container">
            <h2 class="w-full text-center text-xl xs:text-2xl sm:text-3xl lg:text-4xl font-sen font-bold -tracking-3">List of Authors</h2>
            <div class="mt-4 sm:mt-12 grid grid-rows-2 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-8">
                <div class="group bg-lightGrey flex flex-col py-6 sm:py-10 px-2 sm:px-7 items-center cursor-pointer custom-transition hover:bg-lightYellow"
                    v-for="item in authorsList"
                    :key="item.id"
                    >
                    <div class="w-[140px] h-[140px]">
                        <img
                            class="group-hover:border-primary group-hover:scale-[0.9] custom-transition rounded-full border-8 border-transparent hover:border-primary"
                            :src="item.src"
                            :alt="item.name"
                        >
                    </div>
                    <h4 class="mt-5 text-primary font-sen font-bold text-base xs:text-xl sm:text-3xl -tracking-2">{{ item.name }}</h4>
                    <div class="mt-2 text-mediumGrey text-sm">{{ item.job }}</div>
                    <ul class="xl:group-hover:opacity-100 translate-y-0 xl:translate-y-[100px] xl:group-hover:translate-y-0 xl:group-hover:visible custom-transition opacity-100 visible xl:opacity-0 xl:invisible  flex items-center justify-between mt-5">
                        <li
                            class="mr-4 last:mr-0"
                            v-for="link in socialLinks"
                            :key="link.id"
                        >
                            <a
                                class="link__author w-5 h-5"
                                :to="link.url"
                                v-html="link.icon"
                                target="_blank"
                            ></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
 </template>

 <script setup>
import {socialLinks, authorsList} from '@/js/constants'

 </script>



