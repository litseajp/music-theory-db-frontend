const symbols: { [key: string]: string } = { 'sharp': '♯', 'flat': '♭', 'doublesharp': '♯♯', 'doubleflat': '♭♭', 'natural': '♮' }

export default function formatNote(str: string): string  {
  if (str.length === 1) {
    return str.toUpperCase()
  } else {
    return str.slice(0, 1).toUpperCase() + symbols[str.slice(1)]
  }
}
