<template>
    <section class="pt-52 pb-16">
        <div class="container">
            <div class="container-small">
                <div v-if="post.author" class="flex">
                    <div class="w-12 h-12">
                        <img :src="post.author.src" :alt="post.author.name">
                    </div>
                    <div class="ml-4">
                        <div class="font-sen text-3xl text-purple font-bold -tracking-2"> {{ post.author.name }}</div>
                        <div>{{ post.author.date }}</div>
                    </div>
                </div>
                <div class="pt-6">
                    <h2 class="title-48">{{ post.title }}</h2>
                    <div v-if="post.category" class="flex items-center mt-8">
                        <div class="w-6 h-6">
                            <img :src="post.category.src" :alt="post.category.title">
                        </div>
                        <span class="ml-2 font-sen text-2xl font-bold">{{ post.category.title }}</span>
                    </div>
                </div>
            </div>
            <div class="mt-16 h-[582px]">
                <img :src="post.src" :alt="post.title">
            </div>
            <div class="container-small">
                <div v-if="post.articles" class="mt-4">
                    <div class="mt-12" v-for="article in post.articles" :key="article.id">
                        <h3 class="title">{{ article.title }}</h3>
                        <div class="mt-4">{{ article.content }}</div>
                        <div v-if="article.lists" class="py-6">
                            <ul  v-for="list in article.lists" :key="list" >
                                <li class="list font-sen text-2xl font-bold">{{ list }}</li>
                            </ul>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </section>
    <section class="pt-16">
        <div class="container">
            <h2 class="title">What to read next</h2>
            <div class=" w-full flex items-center mt-16 gap-8 ">
                <div v-if="post.author" class="flex flex-col w-[405px] ">
                    <div class="w-full h-[318px]">
                        <img :src="post.src" :alt="post.title">
                    </div>
                    <div class="flex mt-8 font-medium items-center text-sm">
                        <span class="text-darkGrey">By</span>
                        <div class="text-purple mx-2 "> {{ post.author.name }}</div>
                        <div class="w-[2px] h-[13px] bg-darkGrey"></div>
                        <div class="ml-2 text-darkGrey">{{ post.author.date }}</div>
                    </div>
                    <div class="my-4 font-sen font-bold text-[28px] leading-10">{{ post.title }}</div>
                    <div class="">{{ post.description }}</div>
                </div>
                <div v-if="post.author" class="flex flex-col w-[405px] ">
                    <div class="w-full h-[318px]">
                        <img :src="post.src" :alt="post.title">
                    </div>
                    <div class=" flex mt-8 font-medium items-center text-sm">
                        <span class="text-darkGrey">By</span>
                        <div class="text-purple mx-2 "> {{ post.author.name }}</div>
                        <div class="w-[2px] h-[13px] bg-darkGrey"></div>
                        <div class="ml-2 text-darkGrey">{{ post.author.date }}</div>
                    </div>
                    <div class="my-4 font-sen font-bold text-[28px] leading-10">{{ post.title }}</div>
                    <div class="">{{ post.description }}</div>
                </div>
                <div v-if="post.author" class="flex flex-col w-[405px] ">
                    <div class="w-full h-[318px]">
                        <img :src="post.src" :alt="post.title">
                    </div>
                    <div class=" flex mt-8 font-medium items-center text-sm">
                        <span class="text-darkGrey">By</span>
                        <div class="text-purple mx-2 "> {{ post.author.name }}</div>
                        <div class="w-[2px] h-[13px] bg-darkGrey"></div>
                        <div class="ml-2 text-darkGrey">{{ post.author.date }}</div>
                    </div>
                    <div class="my-4 font-sen font-bold text-[28px] leading-10">{{ post.title }}</div>
                    <div class="">{{ post.description }}</div>
                </div>
            </div>
        </div>
    </section>
    <Join />

</template>

<script setup>
import Join from '@/components/Join.vue'
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'
import { getPostsId, getPosts } from '@/js/api.js'

const route = useRoute()
const post = ref({})
const posts = ref([])
const postId = ref()
const authorNames = ref([])
const authorNamesUnique = ref([])

onMounted(async() => {
    postId.value = route.params.id
    post.value = await getPostsId(postId.value)
    posts.value = await getPosts()
    authorNames.value = posts.value.map(e => e.author).map(e => e.name)
    authorNamesUnique.value =  authorNames.value.filter((item, i, ar) => ar.indexOf(item) === i);
    // console.log( authorNamesUnique.value );
})
</script>
<style>
.list {
    position: relative;
    left: 12px;
}
.list::before {
    position: absolute;
    top: 50%;
    left: -12px;
    transform: translateY( -50%);
    content: "";
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: #232536;
}
</style>
