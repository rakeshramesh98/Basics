module.exports = function reduceMethods(){
//{(accumulator, currentValue, currentIndex, array)=>(),initial_value} 
//First arg=>callback
//Second arg=>initial_value
//Simple reduce with initial value
const arr=[10,20,30,40,50]
const sum2=arr.reduce((acc,curr,i,arr)=>{
    console.log(i,arr[i]) //Prints index with array elements  curr==arr[i]
return acc+curr
},0)
console.log("Simple sum:",sum2)
console.log('-------------------------------------');
//Same operation withput initial value
console.log("ES6 sum:",arr.reduce((acc,curr)=>acc+curr))
console.log('-------------------------------------');
//Object array sum
let sum1 = [{x: 10}, {x: 20}, {x: 30}, {x: 40}, {x: 50}].reduce(
    (acc, curr) => acc + curr.x
    , 0     //initial value
)

console.log("Objects sum:",sum1) // logs 6
console.log('-------------------------------------');
//Flatten the given array ALTERNATIVE for "flat()"
console.log(flattened = [[0, 1], [2, 3], [4, 5]].reduce(
    ( acc, curr ) => acc.concat(curr),
    []
  )) 
  console.log('-------------------------------------');
//Counting instances of values in an object
let names1 = ['Alice', 'Bob', 'Tiff', 'Bruce', 'Alice']

console.log(names1.reduce((allNames, curr)=> {
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

console.log('-------------------------------------');
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

const num = [1,2,5,8,9,5,8,5];
let sum = 0;
for (let n of num)
  sum+= n;
console.log('using for ',sum);

console.log('-------------------------------------');

///using reduce

let number = [1,2,3,4,5,6];
let add = 0;
 add = number.reduce((acc,currVal) => {
   return acc+currVal;
 },0);
console.log('using reduce',add)
console.log('-------------------------------------');
//arrays

const people = [
  {
    id:1,
    name:'Jeevan',
    age:21
  },
  {
    id:2,
    name:'Rakesh',
    age:23
  },
  {
    id:3,
    name:'Cognizant',
    age:50
  }
]
console.log('-------------------------------------');
let result = 0;
result = people.reduce((acc,curVal) => acc+1,0);

console.log('number of persons in group ',result);

let sumAge = 0;
sumAge = people.reduce((acc,curVal) => acc+curVal.age, 0);

console.log('Sum of their age',sumAge);

let names = 0;
names = people.reduce((acc,curVal)=> {
  return [...acc,curVal.name]
},[]);
console.log(names);
console.log('-------------------------------------');


/// adding a unique key to the people

let uniqueKey = 0;
uniqueKey = people.reduce((acc,curVal) => {
  return { ...acc, [curVal.id]: curVal.name };
},{});

console.log(uniqueKey);

console.log(uniqueKey['3']);
console.log('-------------------------------------');

/// highest age

let maxAge = 0;
maxAge = people.reduce((acc,curVal) => {
  if(acc===null || acc< curVal.age)
  return curVal.age
},null);

console.log(maxAge);
console.log('-------------------------------------');
}
