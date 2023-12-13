<script setup lang="ts">
  import TonicSelector from './TonicSelector.vue'
  import { type ScaleCategory }  from '@/types/interfaces'

  defineProps<{ scaleCategory: ScaleCategory }>()
</script>

<template>
  <h2>{{ scaleCategory.category }}</h2>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel v-for="scale in scaleCategory.scales" :key="scale.path" elevation="0">
      <v-expansion-panel-title>
        <div>
          <h3>{{ scale.name }}</h3>
          <span>{{ scale.description }}</span>
        </div>
      </v-expansion-panel-title>
      <v-expansion-panel-text>
        <TonicSelector :scale-path="scale.path" />
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
