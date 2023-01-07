<template>
     <button
        class="text-lg font-bold text-primary w-full sm:w-[190px] h-[56px]  flex items-center justify-center custom-transition hover:bg-yellow"
        :class="[background]"
        >

        <slot></slot>
    </button>
</template>

<script setup>
const props = defineProps({
    background: {
        type: String,
        default:"bg-yellow"
    }
})
</script>

