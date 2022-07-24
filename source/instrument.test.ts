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

  it('prints the instrument to the screen', () => {
    const ukulele = new Instrument(
      new Note('a', 4),
      new Note('e', 4),
      new Note('c', 4),
      new Note('g', 3),
    )

    expect(ukulele.toString()).toBe([
      '  4A : ||  4A♯ |  4B  |  5C  |  5C♯ |  5D  |  5D♯ |  5E  |  5F  |  5F♯ |  5G  |  5G♯ |  5A  |',
      '  4E : ||  4F  |  4F♯ |  4G  |  4G♯ |  4A  |  4A♯ |  4B  |  5C  |  5C♯ |  5D  |  5D♯ |  5E  |',
      '  4C : ||  4C♯ |  4D  |  4D♯ |  4E  |  4F  |  4F♯ |  4G  |  4G♯ |  4A  |  4A♯ |  4B  |  5C  |',
      '  3G : ||  3G♯ |  3A  |  3A♯ |  3B  |  4C  |  4C♯ |  4D  |  4D♯ |  4E  |  4F  |  4F♯ |  4G  |',
    ].join('\n'));

  });
});