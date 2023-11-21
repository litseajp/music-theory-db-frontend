<script setup lang="ts">
  import { computed, inject, type Ref } from 'vue'
  import chromaticNotes from '@/consts/chromaticNotes'
  import type { Scale } from '@/types/interfaces'
  import { scaleKey } from '@/types/injectionKeys'
  import calcSemitoneDistance from '@/utils/calcSemitoneDistance'
  import handleEnharmonicNote from '@/utils/handleEnharmonicNote'

  const scale = inject(scaleKey) as Ref<Scale>

  const allKeys = [...chromaticNotes.map((note) => note + '1'), ...chromaticNotes.map((note) => note + '2')]

  const scaleKeys = computed(() => {
    const result: { [key: string]: string } = {}
    let tonicIndex = 0

    scale.value.tones?.forEach((tone, idx) => {
      if (idx === 0) {
        const tonicKey = handleEnharmonicNote(tone.note) + '1'
        result[tonicKey] = tone.interval
        tonicIndex = allKeys.indexOf(tonicKey)
      } else {
        const toneIndex = tonicIndex + calcSemitoneDistance(scale.value.tones[0].note, tone.note)
        result[allKeys[toneIndex]] = tone.interval
      }
    })

    return result
  })
</script>

<template>
  <div id="keyboard">
    <table>
      <tr class="upper">
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[0]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[0]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[1]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[1])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[1]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[1]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[2]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[3]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[3])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[3]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[3]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[4]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[4]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[5]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[5]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[6]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[6])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[6]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[6]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[7]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[8]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[8])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[8]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[8]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[9]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[10]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[10])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[10]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[10]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[11]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[11]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[12]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[12]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[13]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[13])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[13]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[13]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[14]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[15]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[15])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[15]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[15]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[16]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[16]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[17]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[17]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[18]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[18])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[18]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[18]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[19]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[20]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[20])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[20]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[20]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[21]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[22]) }" class="black border-left">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[22])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[22]]}_white.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[22]) }" class="black border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[23]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[23]) }" />
      </tr>
      <tr class="lower">
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[0]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[0]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[0])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[0]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[0]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[2]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[2]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[2])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[2]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[2]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[4]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[4]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[4])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[4]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[4]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[5]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[5]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[5])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[5]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[5]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[7]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[7]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[7])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[7]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[7]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[9]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[9]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[9])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[9]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[9]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[11]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[11]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[11])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[11]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[11]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[12]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[12]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[12])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[12]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[12]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[14]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[14]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[14])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[14]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[14]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[16]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[16]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[16])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[16]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[16]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[17]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[17]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[17])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[17]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[17]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[19]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[19]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[19])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[19]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[19]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[21]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[21]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[21])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[21]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[21]) }" class="border-right" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[23]) }" />
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[23]) }">
          <img v-if="Object.keys(scaleKeys).includes(allKeys[23])"
               :src="`/src/assets/images/intervals/${scaleKeys[allKeys[23]]}_black.png`" />
        </td>
        <td :class="{ 'scale-tone': Object.keys(scaleKeys).includes(allKeys[23]) }" />
      </tr>
    </table>
  </div>
</template>

<style scoped>
  table {
    border: solid 2px #333;
    border-collapse: collapse;
  }

  tr.upper {
    height: 150px;
  }

  tr.lower {
    height: 75px;
  }

  td {
    width: 15px;
    position: relative;
    box-sizing: content-box;
    background-color: #aaa;
  }

  td.black {
    border-bottom: solid 2px #333;
  }

  td.border-left {
    border-left: solid 2px #333;
  }

  td.border-right {
    border-right: solid 2px #333;
  }

  td.scale-tone {
    background-color: #fff;
  }

  td.scale-tone.black {
    background-color: #333;
  }

  img {
    width: 30px;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, 0);
    z-index: 1;
  }

  .black img {
    top: 50%;
    left: 0%;
    transform: none;
  }
</style>
