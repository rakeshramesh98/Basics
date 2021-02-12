//Syntax arr[Symbol.iterator]()
module.exports= function Iterate() {
var arr = ['a', '2', '3'];
var eArr = arr[Symbol.iterator]();
console.log("iterates ['a', '2', '3']")
console.log(eArr.next().value); // a
console.log(eArr.next().value); // 2
console.log(eArr.next().value); // 3
console.log("----------------------------------------------------")
}