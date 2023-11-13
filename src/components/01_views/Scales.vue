<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import ScaleList from '@/components/02_sections/scales/ScaleList.vue'
  import type { ScaleCategory }  from '@/types/interfaces'

  const data = ref<ScaleCategory[]>([])
  const errorFlg = ref(false)

  const fetchScales = async () => {
    try {
      const response = await axios.get('/scales')
      data.value = response.data
    } catch (error) {
      errorFlg.value = true
    }
  }

  onMounted(fetchScales)
</script>

<template>
  <template v-if="!errorFlg">
    <h1>スケール一覧</h1>
    <ScaleList :scaleCategories="data" class="mt-3" />
  </template>
  <template v-else>
    ERROR
  </template>
</template>

<style scoped>
</style>
