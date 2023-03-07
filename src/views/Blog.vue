<template>
    <BlogHeader />
    <BlogPosts :posts="posts" />
    <Category title="All Categories" positionTitle="text-left" />
    <Join />
</template>

<script setup>
import BlogHeader from '@/components/Blog/BlogHeader.vue'
import BlogPosts from '@/components/Blog/BlogPosts.vue'
import Category from '@/components/Category.vue'
import Join from '@/components/Join.vue'
import { getPosts } from '@/js/api'
import { onMounted, ref } from 'vue'

const posts = ref([])

onMounted(async () => {
        posts.value = await getPosts();
    }
)


</script>

