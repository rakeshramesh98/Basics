function* forever() {
    let index = 0;
    while (index<6) {
        yield index++;  ///No return for generator method it has only yield
    }
    return 11;    // done will be true  => shld be at last
    yield 12;  //After return we cant give yield
}

let f = forever();
console.log(f.next());
console.log(f.next().value); //we will get value
console.log(f.next()); 

console.log("Printing other things")
console.log(f.next());
console.log(f.next()); 
console.log(f.next()); 
console.log(f.next());
console.log(f.next()); 
console.log(f.next()); 
///false----Generator function is not finished yet
console.log('-------------------------------------');

//To generate random names from given array

function* ran(arr){
    while(arr.length!=0){
        const index=Math.floor(Math.random()* arr.length)
        const val=arr[index]
        arr.splice(index,1)
        yield val
    }
}
const names=["rakesh","jeevan","cts","billpay"]
const uniqueNames=ran(names)
for(const name of uniqueNames){
    console.log(name);
}
console.log('-------------------------------------');
