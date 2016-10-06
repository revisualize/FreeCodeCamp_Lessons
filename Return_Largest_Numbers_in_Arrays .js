// jshint esversion:6
const largestOfFour = arr => arr.map(x => Math.max(...x));
/*
function largestOfFour(arr) {
 return arr.map(x => Math.max(...x));
}
*/
largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]);
largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // should return [27,5,39,1001].
largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // should return [9, 35, 97, 1000000].


/* My old code below:
function largestOfFour(arr) {
  var pushArray = [];
  for (var i = 0; i < arr.length; i++) {
    for (var x = 0, largestNumber = 0; x < arr[i].length; x++) {
      if (arr[i][x] > largestNumber) {
        largestNumber = arr[i][x];
      }
    }
    pushArray.push(largestNumber);
  }
  return pushArray;
}   */
