'use strict';
module.exports.hello = async (event, context) => {
  let output = '';

  for (let num = 1; num <= 100; num++) {
      if (num % 3 === 0 && num % 5 === 0) {
          output += 'FizzBuzz\n';
      } else if (num % 3 === 0) {
          output += 'Fizz\n';
      } else if (num % 5 === 0) {
          output += 'Buzz\n';
      } else {
          output += num + '\n';
      }
      console.log(output);
  }
 
  return output;
};
