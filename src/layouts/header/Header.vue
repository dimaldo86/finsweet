<template>
    <header class="bg-primary">
        <div class="container">
            <nav class="h-20 flex items-center py-3">
                <a href="/"  class="transition duration-500 hover:opacity-70" >
                    <img src="../../assets/img/header/Logo.png" alt="LOGO">
                </a>
                <div class="flex items-center ml-auto h-full">
                    <ul class="flex items-center justify-between">
                        <li v-for="link in menuHeaderLinks" :key="link.id" class="mr-8 last:mr-0">
                            <a href="#" class="text-white transition duration-500 hover:text-yellow">{{ link.name }}</a>
                        </li>
                    </ul>
                    <button class="bg-white text-lg font-bold text-primary px-12 py-4 ml-8 flex items-center">Subscribe</button>
                </div>
            </nav>
        </div>

    </header>
</template>

<script setup>
import { menuHeaderLinks } from '@/constants/menu';

</script>
