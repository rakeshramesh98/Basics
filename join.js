// Syntax
// arr.join([separator])

module.exports= function join() {
    const elements = ['Fire', 'Air', 'Water'];
console.log("Joins the array ['Fire', 'Air', 'Water']")
console.log("join with ")
console.log(elements.join(),"\n");
// expected output: "Fire,Air,Water"
console.log("join with ' '")
console.log(elements.join(''),"\n");
// expected output: "FireAirWater"
console.log("join with '-' ")
console.log(elements.join('-'));
// expected output: "Fire-Air-Water"
console.log("----------------------------------------------------")
}