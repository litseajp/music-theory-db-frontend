<script setup lang="ts">
  const currentYear = new Date().getFullYear()
</script>

<template>
  <v-footer height="60">
    <address>
      © {{ currentYear }} - <a href="https://github.com/litseajp">Litsea</a> All rights reserved.
    </address>
  </v-footer>
</template>

<style scoped>
  address, a {
    color: var(--text-primary-color);
  }

  address {
    font-style: normal;
  }

  .v-footer {
    flex: none;
    justify-content: center;
  }
</style>
