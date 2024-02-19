<template>
    <section class="pt-16">
        <div class="container">
            <h2 class="title">What to read next</h2>
            <div class=" w-full flex items-center mt-16 gap-8 ">
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
</template>

<script setup>

</script>
