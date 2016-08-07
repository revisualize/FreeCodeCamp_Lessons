function chunk(arr, size) {
  /* 
    need to create a new array.
    need to .push elements to the new array.
    need to slice elements off of the array as they are added to the new array.
  */
  for (var i = 0, dblArr = []; i < arr.length; i) {
    // dblArr[i].push(/* something: arr[0], arr.slice(1) */);
    dblArr.push(arr.slice(i, i+=size));
  }
  return dblArr;
}

chunk(["a", "b", "c", "d"], 2); // should return [["a", "b"], ["c", "d"]].
// chunk([0, 1, 2, 3, 4, 5], 3); // should return [[0, 1, 2], [3, 4, 5]].
// chunk([0, 1, 2, 3, 4, 5], 2); // should return [[0, 1], [2, 3], [4, 5]].
// chunk([0, 1, 2, 3, 4, 5], 4); // should return [[0, 1, 2, 3], [4, 5]].
