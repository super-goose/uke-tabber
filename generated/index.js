const { Note } = require("./note");
// const parseImportantPart = (song: string): string => {
//   return song.split('\n').filter(_ => _[1] !== ':').join('');
// }
// console.log(parseImportantPart(swallowtailJig));
const ukeTunings = [
    new Note('a', 4),
    new Note('e', 4),
    new Note('c', 4),
    new Note('g', 3),
].map((note) => {
    const nylonString = [];
    for (let i = 0, l = 12; i < l; i++) {
        nylonString.push(note);
        note.sharpen();
    }
});
console.log(ukeTunings.map((_) => _.toString()).join('\n'));
describe('note module', () => {
    const { Note } = require('./note');
    it('makes a note', () => {
        const aSharp = new Note('a', 3, Note.SHARP);
        expect(aSharp.toString()).toBe('3A♯');
    });
    it('sharpens a note', () => {
        const aSharp = new Note('a', 3, Note.SHARP);
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('3B');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4C');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4C♯');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4D');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4D♯');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4E');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4F');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4F♯');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4G');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4G♯');
        aSharp.sharpen();
        expect(aSharp.toString()).toBe('4A');
        aSharp.sharpen(4);
        expect(aSharp.toString()).toBe('5C♯');
    });
    it('flattens a note', () => {
        const aSharp = new Note('a', 3, Note.SHARP);
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3A');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3A♭');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3G');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3G♭');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3F');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3E');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3E♭');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3D');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3D♭');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('3C');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('2B');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('2B♭');
        aSharp.flatten();
        expect(aSharp.toString()).toBe('2A');
    });
});
