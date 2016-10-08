function diffArray(arr1, arr2) {
  return arr1.filter(function (v) { 
    return arr2.indexOf(v) === -1;
  }).concat(arr2.filter(function (v) { 
    return arr1.indexOf(v) === -1;
  }));
}

/*
function diffArray (arr1, arr2) { return arr1.filter(n => !arr2.includes(n)).concat(arr2.filter(n => !arr1.includes(n))); }
*/

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return an array.

diffArray(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], 
     ["diorite", "andesite", "grass", "dirt", "dead shrub"]); 
      // should return ["pink wool"].

diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], 
     ["diorite", "andesite", "grass", "dirt", "dead shrub"]); 
      // should return ["diorite", "pink wool"].

diffArray(["andesite", "grass", "dirt", "dead shrub"], 
     ["andesite", "grass", "dirt", "dead shrub"]); // should return [].

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]); // should return [4].

diffArray([1, "calf", 3, "piglet"], [1, "calf", 3, 4]); 
      // should return ["piglet", 4].

diffArray([], ["snuffleupagus", "cookie monster", "elmo"]); 
      // should return ["snuffleupagus", "cookie monster", "elmo"].

diffArray([1, "calf", 3, "piglet"], [7, "filly"]); 
      // should return [1, "calf", 3, "piglet", 7, "filly"].


/*  Another option is as follows. 
    However, I really want to learn Array.Filter() and Array.indexOf();

function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  for (var i = 0; i < arr1.length; i++){
    if (arr2.indexOf(arr1[i]) < 0)
      newArr.push(arr1[i]);
  }
  for (var j = 0; j < arr2.length; j++){
    if (arr1.indexOf(arr2[j]) < 0)
      newArr.push(arr2[j]);
  }
  return newArr;
}

*/
