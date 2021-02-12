//Syntax arr.entries()
module.exports= function entries() {
    const array1 = ['2', 'b', '5'];
    console.log("array is " ,array1)
    const iterator1 = array1.entries();
    
    console.log(iterator1.next().value);
   console.log("prints [index, value]")
    
    console.log(iterator1.next().value);
    console.log("prints [index, value]")
   
    console.log("----------------------------------------------------")
}