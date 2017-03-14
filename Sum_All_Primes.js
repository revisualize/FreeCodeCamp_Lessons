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
