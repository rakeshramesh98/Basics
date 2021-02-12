
module.exports = function unshift() {
    console.log('\n');
    const array1 = [1, 2, 3];
    console.log('returns length of array');
    console.log(array1.unshift(4, 5));
    // expected output: 5
    console.log('display the entire array');
    console.log(array1);
    // expected output: Array [4, 5, 1, 2, 3]
}