<script setup lang="ts">
  import { computed, onMounted, provide, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import PageDescription from '@/components/02_sections/PageDescription.vue'
  import ChordToneList from '@/components/02_sections/chord/ChordToneList.vue'
  import KeyboardDiagram from '@/components/02_sections/KeyboardDiagram.vue'
  import FretboardDiagram from '@/components/02_sections/FretboardDiagram.vue'
  import GuitarPositionList from '@/components/02_sections/chord/GuitarPositionList.vue'
  import BackwardLink from '@/components/02_sections/BackwardLink.vue'
  import DataFetchError from '@/components/02_sections/DataFetchError.vue'
  import { tonicNotesSharp, tonicNotesFlat } from '@/consts/tonicNotes'
  import type { Chord } from '@/types/interfaces'
  import { chordKey, tonesKey } from '@/types/injectionKeys'

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

  const tones = computed(() => data.value.tones)
  provide(tonesKey, tones)

  const linkAttrs = { path: 'scales', heading: 'コード一覧' }
</script>

<template>
  <template v-if="!errorFlg">
    <h1>{{ data.name }}</h1>
    <PageDescription :p-text="data.description" class="mt-3" />
    <ChordToneList class="mt-6" />
    <KeyboardDiagram class="mt-5" />
    <FretboardDiagram class="mt-8" />
    <GuitarPositionList class="mt-8" />
    <BackwardLink :attrs="linkAttrs" class="mt-8" />
  </template>
  <template v-else>
    <DataFetchError />
  </template>
</template>

<style scoped>
</style>
