//Syntax arr.copyWithin(target[, start[, end]])
module.exports= function copyWithin() {

const array1 = ['1', 'b', '2', '5', 'e'];
console.log("array is " ,array1)
console.log("copy to index 0 the element at index 3")

console.log(array1.copyWithin(0, 3, 4));
console.log(`copy to index 1 all elements from index 3 to the end `)

console.log(array1.copyWithin(1, 3));

console.log("----------------------------------------------------")
}