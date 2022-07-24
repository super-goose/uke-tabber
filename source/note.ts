type NoteName = 'a' | 'b' | 'c' | 'd' | 'e' | 'f' | 'g';
type Accidental = '♯' | '♭' | '♮'
type Octave = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8

export class Note {
  static SHARP: Accidental = '♯';
  static FLAT: Accidental = '♭';
  static NATURAL: Accidental = '♮';

  key = 'C'
  name: NoteName
  octave: Octave
  accidental: Accidental

  constructor(name: NoteName, octave: Octave, accidental: Accidental = Note.NATURAL) {
    this.name = name;
    this.octave = octave;
    this.accidental = accidental;
  }

  public clone = (): Note => {
    return new Note(this.name, this.octave, this.accidental);
  }

  private canSharp = (): boolean => {
    return (
      !['b', 'e'].includes(this.name) &&
      this.accidental !== Note.SHARP
    );
  }

  private canFlat = (): boolean => {
    return (
      !['c', 'f'].includes(this.name) &&
      this.accidental !== Note.FLAT
    );
  }

  private upOneNote = (): void => {
    const n = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const l = 7;
    this.name = n[(n.indexOf(this.name) + 1) % l] as NoteName;
  }

  private downOneNote = (): void => {
    const n = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
    const l = 7;
    this.name = n[(n.indexOf(this.name) + 6) % l] as NoteName;
  }

  public sharpen = (numberOfSemitones = 1): Note => {
    for (; numberOfSemitones > 0; numberOfSemitones--) {
      if (this.canSharp()) {
        this.accidental = { [Note.FLAT]: Note.NATURAL, [Note.NATURAL]: Note.SHARP }[this.accidental];
        continue;
      }

      this.upOneNote();
      this.accidental = Note.NATURAL;
      if (this.name === 'c') {
        this.octave += 1
      }
    }
    return this;
  }

  public flatten = (numberOfSemitones = 1): Note => {
    for (; numberOfSemitones > 0; numberOfSemitones--) {
      if (this.canFlat()) {
        this.accidental = { [Note.SHARP]: Note.NATURAL, [Note.NATURAL]: Note.FLAT }[this.accidental];
        continue;
      }

      if (this.name === 'c') {
        this.octave -= 1
      }
      this.downOneNote();
      this.accidental = Note.NATURAL;
    }
    return this;
  }

  public toString = (padding = ''): string => (
    `${this.octave}${this.name.toUpperCase()}${this.accidental === Note.NATURAL ? padding : this.accidental}`
  );
}

// module.exports = { Note };
