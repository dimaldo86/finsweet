<template>
    <router-link
        :to="`posts/${id}`"
        class="flex  gap-8"
    >
        <div class="w-1/2">
            <img :src="src" :alt="category">
        </div>
        <div class="w-1/2 mt-14">
            <h4 class="text-purple uppercase font-semibold tracking-5">{{ category }}</h4>
            <h3 class="mt-5 title">{{ title }}</h3>
            <div class="mt-5 text-mediumGrey">{{ description }}</div>
        </div>
    </router-link>
</template>

<script setup>


const postProps = defineProps({
        id: {
            type: String,
            required: true,
        },
        category: {
            type: String,
            required: true,
        },
        src: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
        },
        articles: {
            type:Array,
        },
        author: {
            type: Object,
        },
    });

</script>

