<script setup lang="ts">
  interface Props {
    attrs: {
      path: string
      icon: string
      name: string
      description: string
    }
  }

  defineProps<Props>()
</script>

<template>
  <div class="tool-list-item">
    <router-link :to="attrs.path">
      <div class="tool-list-item-container pa-2">
        <img :src="attrs.icon" height="75" />
        <div class="ml-5">
          <h2>{{ attrs.name }}</h2>
          <span>{{ attrs.description }}</span>
        </div>
      </div>
    </router-link>
  </div>
</template>

<style scoped>
  a {
    text-decoration: none;
  }

  h2 {
    padding-top: 2px;
  }

  span {
    color: var(--text-secondary-color);
    font-size: 1.125rem;
  }

  .tool-list-item:hover {
    background-color: #f5f5f5;
  }

  .tool-list-item-container {
    display: flex;
  }
</style>
