import type { InjectionKey, Ref } from 'vue'
import type { Scale, Chord, Tone } from './interfaces'

export const scaleKey = Symbol() as InjectionKey<Ref<Scale>>

export const chordKey = Symbol() as InjectionKey<Ref<Chord>>

export const tonesKey = Symbol() as InjectionKey<Ref<Tone[]>>
