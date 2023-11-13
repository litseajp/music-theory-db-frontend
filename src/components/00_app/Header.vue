<script setup lang="ts">
  import { useRoute } from 'vue-router'

  const route = useRoute()
</script>

<template>
  <v-app-bar absolute border flat height="60">
    <div id="app-bar-container" class="mx-auto">
      <router-link to="/" id="app-bar-logo" class="ml-4">
        MusicTheoryDB
      </router-link>
      <div id="app-bar-links" class="ml-10">
        <router-link to="/scales" :class="{ 'current-tool': route.path.includes('scales') }">
          スケール
        </router-link>
      </div>
    </div>
  </v-app-bar>
</template>

<style scoped>
  #app-bar-container {
    width: 100%;
    max-width: 960px;
    display: flex;
  }

  #app-bar-logo {
    color: var(--logo-color);
    font-family: "Khand", sans-serif;
    font-size: 36px;
    text-decoration: none;
  }

  #app-bar-links {
    display: flex;
    align-items: center;
  }

  #app-bar-links a {
    color: var(--text-secondary-color);
    font-size: 1.25rem;
    text-decoration: none;
  }

  #app-bar-links a:hover, #app-bar-links a.current-tool {
    color: var(--text-primary-color);
  }
</style>
