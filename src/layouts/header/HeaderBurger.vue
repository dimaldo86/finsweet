<template>
    <div
        class="ml-auto block md:hidden"
        :class="{ 'active' : isBurgerActive }"
        @click.prevent="toggleBurger">
        <slot>
            <div  class="relative block z-[999] h-8 w-8 border-none border-r-0 bg-transparent pointer-events-auto custom-transition">
                <span
                    class="absolute bg-white top-1/2 h-[2px] w-full right-0 -translate-y-2 burger-transition"
                    :class="{'active-top': isBurgerActive}"></span>
                <span
                    class="absolute bg-white top-1/2 h-[2px] scale-x-75 origin-top-right w-full  burger-transition"
                    :class="{ 'opacity-0': isBurgerActive}"></span>
                <span
                    class="absolute bg-white top-1/2 h-[2px] w-full right-0 translate-y-2 burger-transition"
                    :class="{'active-bottom': isBurgerActive}"></span>
            </div>
        </slot>
    </div>
</template>

<script setup>
import { computed } from 'vue'
import { useSidebarStore } from '@/store/store'

const store = useSidebarStore()
const isBurgerActive = computed(() => {
    return store.isNavOpen
})
const toggleBurger = () => {
    store.toggleNav()
}
</script>
<style lang="postcss" >
.active-top {
    @apply rotate-45 translate-y-0
}

.active-bottom {
    @apply translate-y-0 -rotate-45
}
</style>
