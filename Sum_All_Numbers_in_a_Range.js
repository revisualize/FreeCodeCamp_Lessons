const sumAll = ([x, y]) => (x + y) * (Math.abs(x - y) + 1) / 2;

// const sum_range = (x, y) => (x + y) * (abs(x - y) + 1) / 2;

// const sumAll = (arr) => (Math.max(...arr)*(Math.max(...arr)+1) / 2) - (Math.min(...arr)*(Math.min(...arr)-1) / 2);

// This is a better solution using actual Math. 
// Example 1-10 adds up to 10 * (10 + 1) / 2 = 55
/*
function sumAll(arr) {
  function sumRange(a, b) {
    return (a*(a+1) / 2) - (b*(b-1) / 2); 
  }
  return sumRange(Math.max(...arr), Math.min(...arr));
}
*/

// const sumAll = (arr) => arr.sort((a, b) => b - a).reduce((pr, cu) => (pr*(pr+1)/2) - (cu*(cu-1)/2));

/* 
With this solution, I was playing around with creating a long array.
I grabbed some of the code off of Array.from() and modified it.
const sumAll = (arr) => Array.from({length: Math.max(...arr) - Math.min(...arr) + 1}, (v, k) => k + Math.min(...arr)).reduce((pr, cu) => pr + cu);
*/

/*
function sumAll(arr) {
  arr = arr.sort(function(a,b) {
                    return a - b;
                  });
  var sum = 0;
  for (var i = arr[0]; i <= arr[arr.length-1]; i++) {
    sum += i;
  }
  return sum;
}
*/
sumAll([1, 4]); // should return a number.
sumAll([1, 4]); // should return 10.
sumAll([4, 1]); // should return 10.
sumAll([5, 10]); // should return 45.
sumAll([10, 5]); // should return 45.
