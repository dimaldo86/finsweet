<template>
  <section class="bg-[url('@/assets/img/home/main.jpg')] bg-center bg-no-repeat bg-cover pt-12 sm:pt-24 pb-12 sm:pb-32 md:pb-44 2xl:pb-72">
        <div class="container">
            <div  class=" mt-8 sm:mt-16 md:mt-16 w-full h-full" >
                <div class="text-white tracking-5"  v-if="post.category">Posted on <b >{{ post.category.title }}</b></div>
                <h1 class="mt-6 text-4xl sm:text-5xl md:text-6xl font-sen text-white -tracking-2">{{post.title}}</h1>
                <div class="mt-6 w-[270px] text-lightGrey flex items-center justify-between" v-if="post.author">
                    <span>By <span class="text-yellow">{{post.author.name}}</span></span>
                    <span>|</span>
                    <span>{{post.author.date}}</span>
                </div>
                <p class="mt-4 text-lightGrey w-full sm:w-3/4 md:w-1/2 mb-12">
                    Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident.
                </p>
                <uiButtonVue type="link" :to="`posts/${post.id}`">Read More ></uiButtonVue>
            </div>
        </div>
    </section>
</template>

<script setup>
import uiButtonVue from '@/components/ui/ui-button.vue'
import { onMounted, ref } from 'vue'
import { getPostsId } from '@/js/api.js'

const post = ref({})

onMounted(async() => {
    post.value = await getPostsId(6)
  })

</script>

