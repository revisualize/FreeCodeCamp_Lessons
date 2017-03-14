// My solution for https://www.freecodecamp.com/challenges/sum-all-primes

function sumPrimes(num) {
  if (num <= 1) return 0;
  if (num === 2) return 2;
  var primes = [2];
  var total = 2;
  for (var i=3; i <= num; i += 2) {
    if (isPrime(i)) {
      total += i;
      primes.push(i);
    }
  } 
  return total;
  
  function isPrime(p) {
    if (p === 2 || p === 3 || p === 5 || p === 7) return true;
    if (p % 2 === 0 || p % 3 === 0 || p % 5 === 0 || p % 7 === 0) return false;
        // the above code eliminates a large set of numbers.
    var sqrt = Math.ceil(Math.sqrt(p));
    for (var j = 0; j < primes.length && primes[j] <= sqrt; j++) {
      if (p % primes[j]===0) return false;
    }
    return true;
  }
}

console.time();
console.log(sumPrimes(500000));
console.timeEnd();
// default: 40.899ms


/* Notes: (In no order)
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
    // added above because one of my earlier solutions I was going to try using this and found the code sample for primes
http://www.stoimen.com/blog/2012/05/08/computer-algorithms-determine-if-a-number-is-prime/
http://stackoverflow.com/questions/1032427/efficient-storage-of-prime-numbers
http://stackoverflow.com/questions/1801391/what-is-the-best-algorithm-for-checking-if-a-number-is-prime
https://www.topcoder.com/community/data-science/data-science-tutorials/mathematics-for-topcoders/
https://en.wikipedia.org/wiki/Primality_test
https://en.wikipedia.org/wiki/AKS_primality_test

Sieve of Eratosthenes has complexity O(n * (log n) * (log log n)) and requires O(n) memory 
https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes
https://en.wikipedia.org/wiki/Sieve_of_Eratosthenes#Algorithm_complexity_and_implementation

https://en.wikipedia.org/wiki/Sieve_of_Atkin

*/


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

*/






/*

I'm putting this down here. 
I just want to keep it as a personal record
of some of the silly stuff I tried that didn't work.

var maxCalculated = 8, primes = [[2,2] , [3,5] , [5,10] , [7,17]];

function sumPrimes(num) {
   if (num > maxCalculated) {
      maxCalculated = num; 
   } else {
      let index = primes.findIndex(function (el, index, array) { return el[0] > num; }); 
      return primes[index-1][1];
   }
}
function isPrime(num) {
   if (num < 2 || num % 2 === 0 || num % 3 === 0 || num % 5 === 0 || num % 7 === 0) {
      return false;
   }
   for (var i = 4; i < primes.length; i++) {
        if (primes[i][0] % num === 0) {
           return false;
        }
   }
   return true;
}

sumPrimes(10);


var primes = [];

function sumPrimes(num) {
   if (num > primes[primes.length-1]) {
     return "If true stuff";
   } else {
      var index = primes.findIndex(function (el, index, array) { 
        return el > num; 
        }); 
      return primes[index-1];
   }
}

sumPrimes(7);

*/
