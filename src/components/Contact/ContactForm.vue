<template>
   <section class="pt-4 pb-6 sm:pb-16 md:pb-24 lg:pb-32">
        <div class="container-small">
            <form
                @submit.prevent="submit"
                class=" w-full flex flex-col gap-4"
                novalidate
            >
            <uiInputVue
                    v-model:value.trim="data.name"
                    @blur="v.name.$touch"
                    :error="v.name.$errors"
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    textColor="primary"
                    size="w-full"
                />
                <uiInputVue
                    v-model:value.trim="data.email"
                    @blur="v.email.$touch"
                    :error="v.email.$errors"
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    textColor="primary"
                    size="w-full"
                />
                <textarea
                    v-model.trim="data.message"
                    name="message"
                    placeholder="Message"
                    class="w-full h-[144px] resize-none bg-transparent text-primary font-sen outline-none border-2 border-mediumGrey  pl-6 pr-3 py-3 placeholder:text-sm sm:text-base placeholder:text-mediumGrey focus:border-yellow transition duration-500 ease-in-out"
                ></textarea>
                <uiButtonVue
                    :disabled="v.$invalid"
                    size="w-full"
                    class="disabled:bg-lavendar disabled:text-mediumGrey disabled:cursor transition duration-500 ease-in-out "
                >Send Message
                </uiButtonVue>
                <transition
                    enter-active-class="duration-300 ease-out"
                    leave-active-class="duration-700 ease-in-out"
                    enter-from-class="translate-x-[-50px] opacity-0"
                    leave-to-class="translate-x-[150px] opacity-0"
                    appear
                >
                    <div class="text-sm sm:text-base text-primary p-1"> {{ feedback }}</div>
                </transition>
            </form>
        </div>
   </section>
</template>

<script setup>
import uiInputVue from '../ui/ui-input.vue'
import uiButtonVue from '../ui/ui-button.vue'

import { ref, computed, reactive } from 'vue'
import { useVuelidate } from '@vuelidate/core'
import { required, email, helpers } from '@vuelidate/validators'

const data = reactive({
    name:'',
	email:'',
    message:''
})
const rules = computed(() => ({
    name : {
        required:helpers.withMessage('This field is required', required),
    },
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
            data.name = ''
            data.message = ''
            feedback.value = ''
		}, 1000)
}
</script>

