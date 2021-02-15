// Syntax
// arr.push([element1[, ...[, elementN]]])
// The push() method adds one or more elements to the end of an array and returns the new length of the array
module.exports= function push(){
    const animals = ['123', '456', '789'];
    
    const count = animals.push('232');
    console.log(count);
    // expected output: 4
    console.log(animals);
    
    animals.push('chickens', 'cats', 'dogs');
    console.log(animals);
    // expected output: Array ["pigs", "goats", "sheep", "cows", "chickens", "cats", "dogs"]
    console.log('----------------------------------------------');
    }