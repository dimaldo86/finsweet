<template>

    <footer class="mt-auto bg-primary w-full py-14">
        <div class="container">
            <div class="flex flex-col justify-center">
                <div class="w-full flex items-center">
                    <a href="/"  class="transition duration-500 hover:opacity-70 mr-auto" >
                        <img src="../../assets/img/header/Logo.png" alt="LOGO">
                    </a>
                    <ul class="flex  items-center ml-auto">
                        <li v-for="link in menuFooterLinks" :key="link.id" class="mx-6 last:mr-0">
                            <a href="#" class="w-full text-white custom-transition hover:text-yellow">{{ link.name }}</a>
                        </li>
                    </ul>
                </div>
                <div class="w-full flex items-center gap-16 bg-footer mt-14 px-16 py-20">
                    <h2 class="text-white w-1/2 text-4xl font-sen tracking-tighter">
                        Subscribe to our news letter to get latest updates and news
                    </h2>
                    <FormVue></FormVue>
                </div>
            </div>

        </div>
    </footer>
</template>

<script setup>
import FormVue from '@/components/Form.vue';
import { menuFooterLinks } from '@/constants/menu'

</script>

