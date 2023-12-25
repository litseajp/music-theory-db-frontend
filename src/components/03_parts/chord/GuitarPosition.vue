<script setup lang="ts">
  import { computed } from 'vue'
  import type { Position } from '@/types/interfaces'

  const props = defineProps<{ position: Position }>()

  const startFretNum = computed(() => {
    let minFretNum = 99
    let maxFretNum = 0

    for (const fretNum of Object.values(props.position)) {
      if (fretNum > 0 && fretNum < minFretNum) {
        minFretNum = fretNum
      }

      if (fretNum > maxFretNum) {
        maxFretNum = fretNum
      }
    }

    return (maxFretNum < 5) ? 0 : minFretNum - 1
  })
</script>

<template>
  <v-col cols="4" class="pa-0 pt-4">
    <table>
      <tr v-for="(fretNum, i) in Object.values(position).slice(1)" :key="fretNum">
        <td :class="{ 'zero-fret': startFretNum === 0 }">
          <template v-if="i === 0">
            <img v-if="position['string1'] === 0" src="/src/assets/images/position/open.png" class="hi-e" />
            <img v-else-if="position['string1'] === -1" src="/src/assets/images/position/mute.png" class="hi-e" />
          </template>
          <img v-if="fretNum === 0" src="/src/assets/images/position/open.png" />
          <img v-else-if="fretNum === -1" src="/src/assets/images/position/mute.png" />
        </td>
        <td v-for="j in 4" :key="j">
          <template v-if="i === 0">
            <div v-if="position['string1'] === j + startFretNum" class="marker hi-e" />
          </template>
          <div v-if="fretNum === j + startFretNum" class="marker" />
        </td>
      </tr>
      <tr class="fret-number">
        <td />
        <td v-for="i in 4" :key="i">
          {{ startFretNum + i }}
        </td>
      </tr>
    </table>
  </v-col>
</template>

<style scoped>
  table {
    border-collapse: collapse;
  }

  tr {
    height: 30px;
  }

  td {
    width: 63px;
    border: solid 2px #333;
    position: relative;
  }

  td:first-child {
    width: 42px;
    border: none;
  }

  td.zero-fret {
    border-right: solid 8px #333;
  }

  tr.fret-number {
    height: 45px;
  }
  
  tr.fret-number td {
    border: none;
    text-align: center;
    vertical-align: bottom;
    color: var(--text-primary-color);
    font-size: 1.375rem;
  }

  img, .marker {
    width: 24px;
    height: 24px;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img.hi-e, .marker.hi-e {
    top: 0%;
  }

  .marker {
    border-radius: 50%;
    position: absolute;
    z-index: 1;
    background-color: #444;
  }
</style>
