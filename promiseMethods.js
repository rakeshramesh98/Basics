//solves callback problems
module.exports = function promiseMethods(){

//Using Promise.all for multiple response and 
//used for parallel running of all three x,y,z so that one no need to wait for next one's completion
const x=new Promise((resolve,reject)=>{
    resolve("x here") 
})
const y=new Promise((resolve,reject)=>{
    resolve("y here") 
})
const z=new Promise((resolve,reject)=>{
    resolve("z here") 
})

Promise.all([
    x,
    y,
    z
]).then((message)=>{
    console.log(message)
})

//Promise.race
//will return which is completed first
const a=new Promise((resolve,reject)=>{
    resolve("a here") 
})
const b=new Promise((resolve,reject)=>{
    resolve("b here")
})
const c=new Promise((resolve,reject)=>{
    resolve("c here")
})

Promise.race([
    a,
    b,
    c
]).then((message)=>{
    console.log(message) /// As a is declared first it will be finished first
})

///Finally runs whether the promise was fulfilled successfully or rejected
///then runs when the promise was fulfilled
///catch runs when the promise was rejected
let p=new Promise((resolve,reject)=>{
    let a=1+2
    if(a==2){
        resolve('Success')
    }
    else{
        reject('Failed')
    }
})
p.then((message)=>{
    console.log(message)
}).catch((message)=>{
    console.log(message)
}).finally((message)=>{
    console.log("This is finally")
})
console.log('-------------------------------------');
}