import type { InjectionKey, Ref } from 'vue'
import type { Scale } from './interfaces'

export const scaleKey = Symbol() as InjectionKey<Ref<Scale>>
