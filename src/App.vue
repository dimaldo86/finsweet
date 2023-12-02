<template>
    <HeaderVue></HeaderVue>
        <main >

            <router-view v-slot="{ Component, route }">
                <transition name="slide-fade" mode="out-in">
                    <div :key="route.name">
                        <component :is="Component"></component>
                    </div>
                </transition>
            </router-view>

            <uiScrollTop />
        </main>

    <FooterVue></FooterVue>
</template>

<script setup>
import HeaderVue from '@/layouts/header/Header.vue'
import FooterVue from '@/layouts/footer/Footer.vue'
import uiScrollTop from './components/ui/ui-scroll-top.vue'



</script>
<style>
.slide-fade-enter-active {
  transition: all 0.5s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.4s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(-100px);
  opacity: 0;
}
</style>

