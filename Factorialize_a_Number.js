function factorial (num, sign, accumulator = 1) {
    // This function returns 1 if the input is -0 because of coercion.
    // Not really anything I can think of to fix that issue.
    if (typeof num != 'number' ||
               num == Infinity || 
               num == -Infinity ||
               num % 1 !== 0) {
        return NaN;
    }
    if (sign === undefined) {
      sign = Math.sign(num);
      if (sign === -1) {
          num *= -1;
      }
      if (sign === 0) {
         sign = 1;
      }
      if (sign === -0) {
          sign = -1;
      }
    }

    if (num === 0 || num === 1 || num === -1) {
        return sign * accumulator;
    }

    if (num > 0) {
        return factorial(num-1, sign, accumulator*num);
    }
}



// const factorialize = (num) => (num === 0) ? 1 : num * factorialize(num -1);

/*
function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num -1);
}
*/

/* --- This is old code that I refactored to use recursion:
  for (var factorial = 1, i = 2; i <= num; i++) {
    factorial = factorial * i;
  }
  return factorial;

   --- This is older code that I refactored to what is above
  if (num === 0) {
    return 1;
  }
  var fib = 1;
  for (var i = 2; i <= num; i++) {
    fib = fib * i;
  }
  return fib;
*/

factorialize(5); // 120
factorialize(10); // 3628800
factorialize(20); // 2432902008176640000
factorialize(0); // 1
