<template>
    <section class="py-0 sm:py-8 md:py-16">
        <div class="container">
            <h2 class="section__title text-center w-full lg:w-full">Choose A Catagory</h2>
            <ul class="grid md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full mt-6 sm:mt-8 md:mt-12">
                <li
                    class="group flex flex-col p-4 sm:p-8 custom-transition hover:bg-yellow cursor-pointer "
                    v-for="item in categories"
                    :key="item.id"
                >
                    <div class="group-hover:bg-white w-12 h-12 flex items-center justify-center bg-lightYellow border-transparent rounded-lg">
                        <img

                            :src="item.src"
                            :alt="item.title"
                        >
                    </div>
                    <h4 class="group-hover:text-purple mt-4 font-bold text-primary text-xl xs:text-2xl sm:text-3xl -tracking-2">{{item.title }}</h4>
                    <div class="mt-2 text-mediumGrey">{{ item.info }}</div>
                </li>
            </ul>
        </div>
    </section>
</template>

<script setup>
import { categories } from '@/js/constants';

</script>
