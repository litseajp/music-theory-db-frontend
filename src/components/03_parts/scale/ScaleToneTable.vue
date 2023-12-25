<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import { VDataTable } from 'vuetify/labs/VDataTable'
  import intervalDict from '@/consts/intervalDict'
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
  <v-data-table :headers="headers" :items="tableItems" density="comfortable">
    <template #bottom />
  </v-data-table>
</template>

<style scoped>
  .v-data-table {
    width: 640px;
  }
</style>
