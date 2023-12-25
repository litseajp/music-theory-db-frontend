<script setup lang="ts">
  import { inject, type Ref } from 'vue'
  import GuitarPosition from '@/components/03_parts/chord/GuitarPosition.vue'
  import type { Chord } from '@/types/interfaces'
  import { chordKey } from '@/types/injectionKeys'

  const chord = inject(chordKey) as Ref<Chord>
</script>

<template>
  <section id="guitar-position-list">
    <h2>フォーム</h2>
    <v-row class="ma-0">
      <GuitarPosition v-for="(position, i) in chord.positions" :key="i" :position="position" />
    </v-row>
  </section>
</template>

<style scoped>
</style>
