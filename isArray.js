// Syntax
// Array.isArray(value)

module.exports= function isArray() {
    console.log("finds the given is array or not")
console.log("[1, 2, 3]",Array.isArray([1, 2, 3]))  // true
console.log("{foo: 123}",Array.isArray({foo: 123})); // false
console.log("'foobar'",Array.isArray('foobar'))   // false
console.log("undefined",Array.isArray(undefined))  // false
console.log("----------------------------------------------------")
}