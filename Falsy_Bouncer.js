const bouncer = (arr) => arr.filter(Boolean);

/*
function bouncer(arr) {
  // Don't show a false ID to this bouncer.
  return arr.filter(x => Boolean(x));
}

bouncer([7, "ate", "", false, 9]);
*/

/* Original code from Dec 01, 2015
Refactored on Jul 3, 2016

function bouncer(arr) {
  for (var i = 0, result = []; i < arr.length; i++) {
    if (Boolean(arr[i]) !== false) {
      result.push(arr[i]);
    }
  }
  return result;
}

bouncer([7, "ate", "", false, 9]);
// bouncer([false, null, 0, NaN, undefined, ""]); // should return []. 

*/
