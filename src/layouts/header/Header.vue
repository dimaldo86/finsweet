<template>
    <header :class="toggleNavClass()" class="header bg-primary shadow-lg shadow-lightYellow transition duration-700 fixed w-screen z-[10000]">
        <div class="container">
            <nav class="h-12 xs:h-16 sm:h-20 flex items-center py-3">
                <a href="/"  class="transition duration-500 hover:opacity-70 z-[1000]" >
                    <img src="../../assets/img/header/Logo.png" alt="LOGO">
                </a>
                <HeaderBurgerVue></HeaderBurgerVue>
                <HeaderMobileMenuVue>
                    <ul class="flex flex-col mt-8 md:mt-0 w-full items-center justify-between">
                        <li v-for="link in menuHeaderLinks" :key="link.id" class="w-full my-5 last:mr-0">
                            <router-link
                                exact
                                :to="link.path"
                                class="text-white custom-transition hover:text-yellow"
                            >{{ link.name }}</router-link>
                        </li>
                    </ul>
                    <uiButtonVue background="bg-white">Subscribe</uiButtonVue>
                </HeaderMobileMenuVue>
                <div class="md:flex items-center ml-auto h-full hidden">
                    <ul class="flex items-center justify-between mr-8">
                        <li v-for="link in menuHeaderLinks" :key="link.id" class="mr-8 last:mr-0">
                            <router-link
                                exact
                                :to="link.path"
                                class="text-white custom-transition hover:text-yellow"
                            >{{ link.name }}</router-link>
                        </li>
                    </ul>
                    <uiButtonVue background="bg-white">Subscribe</uiButtonVue>
                </div>
            </nav>
        </div>

    </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderBurgerVue from './HeaderBurger.vue';
import HeaderMobileMenuVue from './HeaderMobileMenu.vue';
import { menuHeaderLinks } from '@/js/constants';
import uiButtonVue from '@/components/ui/ui-button.vue';

const isFixed = ref(false)

const toggleNavClass = () => {
    if(isFixed.value == false){
        return 'header'
    } else {
        return 'header.hide'
    }
}

onMounted(() => {
    let lastScroll = 0;
    const defaultOffset = 300;
    const header = document.querySelector('.header');
    const scrollPosition = () => window.pageYOffset || document.documentElement.scrollTop;
    const containHide = () => header.classList.contains('hide');
    const smartHeaderScroll = () => {
        if(scrollPosition() > lastScroll && !containHide() && scrollPosition() > defaultOffset) {
                header.classList.add('hide');
            }
            else if(scrollPosition() < lastScroll && containHide()){
                header.classList.remove('hide');
            }

            lastScroll = scrollPosition();
    }

        window.addEventListener('scroll', smartHeaderScroll)
    }
)

onUnmounted(() => {
    window.removeEventListener('scroll', smartHeaderScroll)
})
</script>
