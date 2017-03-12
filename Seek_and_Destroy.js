/* Bonfire: Seek and Destroy
You will be provided with an initial array (the first argument in 
the destroyer function), followed by one or more arguments. Remove
all elements from the initial array that are of the same value as 
these arguments.
*/

function destroyer(arr) { 
    // get the values after our initial array, these will be removed.
    // the .slice 1. removes arguments[0] from the new Array
    // arguments[0] is arr and we don't want to remove arr elements.
    var removeThese = Array.prototype.slice.call(arguments, 1);

    // Filter through our array, remove our unwanted values
    // this basically iterates through "arr" and challenges them against
    // our filter function
    return arr.filter(function (v) { 
        // if remove_these does not contain value
        if (removeThese.indexOf(v) === -1) { 
            // return true, since we will be letting this value stay in "arr"
            return true;
        }
    });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return [1, 1].
destroyer([1, 2, 3, 5, 1, 2, 3], 2, 3); // should return [1, 5, 1].
destroyer([3, 5, 1, 2, 2], 2, 3, 5); // should return [1].
destroyer([2, 3, 2, 3], 2, 3); // should return [].
destroyer(["tree", "hamburger", 53], "tree", 53); // should return ["hamburger"].


/*
Above is the orignial code with comments.

Here is a refactor of the code:

function destroyer(arr) { 
    var remove = Array.prototype.slice.call(arguments, 1);
    return arr.filter(v => remove.indexOf(v) === -1);
}


and refactored again:

function destroyer(arr) { 
    var remove = Array.from(arguments).slice(1);
    return arr.filter(v => !remove.includes(v));
}

Side note: using .slice() has browser optimization problems.
A better solution would be to look at doing:
remove = [...arguments];
remove = remove.shift(), remove;



function destroyer(arr) {
  return arr.filter(function(val) {
    return Array.prototype.indexOf.call(this,val,1)===-1;
  },arguments);
}


*/
