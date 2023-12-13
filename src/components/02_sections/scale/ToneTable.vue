<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import { VDataTable } from 'vuetify/labs/VDataTable'
  import type { Scale } from '@/types/interfaces'
  import { scaleKey } from '@/types/injectionKeys'
  import formatNote from '@/utils/formatNote'

  const scale = inject(scaleKey) as Ref<Scale>

  const headers = [
    { title: '音程', key: 'interval', sortable: false, width: '25%' },
    { title: '音名', key: 'note', sortable: false, width: '25%' },
    { title: '種類', key: 'toneType', sortable: false, width: '50%' }
  ]

  interface TableItem {
    interval: string
    note: string
    toneType: string
  }

  const intervalDict: { [key: string]: string } = {
    'perfect1st': 'P1',
    'minor2nd': 'm2',
    'major2nd': 'M2',
    'minor3rd': 'm3',
    'major3rd': 'M3',
    'diminished4th': 'dim4',
    'perfect4th': 'P4',
    'augmented4th': 'aug4',
    'diminished5th': 'dim5',
    'perfect5th': 'P5',
    'augmented5th': 'aug5',
    'minor6th': 'm6',
    'major6th': 'M6',
    'diminished7th': 'dim7',
    'minor7th': 'm7',
    'major7th': 'M7',
    'flat9th': '♭9',
    '9th': '9',
    'sharp9th': '♯9',
    '11th': '11',
    'sharp11th': '♯11',
    'flat13th': '♭13',
    '13th': '13'
  }

  const tableItems = computed(() => {
    const result: TableItem[] = []

    scale.value.tones?.forEach(tone => {
      result.push({
        interval: intervalDict[tone.interval],
        note: formatNote(tone.note),
        toneType: tone.tone_type
      })
    })

    return result
  })
</script>

<template>
  <section id="tone-table">
    <h2>構成音一覧</h2>
    <v-data-table :headers="headers" :items="tableItems" density="comfortable">
      <template #bottom />
    </v-data-table>
  </section>
</template>

<style scoped>
  .v-data-table {
    width: 660px;
  }
</style>
