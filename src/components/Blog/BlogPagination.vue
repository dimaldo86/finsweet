<template>
    <vue-awesome-paginate
        :total-items="21"
        :items-per-page="5"
        :max-pages-shown="3"
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
import { ref } from 'vue'


const props = defineProps({
    data:{
        type: Array,
        required:true
    }
})


const currentPage = ref(1);
const onClickHandler = (page) => {
    currentPage.value = page
      console.log(currentPage.value);
};


</script>

<style lang="css">
:root {
    --primary: #592EA9;
    --secondary:#FFD050;
}
ul#componentContainer {
    display: flex;
    column-gap: 10px;
    align-items: center;
    justify-content: center;
}
.pagination-container {
    font-family: 'Sen';
    margin-top: 64px;
  }
.back-button {
    transition: all .5s ease-in-out;
}
.paginate-buttons {
    height: 40px;
    width: 80px;
    cursor: pointer;
    background-color:#fff;
    border:1px solid #232536;
    color: #6D6E76;
    transition: all .5s ease-in-out;
    font-size: 18px;
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
@media (hover: hover) {
    .paginate-buttons:hover {
        background-color:var(--secondary);
        border:1px solid var(--secondary);
        color: #232536;
        font-weight: 700;
    }
}
.active-page:hover {
    background-color:  var(--primary);
    border: 1px solid var(--primary);
    color: white;
}
</style>
