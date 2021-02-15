// Syntax
// arr.includes(valueToFind[, fromIndex])
module.exports= function includes() {
const array1 = [1, 2, 3];
console.log("Returns true if the given value is in the array")
console.log("Is this [1, 2, 3] have 2?",array1.includes(2));
// expected output: true
const pets = ['cat', 'dog', 'bat'];

console.log("Is this ['cat', 'dog', 'bat'] have 'cat'?",pets.includes('cat'));
// expected output: true

console.log("Does pets have 'at'?",pets.includes('at'));
// expected output: false
console.log("----------------------------------------------------")
}