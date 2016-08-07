const getIndexToIns = (arr, num) => arr.concat(num).sort((a, b) => a - b).indexOf(num);


/*
function getIndexToIns(arr, num) {
  arr = arr.sort(function(a,b) {
          return a - b;
        });

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] >= num) {
      return i;
    }
  }
  return i;
}
*/
getIndexToIns([10, 20, 30, 40, 50], 35); // should return 3.
getIndexToIns([10, 20, 30, 40, 50], 30); // should return 2.
getIndexToIns([40, 60,], 50); // should return 1.
getIndexToIns([3, 10, 5], 3); // should return 0.
getIndexToIns([5, 3, 20, 3], 5); // should return 2.
getIndexToIns([2, 20, 10], 19); // should return 2.
getIndexToIns([2, 5, 10], 15); // should return 3.

/* Saw this in chat, need to research:
getIndexToIns = (a,n)=>a.reduce((s,x)=>s+(n<x), 0);
getIndexToIns = (arr,num) => arr.reduce((s,x) => s + (num < x), 0);
*/
