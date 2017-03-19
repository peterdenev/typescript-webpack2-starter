// try js tree shaking
import {myJsFunc} from './jsJS';
myJsFunc();

// try ts tree shaking
import {f1} from './tsTs';
f1('ts f1');

// try js umd load
import * as myJsRez from './myJsLib';
console.log(myJsRez);

// try commonjs load
import * as myJsRez2 from './myJsLib2';
console.log(myJsRez2);

// try npm load (needed to fill vendor file)
import jQ from 'jquery';
console.log(jQ);

import { Person } from './ClassAndAno';

let p = new Person();
p.setName('John');
p.printName();
console.log(p.myMethod('bar'));

// simple dummy export
export let dummy = 'dummy';
