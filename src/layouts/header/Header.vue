<template>
    <header class="bg-primary">
        <div class="container">
            <nav class="h-20 flex items-center py-3">
                <a href="/"  class="transition duration-500 hover:opacity-70" >
                    <img src="../../assets/img/header/Logo.png" alt="LOGO">
                </a>
                <HeaderBurgerVue></HeaderBurgerVue>
                <HeaderMobileMenuVue>
                    <a href="/"  class="transition duration-500 hover:opacity-70" >
                        <img src="../../assets/img/header/Logo.png" alt="LOGO">
                    </a>
                    <ul class="flex flex-col w-full items-center justify-between">
                        <li v-for="link in menuHeaderLinks" :key="link.id" class="w-full my-5 last:mr-0">
                            <a href="#" class="text-white custom-transition hover:text-yellow">{{ link.name }}</a>
                        </li>
                    </ul>
                    <uiButtonVue background="bg-white" mobileFullWidth="false">Subscribe</uiButtonVue>
                </HeaderMobileMenuVue>
                <div class="md:flex items-center ml-auto h-full hidden">
                    <ul class="flex items-center justify-between mr-8">
                        <li v-for="link in menuHeaderLinks" :key="link.id" class="mr-8 last:mr-0">
                            <a href="#" class="text-white custom-transition hover:text-yellow">{{ link.name }}</a>
                        </li>
                    </ul>
                    <uiButtonVue background="bg-white">Subscribe</uiButtonVue>
                </div>
            </nav>
        </div>

    </header>
</template>

<script setup>
import HeaderBurgerVue from './HeaderBurger.vue';
import HeaderMobileMenuVue from './HeaderMobileMenu.vue';
import { menuHeaderLinks } from '@/constants/menu';
import uiButtonVue from '@/components/ui/ui-button.vue';


</script>
