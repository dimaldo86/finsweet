<template>
    <button
        v-if="type === 'button'"
        class="sm:text-lg font-bold text-primary w-full h-[56px] text-sm flex items-center justify-center custom-transition hover:bg-yellow"
        :class="[background, `sm:${size}`]"
    >
        <slot />
  </button>
  <router-link
    v-else
    :to="to"
    class="sm:text-lg font-bold bg-yellow text-primary w-full sm:w-[190px] h-[56px] text-sm flex items-center justify-center custom-transition hover:bg-purple hover:text-white"
  >
    <slot />
  </router-link>
</template>

<script setup>
const props = defineProps({
    background: {
        type: String,
        default:"bg-yellow"
    },
    type: {
        type: String,
        default: "button",
    },
    to: {
        type: String,
        required: false,
    },
    size: {
        type:String,
        default:'w-[190px]'
    }
});
</script>

