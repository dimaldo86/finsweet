<template>
    <section class="py-8 sm:py-12 md:py-16">
        <div class="container">
            <div class="md:relative flex items-center flex-col md:flex-row w-full md:h-[705px]">
                <div class="w-full lg:w-3/4 h-full">
                    <img class="w-full h-full object-cover" src="../../assets/img/home/story.jpg" alt="story">
                </div>
                <div class="md:absolute w-full md:w-[505px] lg:w-[705px] h-auto md:h-[585px] py-8 md:p-12 lg:p-20 bg-white md:right-0 md:bottom-0">
                    <div class="text-primary uppercase font-semibold tracking-5">Why we started </div>
                    <h3 class="w-full mt-6 text-primary font-sen text-3xl md:text-5xl font-bold">It started out as a simple idea and evolved into our passion</h3>
                    <p class="mt-4 text-mediumGrey mb-8">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         quis nostrud exercitation ullamco laboris nisi ut aliquip.
                    </p>
                    <uiButtonVue type="link" to="#">Discover our story ></uiButtonVue>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import uiButtonVue from '@/components/ui/ui-button.vue';

</script>

