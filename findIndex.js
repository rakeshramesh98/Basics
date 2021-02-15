// Syntax
// arr.findIndex(callback( element[, index[, array]] )[, thisArg])
module.exports= function findIndex() {
console.log("Given array is [5, 12, 8, 130, 44] ")
const array1 = [5, 15, 11, 130, 132];

const isLargeNumber = (element) => element > 13;
console.log("The index of first element >13 (Otherwise, it returns -1)")
console.log(array1.findIndex(isLargeNumber));
console.log("----------------------------------------------------")
}