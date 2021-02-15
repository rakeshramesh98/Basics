//Syntax
// let newArray = arr.filter(callback(currentValue[, index[, array]]) {
//     // return element for newArray, if true
//   }[, thisArg]);
module.exports= function filter() {
    const words = ['1234', 'limitexceed', 'sad213', 'easd23', 'destruction', 'present'];
    console.log("Filters the word whose length is > 6")
    const result = words.filter(word => word.length > 6);
    
    console.log(result);
    console.log("----------------------------------------------------")
}