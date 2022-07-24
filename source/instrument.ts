const { Note } = require('./note');

const FRETS = 12;
export class Instrument {
  strings: Array<Array<typeof Note>>

  constructor(...strings: Array<typeof Note>) {
    this.strings = strings.map((note): typeof Note[] => {
      const nylonString: typeof Note[] = [];
      for (let i = 0, l = FRETS + 1; i < l; i++) {
        nylonString.push(note.clone());
        note.sharpen()
      }
      return nylonString;
    });
  }

  public toString = (): string => {
    return this.strings.map((nylonString: Array<typeof Note>) => {
      // assemble the strings
      return `${nylonString.map((fret: typeof Note, i): string => {

        // assemble each string
        return `  ${fret.toString(' ')}${i ? '' : ':'} |${i ? '' : '|'}`
      }).join('')}`;
    }).join('\n');
  }
}
