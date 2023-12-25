<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import type { Tone } from '@/types/interfaces'
  import { tonesKey } from '@/types/injectionKeys'
  import handleEnharmonicNote from '@/utils/handleEnharmonicNote'

  const tones = inject(tonesKey) as Ref<Tone[]>

  const noteIntervalMap = computed(() => {
    const result: { [key: string]: string } = {}

    tones.value?.forEach(tone => {
      result[handleEnharmonicNote(tone.note)] = tone.interval
    })
    return result
  })

  const notesOnFretboard = [
    ['e', 'f', 'fsharp', 'g', 'gsharp', 'a', 'asharp', 'b', 'c', 'csharp', 'd', 'dsharp', 'e'],
    ['b', 'c', 'csharp', 'd', 'dsharp', 'e', 'f', 'fsharp', 'g', 'gsharp', 'a', 'asharp', 'b'],
    ['g', 'gsharp', 'a', 'asharp', 'b', 'c', 'csharp', 'd', 'dsharp', 'e', 'f', 'fsharp', 'g'],
    ['d', 'dsharp', 'e', 'f', 'fsharp', 'g', 'gsharp', 'a', 'asharp', 'b', 'c', 'csharp', 'd'],
    ['a', 'asharp', 'b', 'c', 'csharp', 'd', 'dsharp', 'e', 'f', 'fsharp', 'g', 'gsharp', 'a'],
    ['e', 'f', 'fsharp', 'g', 'gsharp', 'a', 'asharp', 'b', 'c', 'csharp', 'd', 'dsharp', 'e']
  ]
</script>

<template>
  <div id="fretboard">
    <table>
      <tr>
        <td v-for="i in 13" :key="i">
          <div v-if="Object.keys(noteIntervalMap).includes(notesOnFretboard[0][i - 1])" class="marker hi-e">
            <img :src="`/src/assets/images/intervals/${noteIntervalMap[notesOnFretboard[0][i - 1]]}_white.png`" />
          </div>
          <div v-if="Object.keys(noteIntervalMap).includes(notesOnFretboard[1][i - 1])" class="marker">
            <img :src="`/src/assets/images/intervals/${noteIntervalMap[notesOnFretboard[1][i - 1]]}_white.png`" />
          </div>
        </td>
      </tr>
      <tr v-for="i in 4" :key="i">
        <td v-for="(note, j) in notesOnFretboard[i + 1]" :key="note">
          <div v-if="i == 1 && j === 12" class="inlay" />
          <div v-if="i == 2 && [3, 5, 7, 9].includes(j)" class="inlay" />
          <div v-if="i == 3 && j === 12" class="inlay" />
          <div v-if="Object.keys(noteIntervalMap).includes(note)" class="marker">
            <img :src="`/src/assets/images/intervals/${noteIntervalMap[note]}_white.png`" />
          </div>
        </td>
      </tr>
    </table>
  </div>
</template>

<style scoped>
  table {
    border-collapse: collapse;
  }

  tr {
    height: 36px;
  }

  td {
    width: 72px;
    border: solid 2px #333;
    position: relative;
  }

  td:first-child {
    width: 48px;
    border: none;
    border-right: solid 8px #333;
  }

  img {
    width: 30px;
    height: 30px;
  }

  #fretboard {
    padding: 16px 0;
  }

  .marker {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: #444;
  }

  .marker.hi-e {
    top: 0%;
  }

  .inlay {
    width: 16px;
    height: 16px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #c5c5c5;
  }
</style>
