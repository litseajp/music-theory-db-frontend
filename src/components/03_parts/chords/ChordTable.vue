<script setup lang="ts">
  import TonicSelector from '../TonicSelector.vue'
  import { type ChordCategory }  from '@/types/interfaces'

  defineProps<{ chordCategory: ChordCategory }>()
</script>

<template>
  <h2>{{ chordCategory.category }}</h2>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel v-for="chord in chordCategory.chords" :key="chord.path" elevation="0">
      <v-expansion-panel-title>
        <div>
          <h3>{{ chord.quality }}（{{ chord.name }}）</h3>
          <span>{{ chord.description }}</span>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <TonicSelector :path="`/chords/${chord.path}`" />
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<style scoped>
  span {
    color: var(--text-secondary-color);
    font-size: 1rem;
  }

  .v-expansion-panel-title {
    padding: 12px 24px;
    line-height: normal;
  }
</style>
