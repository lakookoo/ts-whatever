import { Sorter } from './sorter';
import { NumbersCollection } from './NumbersCollection';
import { CharacterCollection } from './CharactersCOllection';
import { LinkedList } from './LinkedList';


const numbColl = new NumbersCollection([10, 3, -5, 0]);
numbColl.sort();
console.log(numbColl.data);

const chars = new CharacterCollection('Xanb');
chars.sort();
console.log(chars);

const ll = new LinkedList();
ll.add(500);
ll.add(-10);
ll.add(-3);
ll.add(4);

ll.sort();
ll.print();
