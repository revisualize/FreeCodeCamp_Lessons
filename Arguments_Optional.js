function addTogether() {
  var x = arguments[0];
  if (typeof x !== "number") return undefined;
  if (arguments[1] !== undefined) {
    var y = arguments[1];
    return (typeof y !== "number") ? undefined : x + y;
  }
  return function(y) {
    return (typeof y !== "number") ? undefined : x + y;
  };
}

/*
function addTogether() {
  var x = arguments[0];
  if (typeof x !== "number") return undefined;
  if (arguments[1] !== undefined) {
    var y = arguments[1];
    if (typeof y !== "number") {
      return undefined;
    } else {
      return x+y;
    }
  }
  return function(y) {
    if (typeof y !== "number") return undefined;
    return x + y;
  };
}
*/

addTogether(2, 3); // should return 5.
addTogether(2)(3); // should return 5.
addTogether("http://bit.ly/IqT6zt"); // should return undefined.
addTogether(2, "3"); // should return undefined.
addTogether(2)([3]); // should return undefined.
