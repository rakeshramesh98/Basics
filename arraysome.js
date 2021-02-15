module.exports  = function arraysome(){
    console.log('-------------------------------------');
    console.log('some');
    const array = [2,5,9,6,2,3,6,8,2,3,4,2,7,3]
    const even = (element) => element % 2 ===1;
    console.log(array.some(even));

    console.log('---------------------------------\n');
    const names = ['jeevan','rakesh','cognizant','usbank'];
    function checkAvailability(arr,val){
        return arr.some(function(arrVal){
            return val === arrVal;
        });
    }
    console.log(checkAvailability(names, 'billpay'));
    console.log(checkAvailability(names, 'jeevan'));
}