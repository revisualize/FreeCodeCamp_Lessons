// My solution for https://www.freecodecamp.com/challenges/sum-all-primes

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

sumPrimes(100);
