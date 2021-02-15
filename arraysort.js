module.exports =  function  sorting() {
    console.log('---------------------------------------');
    console.log('sort');
   const a = ["jeevan","rakesh","cognizant"];
    a.sort();
    console.log(a);
    console.log('---------------------------------------');
    console.log('object sort');
    const people = [
        {
            name: "cognizant",
            age: 1998
        },
        {
            name: "Jeevan",
            age: 22
        },
        {
            name: "Rakesh",
            age: 25
        },
        {
            name: "USbank",
            age: 2021
        }
        
    ];
    const sortedByAge = people.sort(function(x,y){
        return x.age - y.age;
    })
    console.log(sortedByAge);
} 