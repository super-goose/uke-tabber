// import { swallowtailJig } from './song';

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
];

console.log(ukeTunings.map((_: typeof Note) => _.toString()).join('\n'))