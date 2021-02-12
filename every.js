//Syntax arr.every(callback(element[, index[, array]])[, thisArg])
module.exports= function every() {
    const isBelowThreshold = (currentValue) => currentValue < 40;

   
const array1 = [1,39, 29,11,112, 10, 13, 30];
console.log(`Is every value in this is less than 40`,array1)

console.log(array1.every(isBelowThreshold));
// expected output: true
console.log("----------------------------------------------------")

}