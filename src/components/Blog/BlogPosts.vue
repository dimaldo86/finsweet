<template>
    <section class="py-16">
        <div class="container">
            <h2 class="title">All posts</h2>
            <div class="mt-8 border border-mediumGrey-32"></div>
            <div class="flex flex-col mt-16 gap-16">
                <Post
                    v-for="post in limitPosts"
                    :id="post.id"
                    :key="post.id"
                    :title="post.title"
                    :category="post.category"
                    :src="post.src"
                    :articles="post.articles"
                    :author="post.author"
                    :description="post.description"
                />
                <BlogPagination
                :totalItems="21" />
            </div>
        </div>
    </section>
</template>

<script setup>
import BlogPagination from './BlogPagination.vue'
import Post from '../Post.vue'
import { computed } from 'vue'

const props = defineProps({
    posts:{
        type: Array,
        required:true,
    }
})

const limitPosts = computed(() => props.posts)



</script>



