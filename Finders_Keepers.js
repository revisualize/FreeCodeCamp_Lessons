function findElement (a, f) { return a.find(f); }
// const findElement = (a, f) => a.find(f);

/*
function findElement(arr, func) {
  var result= arr.filter(func);
  return result[0];
}
*/

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
