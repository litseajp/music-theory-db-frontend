export interface ScaleCategory {
  category: string
  scales: {
    path: string
    name: string
    description: string
  }[]
}

export interface Scale {
  name: string
  description: string
  tones: {
    interval: string
    note: string
    tone_type: string
  }[]
}

export interface ChordCategory {
  category: string
  chords: {
    path: string
    quality: string
    name: string
    description: string
  }[]
}
