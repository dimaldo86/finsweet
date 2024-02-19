<template>
    <uiLoader v-if="posts.length === 0" />
    <section v-else class="py-8 sm:py-12 md:py-16">
        <div class="container">
            <h2 class="title">All posts</h2>
            <div class="mt-4 md:mt-8 border border-mediumGrey-32"></div>
            <div  class="flex flex-col mt-6 sm:mt-10 md:mt-16 gap-6 sm:gap-10 md:gap-16" >
                <Post
                    v-for="post in dispyedPosts"
                    :id="post.id"
                    :key="post.id"
                    :title="post.title"
                    :category="post.category.title"
                    :src="post.src"
                    :articles="post.articles"
                    :author="post.author"
                    :description="post.description"
                    />
                <vue-awesome-paginate
                    :total-items="totalItems"
                    :items-per-page="itemsPerPage"
                    :max-pages-shown="pageShowItems"
                    :current-page="1"
                    v-model="currentPage"
                    :on-click="onChangePage"
                    prev-button-content="&lt; Prev"
                    next-button-content="Next &gt;"
                    :hidePrevNextWhenEnds="true"
                    type="link"
                    link-url="/blog/posts?page=[page]"
                />
            </div>
        </div>
    </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { getPosts } from '@/js/api'
import uiLoader from '../ui/ui-loader.vue'
import Post from '../Post.vue'

const router = useRouter()
const route = useRoute()

const posts = ref([])
const postId = ref('')
const currentPage = ref(+route.query.page || 1)
const itemsPerPage = ref(5)
const totalItems = ref()
const pageShowItems = ref()


const dispyedPosts = computed(() => {
    const startIndex = (currentPage.value * itemsPerPage.value) - itemsPerPage.value
    const endIndex = startIndex + itemsPerPage.value
    return posts.value.slice(startIndex, endIndex)
})

const onChangePage = (page) => {
    router.push(`${route.path}?page=${page}`)
    currentPage.value = page
    window.scrollTo({top:600,left: 0,  behavior: 'smooth'})
}

onMounted(async () => {
        posts.value = await getPosts()
        totalItems.value = posts.value.length
        pageShowItems.value =  Math.ceil(totalItems.value / itemsPerPage.value)
    }
)
</script>

<style lang="css">
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

:root {
    --primary: #592EA9;
    --secondary:#FFD050;
}

ul#componentContainer {
    display: flex;
    column-gap: 4px;
    align-items: center;
    justify-content: center;
}
.pagination-container {
    font-family: 'Sen';
    margin-top: 20px;
}
.back-button {
    transition: all .5s ease-in-out;
}
.paginate-buttons {
    height: 20px;
    width: 40px;
    cursor: pointer;
    background-color:#fff;
    border:1px solid #232536;
    color: #6D6E76;
    transition: all .5s ease-in-out;
    font-size: 12px;
    font-weight: 700;
}

.paginate-buttons:disabled {
    background-color:#6D6E76;
}
.active-page {
    background-color: var(--primary);
    color: white;
    transition: all .5s ease-in-out;
    border: 1px solid var(--primary);
}
.active-page:hover {
    background-color:  var(--primary);
    border: 1px solid var(--primary);
    color: white;
}

@media (hover: hover) {
    .paginate-buttons:hover {
        background-color:var(--secondary);
        border:1px solid var(--secondary);
        color: #232536;
        font-weight: 700;
    }
}
@media (min-width: 475px) {
    .paginate-buttons {
        height: 26px;
        width: 48px;
        font-size: 14px;
    }
}

@media (min-width: 640px) {
    ul#componentContainer {
        column-gap: 10px;
    }
    .pagination-container {
        margin-top: 35px;
    }
    .paginate-buttons {
        height: 30px;
        width: 60px;
        font-size: 16px;
    }
}

@media (min-width: 768px) {
    .pagination-container {
        margin-top: 64px;
    }
    .paginate-buttons {
        height: 40px;
        width: 80px;
        font-size: 18px;
    }
}
</style>



