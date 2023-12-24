<script setup lang="ts">
  defineProps<{ pText: string }>()
</script>

<template>
  <section id="page-description">
    <h2>
      説明
    </h2>
    <p v-html="pText" />
  </section>
</template>

<style scoped>
  p {
    font-size: 1.125rem;
  }
</style>
