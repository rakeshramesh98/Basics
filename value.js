

module.exports = function value() {
    // expected output: "array1[0]"
// expected output: "array1[1]"
// expected output: "array2[2]"
console.log('\n');
console.log("array1[0]","array1[1]","......");
const array1 = ['jeevan', 'rakesh', 'cognizant'];
const iterator = array1.values();
for (const value of iterator) {
  console.log(value);
}
console.log('\n');
console.log('display iteration .........');
var arr = ['num1', 'num2', 'num3', 'num4'];
var iterator1 = arr.values();
for (let letter of iterator1) {
console.log(letter);
}  //"a" "b" "c" "d" "e"
console.log('\n');
console.log('iteration using next() .............. ');
var arr = ['jeevan', 'rakesh', 'cognizant', 'india'];
var iterator2 = arr.values();
console.log(iterator2.next());       // Object { value: "a", done: false }
console.log(iterator2.next().value);       // "b"
console.log(iterator2.next()["value"]);      // "c"
console.log(iterator2.next());               // Object { value: "d", done: false }
console.log(iterator2.next());               // Object { value: "e", done: false }
console.log(iterator2.next());;               // Object { value: undefined, done: true }
console.log(iterator2.next().value);       // undefined 
}


