const slasher = (a, h) => a.slice(h);

/*
function slasher(arr, howMany) {
  // it doesn't always pay to be first
  return arr.slice(howMany);
}
*/

slasher([1, 2, 3], 2); // should return [3].
slasher([1, 2, 3], 0); // should return [1, 2, 3].
slasher([1, 2, 3], 9); // should return [].
slasher([1, 2, 3], 4); // should return [].
