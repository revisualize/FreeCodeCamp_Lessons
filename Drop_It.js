function dropElements(arr, func) {
  // Drop them elements.
  while(func(arr[0]) === false) { 
      arr.shift(); // potential broswer crash
  }
  return arr;
}


/*
function dropElements(arr, func) {
   var i = 0;
   while (i === 0 && arr.length > 0) {
      if (!func(arr[0]) && arr.length > 0) {
         arr.shift();
      }
      else {
         i++;
      }
   }
   return arr;
}
*/

/*
function dropElements(arr, func) {
   return (!func(arr[0]) && arr.length > 0) ? dropElements(arr.slice(1), func) : arr;
}
*/
// Some ES6-ness
// const dropElements = (arr, func) => (!func(arr[0]) && arr.length > 0) ? dropElements(arr.slice(1), func) : arr;

dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function(n) {return n >= 3;}); 
                                 // should return [3, 4].
dropElements([0, 1, 0, 1], function(n) {return n === 1;}); 
                                 // should return [1, 0, 1].
dropElements([1, 2, 3], function(n) {return n > 0;}); 
                                 // should return [1, 2, 3].
dropElements([1, 2, 3, 4], function(n) {return n > 5;}); 
                                 // should return [].
dropElements([1, 2, 3, 7, 4], function(n) {return n > 3;}); 
                                 // should return [7, 4].
dropElements([1, 2, 3, 9, 2], function(n) {return n > 2;});
                                 // should return [3, 9, 2].
