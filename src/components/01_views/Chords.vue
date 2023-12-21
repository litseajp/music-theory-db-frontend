<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'
  import ChordList from '@/components/02_sections/chords/ChordList.vue'
  import DataFetchError from '@/components/02_sections/DataFetchError.vue'
  import type { ChordCategory }  from '@/types/interfaces'

  const data = ref<ChordCategory[]>([])
  const errorFlg = ref(false)

  const fetchChords = async () => {
    try {
      const response = await axios.get('/chords')
      data.value = response.data
    } catch (error) {
      errorFlg.value = true
    }
  }

  onMounted(fetchChords)
</script>

<template>
  <template v-if="!errorFlg">
    <h1>コード一覧</h1>
    <ChordList :chord-categories="data" class="mt-3" />
  </template>
  <template v-else>
    <DataFetchError />
  </template>
</template>

<style scoped>
</style>
