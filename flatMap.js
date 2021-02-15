// Syntax
// var new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {
//     // return element for new_array
// }[, thisArg])
module.exports= function flatMap() {
    let arr1 = [1, 2, 3, 4];
console.log("Array is [1, 2, 3, 4]")
console.log("map:",arr1.map(x => [x * 2]))
console.log("flatmap:",arr1.flatMap(x => [x * 2]))
console.log("flatmap: level2",arr1.flatMap(x => [[x * 2]]))
console.log("----------------------------------------------------")
}