<template>
    <HeaderVue></HeaderVue>
    <main>
        <router-view></router-view>
    </main>
    <FooterVue></FooterVue>
</template>

<script setup>
import HeaderVue from '@/layouts/header/Header.vue'
import FooterVue from '@/layouts/footer/Footer.vue';

</script>
