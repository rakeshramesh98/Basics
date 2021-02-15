// Syntax
// Array.from(arrayLike [, mapFn [, thisArg]])
module.exports= function from() {
console.log("change the string to array")
console.log(Array.from('foots'));

console.log(Array.from([1, 2, 3], x => x + x));
console.log("----------------------------------------------------")
}