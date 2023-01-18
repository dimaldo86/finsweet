<template>

    <footer class="mt-auto bg-primary w-full py-12 md:py-14">
        <div class="container">
            <div class="flex flex-col justify-center">
                <div class="w-full flex items-start md:items-center flex-col md:flex-row ">
                    <a href="/"  class="transition duration-500 hover:opacity-70 md:mr-auto" >
                        <img src="../../assets/img/header/Logo.png" alt="LOGO">
                    </a>
                    <ul class="flex items-center flex-wrap mt-4 md:mt-0 md:ml-auto">
                        <li v-for="link in menuFooterLinks" :key="link.id" class="mr-3 sm:mr-6 last:mr-0 py-2">
                            <a href="#" class="w-full text-sm sm:text-base text-white custom-transition hover:text-yellow">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="w-full flex items-start lg:items-center flex-col lg:flex-row gap-10 lg:gap-16 bg-footer mt-8 lg:mt-12 px-8 sm:px-12 lg:px-16 py-12 sm:py-16 lg:py-20">
                    <h2 class="section__title text-white ">
                        Subscribe to our news letter to get latest updates and news
                    </h2>
                    <FormVue></FormVue>
                </div>
            </div>
            <div class="flex w-full items-center flex-col xs:flex-row mt-6 xs:mt-8 lg:mt-12">
                <div class="text-mediumGrey w-full xs:w-auto mr-auto text-sm sm:text-base">
                    <span class="block">Finstreet 118 2561 Fintown</span>
                    <span class="block mt-1">Hello@finsweet.com  020 7993 2905</span>
                </div>
                <ul class="ml-auto w-full xs:w-auto flex items-center mt-6 xs:mt-0">
                    <li
                        class=" mr-10 xs:mr-7 last:mr-0"
                        v-for="link in socialLinks"
                        :key="link.id"
                    >
                        <router-link
                            class="link w-5 h-5"
                            :to="link.url"
                            v-html="link.icon"
                            target="_blank"
                        ></router-link>
                    </li>
                </ul>
            </div>
        </div>
    </footer>
</template>

<script setup>
import FormVue from '@/components/Form.vue';
import { menuFooterLinks } from '@/js/constants'
import { socialLinks } from '@/js/constants';

</script>
