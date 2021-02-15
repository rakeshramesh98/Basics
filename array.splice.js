module.exports= function arraysplice(){
    console.log('-----------------------------------------------');
    console.log('To extract element from array and also replaces the elements in array');
    console.log('Syntax : name.splice(index no, remove index, insert)');
    const name = ['jeevan', 'rakesh', 'cognizant','usbank'];
    name.splice(2,1,'billpay')
    console.log(name);
    const names = ['jeevan', 'rakesh', 'cognizant', 'billpay'];
    names.splice(3, 1, 'usbank','cdbiexp');
// inserts at index 1
console.log(names);
}