// Syntax
// arr.indexOf(searchElement[, fromIndex])
module.exports= function indexOf() {
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log("Index of 'bison' in ['ant', 'bison', 'camel', 'duck', 'bison']",beasts.indexOf('bison'));
// expected output: 1

// start from index 2
console.log("Index of 'bison' in ['ant', 'bison', 'camel', 'duck', 'bison'] start from index 2",beasts.indexOf('bison', 2));
// expected output: 4

console.log("Returns -1 if it doesnt exist",beasts.indexOf('giraffe'));
// expected output: -1
console.log("----------------------------------------------------")
}