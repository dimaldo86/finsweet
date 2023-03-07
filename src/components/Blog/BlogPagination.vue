<template>
  <div class="flex items-center justify-center">
    <uiButtonVue class="disabled:bg-slate-400" :disabled="currentPage === 1" @click="currentPage--">Prev</uiButtonVue>
    <span class="mx-4">Page {{ currentPage }} of {{ totalPages }}</span>
    <uiButtonVue class="disabled:bg-slate-400" :disabled="currentPage === totalPages" @click="currentPage++">Next</uiButtonVue>
  </div>
</template>

<script setup>
import uiButtonVue from '@/components/ui/ui-button.vue'
import { ref, computed } from 'vue'


  const props = defineProps({
    totalItems: {
      type: Number,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 5
    }
  })

  const currentPage = ref(1)
  const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage))



</script>
