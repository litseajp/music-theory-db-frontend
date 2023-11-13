<script setup lang="ts">
  import ScaleTable from '@/components/03_parts/scales/ScaleTable.vue'
  import { type ScaleCategory }  from '@/types/interfaces'

  defineProps<{ scaleCategories: ScaleCategory[] }>()
</script>

<template>
  <section id="scale-list">
    <div v-for="scaleCategory in scaleCategories" :key="scaleCategory.category" class="scale-category">
      <ScaleTable :scaleCategory="scaleCategory" />
    </div>
  </section>
</template>

<style scoped>
  .scale-category:not(:first-child) {
    margin-top: 16px;
  }
</style>
