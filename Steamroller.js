function steamrollArray (arr) {
  return [].concat(...arr.map(x => Array.isArray(x) ? steamrollArray(x) : x));
}

// ES 6
// const steamrollArray = (arr) => [].concat(...arr.map(x => Array.isArray(x) ? steamrollArray(x) : x));
// ... For some reason this challenge won't solve with this code.

// reduce version:
// const steamrollArray = (arr) => arr.reduce((pr, cu) => Array.isArray(cu) ? pr.concat(steamrollArray(cu)) : pr.concat(cu), []);

steamrollArray([1, [2], [3, [[4]]]]);
