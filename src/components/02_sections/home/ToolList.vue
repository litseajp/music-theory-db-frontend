<script setup lang="ts">
  import ToolListItem from '@/components/03_parts/home/ToolListItem.vue'

  const itemAttrsList = [
    {
      path: '/scales',
      icon: '/src/assets/images/icon_scales.png',
      name: 'スケールリファレンス',
      description: '各スケールの構成音一覧およびピアノ鍵盤図/ギター指板図を閲覧できます。'
    },
  ]
</script>

<template>
  <section id="tool-list">
    <ToolListItem v-for="itemAttrs in itemAttrsList" :key="itemAttrs.path" :attrs="itemAttrs" />
  </section>
</template>

<style scoped>
</style>
