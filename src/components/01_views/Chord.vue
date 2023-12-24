<script setup lang="ts">
  import { ref, onMounted, provide } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import ToneTable from '@/components/02_sections/chord/ToneTable.vue'
  import KeyboardDiagram from '@/components/02_sections/chord/KeyboardDiagram.vue'
  import FretboardDiagram from '@/components/02_sections/chord/FretboardDiagram.vue'
  import GuitarPositionList from '@/components/02_sections/chord/GuitarPositionList.vue'
  import DataFetchError from '@/components/02_sections/DataFetchError.vue'
  import { tonicNotesSharp, tonicNotesFlat } from '@/consts/tonicNotes'
  import type { Chord } from '@/types/interfaces'
  import { chordKey } from '@/types/injectionKeys'

  const route = useRoute()
  const rootParam = route.query.root as string

  const data = ref<Chord>({name: '', description: '', tones: [], positions: []})
  const errorFlg = ref(false)

  const fetchChord = async () => {
    try {
      if (!tonicNotesSharp.includes(rootParam) && !tonicNotesFlat.includes(rootParam)) {
        errorFlg.value = true
        return
      }

      const response = await axios.get(`/chords/${route.params.chord}?root=${rootParam}`)
      data.value = response.data
    } catch (error) {
      errorFlg.value = true
    }
  }

  onMounted(fetchChord)
  provide(chordKey, data)
</script>

<template>
  <template v-if="!errorFlg">
    <h1>{{ data.name }}</h1>
    <div id="description">
      <h2 class="mt-3">
        説明
      </h2>
      <p v-html="data.description" />
    </div>
    <ToneTable class="mt-6" />
    <KeyboardDiagram class="mt-5" />
    <FretboardDiagram class="mt-8" />
    <GuitarPositionList class="mt-8" />
    <div id="backward-link" class="mt-8">
      <v-icon icon="mdi-chevron-left" />
      <router-link to="/chords">
        コード一覧へ戻る
      </router-link>
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
