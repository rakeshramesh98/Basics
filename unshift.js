
module.exports = function unshift() {
    console.log('\n');
    const array1 = [1, 2, 3];
    console.log('returns length of array');
    console.log(array1.unshift(4, 5));
    // expected output: 5
    console.log('display the entire array');
    console.log(array1);
    // expected output: Array [4, 5, 1, 2, 3]
    

    let arr = [4, 5, 6]
    arr.unshift(1, 2, 3)
    console.log(arr);
// [1, 2, 3, 4, 5, 6]

    arr = [4, 5, 6] // resetting the array

    arr.unshift(1)
    arr.unshift(2)
    arr.unshift(3)

console.log(arr)
// [3, 2, 1, 4, 5, 6]
}