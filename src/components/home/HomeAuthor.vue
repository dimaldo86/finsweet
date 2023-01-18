<template>
   <section class="py-0 sm:py-8 md:py-16">
    <div class="container">
        <h2 class="section__title text-center w-full lg:w-full">List of Authors</h2>
        <swiper
            class="mt-12"
            :modules="modules"
            :breakpoints="breakpoints"
            :speed= "2000"
            :scrollbar="{
                draggable: true,
                hide:false
            }"
        >
            <swiper-slide class="group bg-lightGrey flex flex-col py-6 sm:py-10 px-2 sm:px-7 items-center cursor-pointer custom-transition hover:bg-lightYellow"
                v-for="item in authorsList"
                :key="item.id"
                >
                <div class="w-[140px] h-[140px]">
                    <img
                        class="group-hover:border-primary group-hover:scale-[0.9] custom-transition w-full h-full object-cover rounded-full border-8 border-transparent hover:border-primary"
                        :src="item.src"
                        :alt="item.name"
                    >
                </div>
                <h4 class="mt-5 text-primary font-sen font-bold text-xl sm:text-3xl -tracking-2">{{ item.name }}</h4>
                <div class="mt-2 text-mediumGrey text-sm">{{ item.job }}</div>
                <ul class="group-hover:opacity-100 translate-y-[100px] group-hover:translate-y-0 group-hover:visible custom-transition opacity-0 invisible  flex items-center justify-between mt-5">
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
            </swiper-slide>
        </swiper>
    </div>

   </section>
</template>

<script setup>
import { authorsList, socialLinks} from '@/js/constants'

import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/scrollbar";
import { Scrollbar } from "swiper";

const modules = [Scrollbar]
const breakpoints = {
    320: {
        slidesPerView: 1.4,
        spaceBetween: 20
    },
    640: {
        slidesPerView: 2,
        spaceBetween: 20
    },
    993: {
        slidesPerView: 3,
        spaceBetween: 25
    },
    1160: {
        slidesPerView: 4,
        spaceBetween: 32
    }
}

</script>
<style >
.swiper-scrollbar {
    background: #FFD050;
}
.swiper-scrollbar-drag {
    background: #592EA9;
}
.swiper-horizontal>.swiper-scrollbar, .swiper-scrollbar.swiper-scrollbar-horizontal {
    height: 7px;
}
</style>

