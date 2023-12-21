<script setup lang="ts">
  import ChordTable from '@/components/03_parts/chords/ChordTable.vue'
  import { type ChordCategory }  from '@/types/interfaces'

  defineProps<{ chordCategories: ChordCategory[] }>()
</script>

<template>
  <section id="chord-list">
    <div v-for="chordCategory in chordCategories" :key="chordCategory.category" class="chord-category">
      <ChordTable :chord-category="chordCategory" />
    </div>
  </section>
</template>

<style scoped>
  .chord-category:not(:first-child) {
    margin-top: 16px;
  }
</style>
