<template>
    <HeaderVue></HeaderVue>
    <main>
        <div class="container">
            <router-view></router-view>
        </div>
    </main>
    <FooterVue></FooterVue>
</template>

<script setup>
import HeaderVue from '@/layouts/header/Header.vue'
import FooterVue from '@/layouts/footer/Footer.vue';

</script>
