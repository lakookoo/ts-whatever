import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';


const numbColl = new NumbersCollection([10, 3, -5, 0]);
const sorter = new Sorter(numbColl);
sorter.sort();
console.log(numbColl.data);
