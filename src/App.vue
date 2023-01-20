<template>
    <HeaderVue></HeaderVue>
        <main >
            <router-view/>
        </main>
    <FooterVue></FooterVue>
</template>

<script setup>
import HeaderVue from '@/layouts/header/Header.vue'
import FooterVue from '@/layouts/footer/Footer.vue';



</script>
<style>
.fade-enter-active, .fade-leave-active {
  transition-property: opacity;
  transition-duration: .25s;
}

.fade-enter-active {
  transition-delay: .25s;
}

.fade-enter, .fade-leave-active {
  opacity: 0
}
</style>

