<template>
    <HeaderVue></HeaderVue>
  
        <router-view></router-view>

    <FooterVue></FooterVue>
</template>

<script setup>
import HeaderVue from '@/layouts/header/Header.vue'
import FooterVue from '@/layouts/footer/Footer.vue';

</script>
