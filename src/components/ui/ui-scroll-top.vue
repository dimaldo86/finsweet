<template>

    <transition name="fade">
        <button
            @click="scrollToTop"
            v-show="!isHidden"
            class="fixed z-1000 bottom-28 right-4 sm:right-8 border-0 w-8 sm:w-12 md:w-16 h-8 sm:h-12 md:h-16 rounded-full drop-shadow-md bg-purple/75 text-yellow text-2xl sm:text-4xl font-bold burger-transition"
        >&uarr;</button>
    </transition>

</template>

<script setup>
import { ref, onMounted, onBeforeMount } from 'vue'

const isHidden = ref(true)

const userScroll = () => {
    if (window.scrollY > 900) {
        isHidden.value = false
    } else {
        isHidden.value = true
    }
}
onMounted(() => {
    window.addEventListener("scroll", userScroll)
})
onBeforeMount(() => {
    window.removeEventListener("scroll", userScroll)
})

const scrollToTop = () => {
    window.scrollTo (
        {
            top: 0,
            left: 0,
            behavior: 'smooth'
        }
    )
}

</script>
<style>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.7s ease-in-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>