<script setup lang="ts">
  interface Props {
    attrs: {
      path: string
      heading: string
    }
  }

  defineProps<Props>()
</script>

<template>
  <section id="backward-link">
    <v-icon icon="mdi-chevron-left" />
    <router-link :to="attrs.path">
      {{ attrs.heading }}へ戻る
    </router-link>
  </section>
</template>

<style scoped>
  #backward-link a {
    color: var(--text-primary-color);
    font-size: 1.125rem;
  }
</style>
