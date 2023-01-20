<template>
    <div class=" w-full sm:w-3/5">
        <input
            class="input"
            :type="type"
            :name="name"
            :id="name"
            :placeholder="placeholder"
            :value="value"
            @input="updateValue"
        >
        <transition-group
            enter-active-class="duration-300 ease-out"
            leave-active-class="duration-700 ease-in-out"
            enter-from-class="translate-x-[-50px] opacity-0"
            leave-to-class="translate-x-[150px] opacity-0"
            appear
        >
            <div
                class="w-full text-yellow p-1"
                v-for="element of error"
                :key="element.$uid"
            >
                {{ element.$message }}
            </div>
		</transition-group>
    </div>
</template>

<script setup>
const props = defineProps({
    value: {
        type: String,
        default: ''
    },
    name: {
        type: String,
        required: true
    },
    type: {
        type: String,
        default: 'text'
    },
    placeholder: {
        type: String,
        default:''
    },
    error: {
        type: Array,
        required: false
    }
})

const emit = defineEmits(['update:value'])
const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<style lang="postcss" scoped>
.input{
  @apply  bg-transparent w-full h-14 text-white font-sen outline-none border border-darkGrey  pl-6 pr-3 py-3 placeholder:text-sm sm:text-base placeholder:text-mediumGrey focus:border-yellow transition duration-500 ease-in-out
}
</style>

