import chromaticNotes from "@/consts/chromaticNotes"

export default function handleEnharmonicNote(note: string): string {
  if (note.includes('doublesharp')) {
    if (note.slice(0, 1) === 'b') {
      return 'csharp'
    } else {
      return chromaticNotes[chromaticNotes.indexOf(note.slice(0, 1)) + 2]
    }
  } else if (note.includes('doubleflat')) {
    if (note.slice(0, 1) === 'c') {
      return 'asharp'
    } else {
      return chromaticNotes[chromaticNotes.indexOf(note.slice(0, 1)) - 2]
    }
  } else if (note.includes('flat')) {
    if (note.slice(0, 1) === 'c') {
      return 'b'
    } else {
      return chromaticNotes[chromaticNotes.indexOf(note.slice(0, 1)) - 1]
    }
  } else if (note === 'esharp') {
    return 'f'
  } else if (note === 'bsharp') {
    return 'c'
  } else if (note.includes('natural')) {
    return note.replace('natural', '')
  } else {
    return note
  }
}
