<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import { VDataTable } from 'vuetify/labs/VDataTable'
  import intervalDict from '@/consts/intervalDict'
  import type { Chord } from '@/types/interfaces'
  import { chordKey } from '@/types/injectionKeys'
  import formatNote from '@/utils/formatNote'

  const chord = inject(chordKey) as Ref<Chord>

  const headers = [
    { title: '音程', key: 'interval', sortable: false, width: '50%' },
    { title: '音名', key: 'note', sortable: false, width: '50%' }
  ]

  interface TableItem {
    interval: string
    note: string
  }

  const tableItems = computed(() => {
    const result: TableItem[] = []

    chord.value.tones?.forEach(tone => {
      result.push({
        interval: intervalDict[tone.interval],
        note: formatNote(tone.note)
      })
    })

    return result
  })
</script>

<template>
  <v-data-table :headers="headers" :items="tableItems" density="comfortable">
    <template #bottom />
  </v-data-table>
</template>

<style scoped>
  .v-data-table {
    width: 320px;
  }
</style>
