// Syntax
// var newArray = arr.flat([depth]);
module.exports= function flat() {
    const arr1 = [0, 1, 2, [3, 4]];
    console.log("Removes the '1-time' nested arrays from [0, 1, 2, [3, 4]] ")
    console.log(arr1.flat(1));
    
    const arr2 = [0, [1, 2], [[[3, 4]]]];
    console.log("Removes the '3-times' nested arrays from [0, 1, 2, [[[3, 4]]]] ")
    console.log(arr2.flat(34));
    console.log("----------------------------------------------------")
}