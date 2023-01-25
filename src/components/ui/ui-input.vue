<template>
    <div class="w-full"
        :class="[`sm:${size}`]"
        >
        <input
            class="input"
            :class="[`text-${textColor}`]"
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
                class="w-full text-pink-400 p-1"
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
    },
    textColor:{
        type:String,
        default:'white'
    },
    size: {
        type:String,
        default:'w-3/5'
    }
})

const emit = defineEmits(['update:value'])
const updateValue = (e) => {
  emit('update:value', e.target.value)
}
</script>

<style lang="postcss" scoped>
.input{
  @apply  bg-transparent w-full h-14 font-sen outline-none border-2 border-mediumGrey  pl-6 pr-3 py-3 placeholder:text-sm sm:text-base placeholder:text-mediumGrey focus:border-yellow transition duration-500 ease-in-out
}
</style>

