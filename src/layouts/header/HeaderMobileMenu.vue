<template>
    <div>
        <div class="fixed md:hidden top-0 left-0 bg-primary bg-opacity-50 w-screen h-screen cursor-pointer" @click="closeSidebarPanel" v-if="isPanelOpen"></div>
        <transition enter-active-class="duration-500 ease-out" enter-from-class="translate-y-[-50%]" leave-active-class="duration-700 ease-in" leave-to-class="opacity-0 duration-300 translate-y-[-50%]" appear>
            <div v-if="isPanelOpen"
                class="md:hidden fixed top-0 left-0 h-auto w-full z-[990] overflow-hidden bg-purple px-7 py-5 shadow-md shadow-purple">
                <slot></slot>
            </div>
        </transition>
    </div>
</template>

<script setup >
import { computed } from 'vue'
import { useSidebarStore } from '@/store/store'

const store = useSidebarStore()
const isPanelOpen = computed(() => {
    return store.isNavOpen
})
const closeSidebarPanel = ()=> {
        store.toggleNav()
    }
</script>

