import chromaticNotes from '@/consts/chromaticNotes'
import handleEnharmonicNote from '@/utils/handleEnharmonicNote'

const chromaticNotesx2 = [...chromaticNotes, ...chromaticNotes]

export default function calcSemitoneDistance(note1: string, note2: string): number {
  const note1Enharmonic = handleEnharmonicNote(note1)
  const note2Enharmonic = handleEnharmonicNote(note2)

  const IndexOfNote1 = chromaticNotes.indexOf(note1Enharmonic)
  const chromaticNotesFromTonic = chromaticNotesx2.slice(IndexOfNote1)
  
  return chromaticNotesFromTonic.indexOf(note2Enharmonic)
}
