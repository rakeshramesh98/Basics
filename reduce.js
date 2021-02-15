module.exports = function arrayreduce(){
    console.log('-------------------------------------');
    console.log('arrayreduce');
    const arr = [1,2,6,9,2,5,9,5,6];
    const reducer  = (acc,curr) => acc+curr;
    console.log(arr.reduce(reducer));
    console.log(arr.reduce(reducer,5));
    console.log('-------------------------------------');
    console.log('array of arrays');
    let array = [[1,8],[6,3],[0,7]].reduce(
    function (acc,curr){
        return acc.concat(curr)
    },
    []
    )
    console.log(array);
    console.log('-------------------------------------');
    console.log('objects reduce');
    let information = [{
        name:'Jeevan',
        role:['pat','pa','associate'],
        age: 21
    },{
        name:'Rakesh',
        role:['analyst','senioranalyst','associate'],
        age: 26
    },{
        name:'cognizant',
        role:['bangalore','chennai','hyderabad'],
        age: 52
    }
]
let all  = information.reduce(function (acc,curr){
    return[...acc,...curr.role]
},['Roles'])
console.log(all);
}