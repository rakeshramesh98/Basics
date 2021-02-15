module.exports = function reduceMethods(){
//{(accumulator, currentValue, currentIndex, array)=>(),initial_value} 
//First arg=>callback
//Second arg=>initial_value
//Simple reduce with initial value
const arr=[10,20,30,40,50]
const sum=arr.reduce((acc,curr,i,arr)=>{
    console.log(i,arr[i]) //Prints index with array elements  curr==arr[i]
return acc+curr
},0)
console.log("Simple sum:",sum)

//Same operation withput initial value
console.log("ES6 sum:",arr.reduce((acc,curr)=>acc+curr))

//Object array sum
let sum1 = [{x: 10}, {x: 20}, {x: 30}, {x: 40}, {x: 50}].reduce(
    (acc, curr) => acc + curr.x
    , 0     //initial value
)

console.log("Objects sum:",sum1) // logs 6

//Flatten the given array ALTERNATIVE for "flat()"
console.log(flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( acc, curr ) => acc.concat(curr),
    []
  )) 

//Counting instances of values in an object
let names = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

console.log(names.reduce((allNames, curr)=> {
  if (curr in allNames) {
    allNames[curr]++
  }
  else {
    allNames[curr] = 1
  }
  return allNames
}, {}))
// countedNames is:
// { 'Alice': 2, 'Bob': 1, 'Tiff': 1, 'Bruce': 1 }


//Remove duplicate items in an array
let myArray = ['a', 'b', 'a', 'b', 'c', 'e', 'e', 'c', 'd', 'd', 'd', 'd']
let myOrderedArray = myArray.reduce((accumulator, currentValue)=> {
  if (accumulator.indexOf(currentValue) === -1) {
    accumulator.push(currentValue) //Whenever some value's index is new it will get added in accumlator 
    console.log(currentValue)
  }
  return accumulator
}, [])

console.log(myOrderedArray)
}
