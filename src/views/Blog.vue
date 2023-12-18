<template>
    <BlogHeader />
    <BlogPosts />
    <Category title="All Categories" positionTitle="text-left" />
    <Join />
</template>

<script setup>
import BlogHeader from '@/components/Blog/BlogHeader.vue'
import BlogPosts from '@/components/Blog/BlogPosts.vue'
import Category from '@/components/Category.vue'
import Join from '@/components/Join.vue'
</script>

