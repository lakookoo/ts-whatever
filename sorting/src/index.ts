import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCOllection';
import { LinkedList } from './LinkedList';


// const numbColl = new NumbersCollection([10, 3, -5, 0]);
// const sorter = new Sorter(numbColl);
// sorter.sort();
// console.log(numbColl.data);

// const chars = new CharacterCollection('Xanb');
// const sorter = new Sorter(chars);
// sorter.sort();
// console.log(chars);

const ll = new LinkedList();
ll.add(500);
ll.add(-10);
ll.add(-3);
ll.add(4);

const sorter = new Sorter(ll);

sorter.sort();
ll.print();
