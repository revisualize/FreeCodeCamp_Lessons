function sumFibs(num) {
  var accu = 0;
  var prev = 1;
  var curr = 1;
  var fibOdd = 1;
  while (curr <= num) {
     if (curr % 2 === 1) { fibOdd += curr; }
     accu = prev + curr;
     prev = curr;
     curr = accu;  
  }
  return fibOdd;
}

/* Code from 2016 Sept 05:
function sumFibs(num) {
  var accu = 0;
  var prev = 1;
  var curr = 1;
  var fibOdd = [1];
  while (curr <= num) {
     fibOdd.push(curr);
     accu = prev + curr;
     prev = curr;
     curr = accu;  
  }
  return fibOdd.filter(x => x % 2 === 1).reduce((pre, cur) => pre + cur);
}
*/
sumFibs(1); // should return a number.
sumFibs(1000); // should return 1785.
sumFibs(4000000); // should return 4613732.
sumFibs(4); // should return 5.
sumFibs(75024); // should return 60696.
sumFibs(75025); // should return 135721.

// "Hashtag-done.is.better.than.perfect".repeat(9000);
