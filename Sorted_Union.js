// My solution for https://www.freecodecamp.com/challenges/sorted-union

function uniteUnique(arr) { 
    return [].concat(...arguments).filter((el,index,arr) => arr.indexOf(el) == index); 
}

/*
const uniteUnique = arr => [].concat(...arguments).reduce((acc, pre) => (acc.indexOf(pre) === -1) ? (acc.push(pre), acc) : acc, []);
*/

/*
function uniteUnique(arr) {
  var args = [].concat(...arguments);
  return args.reduce((acc, pre) => (acc.indexOf(pre) === -1) ? (acc.push(pre), acc) : acc, []);
}
*/

/*
function uniteUnique(arr) {
  var args = [].concat(...arguments);
  return args.reduce(function(acc, pre) {
    if (acc.indexOf(pre) === -1) acc.push(pre);
    return acc;
    }, []);
}
*/

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]); // should return [1, 3, 2, 5, 4].
uniteUnique([1, 3, 2], [1, [5]], [2, [4]]); // should return [1, 3, 2, [5], [4]].
uniteUnique([1, 2, 3], [5, 2, 1]); // should return [1, 2, 3, 5].
uniteUnique([1, 2, 3], [5, 2, 1, 4], [2, 1], [6, 7, 8]); // should return [1, 2, 3, 5, 4, 6, 7, 8].
