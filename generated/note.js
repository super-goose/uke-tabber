"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Note = void 0;
class Note {
    static SHARP = '♯';
    static FLAT = '♭';
    static NATURAL = '♮';
    name;
    octave;
    accidental;
    constructor(name, octave, accidental = Note.NATURAL) {
        this.name = name;
        this.octave = octave;
        this.accidental = accidental;
    }
    canSharp = () => {
        return (!['b', 'e'].includes(this.name) &&
            this.accidental !== Note.SHARP);
    };
    canFlat = () => {
        return (!['c', 'f'].includes(this.name) &&
            this.accidental !== Note.FLAT);
    };
    upOneNote = (note) => {
        const n = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        const l = 7;
        return n[(n.indexOf(note) + 1) % l];
    };
    downOneNote = (note) => {
        const n = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];
        const l = 7;
        return n[(n.indexOf(note) - 1) % l];
    };
    // public sharpen = (numberOfSemitones = 1): Note => {
    //   if (this.canSharp()) {
    //     this.accidental = { [Note.FLAT]: Note.NATURAL, [Note.NATURAL]: Note.SHARP }[this.accidental];
    //   }
    // }
    // public flatten = (numberOfSemitones = 1): Note => {
    //   if (this.canFlat()) {
    //     this.accidental = { [Note.SHARP]: Note.NATURAL, [Note.NATURAL]: Note.FLAT }[this.accidental];
    //   }
    // }
    toString = () => `${this.octave}${this.name}${this.accidental === Note.NATURAL ? '' : this.accidental}`;
}
exports.Note = Note;
// module.exports = { Note };
