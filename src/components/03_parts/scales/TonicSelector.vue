<script setup lang="ts">
  import { ref, computed } from 'vue'
  import { tonicNotesSharp, tonicNotesFlat } from '@/consts/tonicNotes'
  import formatNote from '@/utils/formatNote'

  defineProps<{ scalePath: string }>()

  const sharpMode = ref(true)
  const tonicNotes = computed(() => sharpMode.value ? tonicNotesSharp : tonicNotesFlat)

  const toggleMode = () => {
    sharpMode.value = !sharpMode.value
  }
</script>

<template>
  <v-btn-toggle divided variant="outlined" class="my-2">
    <v-btn v-for="tonic in tonicNotes" :key="tonic" :to="`/scales/${scalePath}?tonic=${tonic}`" min-width="48">
      {{ formatNote(tonic) }}
    </v-btn>
  </v-btn-toggle>
  <v-btn height="48" variant="outlined" class="ml-9" @click="toggleMode">
    <span class="px-2">
      <v-icon icon="mdi-swap-horizontal" />
      {{ sharpMode ? '♭系に切り替え' : '♯系に切り替え' }}
    </span>
  </v-btn>
</template>

<style scoped>
  .v-btn--size-default {
    padding: 0;
  }

  .v-btn--variant-outlined {
    border: thin solid rgba(0, 0, 0, 0.12);
  }
</style>
