//Array.fill()
module.exports= function arrayFill() {
    const array1 = [1,2,3,4,5,6];
console.log("fill with 0 from position 1 until position 6")
console.log(array1.fill(0, 1, 6)); 

console.log("fill with 0 from position 1 until position 6")
console.log(array1.fill(10, 3)); // fill with 10 from position 3

console.log(array1.fill(11)); //  fills the whole array with 11
}


