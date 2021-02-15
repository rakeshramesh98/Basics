// Syntax
// arr.find(callback(element[, index[, array]])[, thisArg])
module.exports= function find() {
const array1 = [5, 11, 8, 130, 44];
console.log('The array is [5, 11, 8, 130, 44]')
console.log('Returns the first element which is >10')
const found = array1.find(element => element > 10);

console.log(found);
console.log("----------------------------------------------------")
}