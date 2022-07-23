import { Note } from "./note";

const { Instrument } = require('./instrument');

describe('"Instrument" module', () => {
  it('makes an instrument', () => {
    const ukulele = new Instrument(
      new Note('a', 4),
      new Note('e', 4),
      new Note('c', 4),
      new Note('g', 3),
    )

    expect(ukulele.strings.length).toBe(4);
    expect(Array.isArray(ukulele.strings[0])).toBeTruthy();
  });

  // it('prints the instrument to the screen', () => {
  //   const ukulele = new Instrument(
  //     new Note('a', 4),
  //     new Note('e', 4),
  //     new Note('c', 4),
  //     new Note('g', 3),
  //   )

  //   expect(ukulele.toString()).toBe([
  //     '||  4A  |',
  //     '||  4E  |',
  //     '||  4C  |',
  //     '||  3G  |',
  //   ].join('\n'));

  // });
});