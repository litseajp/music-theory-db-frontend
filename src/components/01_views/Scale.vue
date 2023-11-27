<script setup lang="ts">
  import { ref, onMounted, provide } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import ToneTable from '@/components/02_sections/scale/ToneTable.vue'
  import KeyboardDiagram from '@/components/02_sections/scale/KeyboardDiagram.vue'
  import FretboardDiagram from '@/components/02_sections/scale/FretboardDiagram.vue'
  import DataFetchError from '@/components/02_sections/DataFetchError.vue'
  import { tonicNotesSharp, tonicNotesFlat } from '@/consts/tonicNotes'
  import type { Scale } from '@/types/interfaces'
  import { scaleKey } from '@/types/injectionKeys'

  const route = useRoute()
  const tonicParam = route.query.tonic as string

  const data = ref<Scale>({name: '', description: '', tones: []})
  const errorFlg = ref(false)

  const fetchScale = async () => {
    try {
      if (!tonicNotesSharp.includes(tonicParam) && !tonicNotesFlat.includes(tonicParam)) {
        errorFlg.value = true
        return
      }

      const response = await axios.get(`/scales/${route.params.scale}?tonic=${tonicParam}`)
      data.value = response.data
    } catch (error) {
      errorFlg.value = true
    }
  }

  onMounted(fetchScale)
  provide(scaleKey, data)
</script>

<template>
  <template v-if="!errorFlg">
    <h1>{{ data.name }}</h1>
    <div id="description">
      <h2 class="mt-3">説明</h2>
      <p v-html="data.description" />
    </div>
    <ToneTable class="mt-6" />
    <KeyboardDiagram class="mt-5" />
    <FretboardDiagram class="mt-8" />
    <div id="backward-link" class="mt-10">
      <v-icon icon="mdi-chevron-left" />
      <router-link to="/scales">スケール一覧へ戻る</router-link>
    </div>
  </template>
  <template v-else>
    <DataFetchError />
  </template>
</template>

<style scoped>
  p {
    font-size: 1.125rem;
  }

  #backward-link a {
    color: var(--text-primary-color);
    font-size: 1.125rem;
  }
</style>
