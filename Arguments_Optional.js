function addTogether() {
    if (arguments.length === 2 &&
        typeof arguments[0] === "number" &&
            !Number.isNaN(arguments[0]) &&
                typeof arguments[1] === "number" &&
                    !Number.isNaN(arguments[1])) {
                        return arguments[0] + arguments[1];
      }
    if (arguments.length === 1 &&
        typeof arguments[0] === "number" &&
            !Number.isNaN(arguments[0])) {
                var arg0 = arguments[0];
                return function() {
                    if (typeof arguments[0] === "number" &&
                        !Number.isNaN(arguments[0])) {
                            return arg0 + arguments[0];
                    }
                 };
    }
}
/* I didn't really like the flow of the code below.
   So, I refactored to what is above. */


/* This is my refactor of the first:
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
*/

/* This is my first push to get the lesson completed.
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
