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

export interface Tone {
  interval: string
  note: string
}

export interface Position {
  string1: number
  string2: number
  string3: number
  string4: number
  string5: number
  string6: number
}

export interface Chord {
  name: string
  description: string
  tones: Tone[]
  positions: Position[]
}
