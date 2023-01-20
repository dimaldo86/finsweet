<template>
    <form
        @submit.prevent="submit"
        class="relative w-full lg:w-1/2 flex flex-col sm:flex-row gap-2 sm:gap-6 justify-between"
        novalidate
    >
        <uiInputVue
            v-model:value.trim="data.email"
            @blur="v.email.$touch"
            :error="v.email.$errors"
            type="email"
            name="email"
            placeholder="Enter Your Email"
        />
        <uiButtonVue
            type="button"
            :disabled="v.$invalid"
            class="disabled:bg-white disabled:text-mediumGrey disabled:cursor  transition duration-500 ease-in-out "
        >Subscribe
        </uiButtonVue>
        <transition
            enter-active-class="duration-300 ease-out"
            leave-active-class="duration-700 ease-in-out"
            enter-from-class="translate-x-[-50px] opacity-0"
            leave-to-class="translate-x-[150px] opacity-0"
            appear
        >
            <div class="absolute bottom-[-35px] left-0 text-sm sm:text-base text-white p-1"> {{ feedback }}</div>
		</transition>

    </form>
</template>

<script setup>
import uiButtonVue from '../../components/ui/ui-button.vue'
import uiInputVue from '../../components/ui/ui-input.vue'

import { ref, computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

const data = reactive({
	email:''
})
const rules = computed(() => ({
 email: {
    required:helpers.withMessage('This field is required', required),
    email: helpers.withMessage('You entered an invalid email', email),
  },
}))
const v = useVuelidate(rules, data)
const feedback = ref('')
const submit = ()=> {
	v.value.$validate()
	if (!v.value.$error) {
		feedback.value = 'The form has been successfully submitted'
		console.log(data)

	} else {
		feedback.value = ''
	}
	setTimeout(() => {
            data.email = ''
            feedback.value = ''
		}, 1000)
}
</script>
