'use strict';

let str = 'test';

console.log(str[2]) 
// console.log(str[2] = 'd') //error

console.log(str.toUpperCase());
console.log(str);

const fruit = 'some fruit';
console.log(fruit.indexOf('fruit'));
console.log(fruit.indexOf('q'));

const hi = 'hello world';
console.log(hi.slice(6, 11));
console.log(hi.slice(6));
console.log(hi.slice(6, -1));
console.log(hi.slice(-5, -1));

console.log(hi.substr(2, 5)); //1-start, 2-number of letters


const num = 12.2;
console.log(Math.round(num));

const test = '12.2px';
console.log(parseInt(test));
console.log(parseFloat(test));