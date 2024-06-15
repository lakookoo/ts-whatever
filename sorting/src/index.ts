import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCOllection';


// const numbColl = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbColl);
// sorter.sort();
// console.log(numbColl.data);

const chars = new CharacterCollection('Xanb');
const sorter = new Sorter(chars);
sorter.sort();
console.log(chars);
