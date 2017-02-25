function pairElement(str){
  var pairs = {A:'T', T: 'A', C: 'G', G: 'C'};
  return str.split("").map(x => [x,pairs[x]]);
}


/* 
function pairElement(str) {
  var result = [];
  for (var i = 0; i < str.length; i += 1) {
    if (str[i] === "A") {
      result.push(["A", "T"]);
    } else if (str[i] === "T") {
      result.push(["T", "A"]);
    } else if (str[i] === "C") {
      result.push(["C", "G"]);
    } else if (str[i] === "G") {
      result.push(["G", "C"]);
    }
  }
  return result;
}
*/

pairElement("GCG"); // should return [["G", "C"], ["C","G"],["G", "C"]]
pairElement("ATCGA"); // should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
pairElement("TTGAG"); // should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
pairElement("CTCTA"); // should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].
