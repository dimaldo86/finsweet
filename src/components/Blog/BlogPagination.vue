<template>
    <vue-awesome-paginate
        :total-items="totalItems"
        :items-per-page="itemsPerPage"
        :max-pages-shown="pageShowItems"
        :current-page="1"
        v-model="currentPage"
        :on-click="onClickHandler"
        prev-button-content="&lt; Prev"
        next-button-content="Next &gt;"
        :hidePrevNextWhenEnds="true"
        type="link"
        link-url="/blog/posts?page=[page]"
    />


</template>

<script setup>
import { computed, ref } from 'vue'


const props = defineProps({
    allItems:{
        type: Array,
        required:true
    }
})


const currentPage = ref(1)
const itemsPerPage = ref(5)
const totalItems = ref()
const allItems = ref(props.allItems)

totalItems.value = allItems.value.length

const pageShowItems = computed(() => Math.ceil(totalItems.value / itemsPerPage.value))

const dispyedItems = computed(() => {
    const startIndex = (currentPage.value * itemsPerPage.value) - itemsPerPage.value
    const endIndex = startIndex + itemsPerPage.value
    return totalItems.value.slice(startIndex, endIndex)
})



const onClickHandler = (page) => {
    currentPage.value = page
    // console.log(currentPage.value)
}
</script>

<style lang="css">
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
