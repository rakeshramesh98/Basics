// Syntax
// arr.reduceRight(callback(accumulator, currentValue[, index[, array]])[, initialValue])
module.exports= function reduceRight() {
    const array1 = [[0, 1], [2, 3], [4, 5]].reduceRight(
        (accumulator, currentValue) => accumulator.concat(currentValue)
      );
      console.log("Reduce from right side")
      console.log(array1);
      // expected output: Array [4, 5, 2, 3, 0, 1]
      console.log('----------------------------------------------');
    }