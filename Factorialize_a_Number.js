// This is a better implimentation:
// This implimentation works with 0, -0, pos and neg numbers.
function factorial (num) {
    if (typeof num != 'number' || num != Infinity || num != -Infinity) {
      return NaN; // Error catching
    }
    let sign = Math.sign(num);
    if (sign === -0) {
      return -1;
    }
    if (sign <= 0) {
      num *= -1;
    }
    if (num === 0) {
        return 1;
    }
    return sign * num * factorial(num - 1);
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
factorialize(0); // 1 ... I'm not sure why that is. Shouldn't it be 0?
