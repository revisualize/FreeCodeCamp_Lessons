// My solution for https://www.freecodecamp.com/challenges/sum-all-primes

function sumPrimes(num) {
  if (num<=1) return 0;
  if (num===2) return 2;
  var primes = [2];
  var total = 2;
  for (var i=3; i <= num; i += 2) {
    if (isPrime(i)) {
      primes.push(i);
      total += i;
    }
  } 
  return total;
  
  function isPrime(p) {
    var sqrt = Math.ceil(Math.sqrt(p));
    for (var j=0; j < primes.length && primes[j] <= sqrt; j++) {
      if (p % primes[j]===0) return false;
    }
    return true;
  }
}

console.time();
sumPrimes(500000);
console.timeEnd();
// default: 40.899ms



/* My first solution is below:

function sumPrimes(num) {
   var primes = [2,3,5,7];
   var total = 17;
   function isPrime(num) {
      for (var i = 3; i < primes.length; i++) {
           if (num % primes[i] === 0) {
              return false;
           }
      }
      return true;
   }

  for (var i = 3; i <= num; (i = i + 2) ) {
      if (i % 2 === 0 || i % 3 === 0 || i % 5 === 0 || i % 7 === 0) {
        continue; // code to shortcut the function call.
      } else {
          if (isPrime(i)) {
              total += i;
              primes.push(i);
          }
      }
  }
  return total;
}

console.time();
sumPrimes(500000);
console.timeEnd();

// default: 3491.986ms

