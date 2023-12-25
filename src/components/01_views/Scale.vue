<script setup lang="ts">
  import { computed, onMounted, provide, ref } from 'vue'
  import { useRoute } from 'vue-router'
  import axios from 'axios'
  import PageDescription from '@/components/02_sections/PageDescription.vue'
  import ScaleToneList from '@/components/02_sections/scale/ScaleToneList.vue'
  import KeyboardDiagram from '@/components/02_sections/KeyboardDiagram.vue'
  import FretboardDiagram from '@/components/02_sections/FretboardDiagram.vue'
  import BackwardLink from '@/components/02_sections/BackwardLink.vue'
  import DataFetchError from '@/components/02_sections/DataFetchError.vue'
  import { tonicNotesSharp, tonicNotesFlat } from '@/consts/tonicNotes'
  import type { Scale } from '@/types/interfaces'
  import { scaleKey, tonesKey } from '@/types/injectionKeys'

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

  const tones = computed(() => data.value.tones)
  provide(tonesKey, tones)

  const linkAttrs = { path: 'scales', heading: 'スケール一覧' }
</script>

<template>
  <template v-if="!errorFlg">
    <h1>{{ data.name }}</h1>
    <PageDescription :p-text="data.description" class="mt-8" />
    <ScaleToneList class="mt-8" />
    <KeyboardDiagram class="mt-8" />
    <FretboardDiagram class="mt-10" />
    <BackwardLink :attrs="linkAttrs" class="mt-13" />
  </template>
  <template v-else>
    <DataFetchError />
  </template>
</template>

<style scoped>
</style>
