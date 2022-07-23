const { Note } = require('./note');

export class Instrument {
  strings: Array<Array<typeof Note>>
  constructor(...strings: Array<typeof Note>) {
    this.strings = strings.map((note): typeof Note[] => {
      const nylonString: typeof Note[] = [];
      for (let i = 0, l = 12; i < l; i++) {
        nylonString.push(note);
        note.sharpen()
      }
      return nylonString;
    });
  }


}
