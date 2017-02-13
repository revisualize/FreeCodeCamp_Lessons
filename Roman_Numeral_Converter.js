/* Free Code Camp ---  Roman Numeral Converter
Convert the given number into a roman numeral.
All roman numerals answers should be provided in upper-case. */

//jshint esversion: 6

function convertToRoman (num) {
    const romans = [
                    [1000, "M"],
                    [900, "CM"],
                    [500, "D"],
                    [400, "CD"],
                    [100, "C"],
                    [90, "XC"],
                    [50, "L"],
                    [40, "XL"],
                    [10, "X"],
                    [9, "IX"],
                    [5, "V"],
                    [4, "IV"],
                    [1, "I"],
                    [0, ""]
                  ];
    
    let result = "";              

    do {
        let value = romans.find(n => Math.floor(num / n[0]) !== 0);
        /*
        let value = romans.find(function (n) { 
            return Math.floor(num / n[0]) !== 0;
        });
        */
        num -= value[0];
        result += value[1];
      } while (num > 0);
    
    return result;
}


convert(36); // Base test "XXXVI".
convert(2); // should return "II".
convert(3); // should return "III".
convert(4); // should return "IV".
convert(5); // should return "V".
convert(9); // should return "IX".
convert(12); // should return "XII".
convert(16); // should return "XVI".
convert(29); // should return "XXIX".
convert(44); // should return "XLIV".
convert(45); // should return "XLV"
convert(68); // should return "LXVIII"
convert(83); // should return "LXXXIII"
convert(97); // should return "XCVII"
convert(99); // should return "XCIX"
convert(500); // should return "D"
convert(501); // should return "DI"
convert(649); // should return "DCXLIX"
convert(798); // should return "DCCXCVIII"
convert(891); // should return "DCCCXCI"
convert(1000); // should return "M"
convert(1004); // should return "MIV"
convert(1006); // should return "MVI"
convert(1023); // should return "MXXIII"
convert(2014); // should return "MMXIV"
convert(3999); // should return "MMMCMXCIX"


/* Old code:

function convert(num) {
  var numbers = [ 1000, 900, 800, 700, 600, 500, 400, 
                    300, 200, 100, 90, 80, 70, 60, 50, 40,
                    30, 20, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1 ];
  
  var numerals = [ 'M', 'CM', 'DCCC', 'DCC', 'DC', 'D', 
                   'CD', 'CCC', 'CC', 'C', 'XC', 'LXXX', 
                   'LXX', 'LX', 'L', 'XL', 'XXX', 'XX', 
                   'X', 'IX', 'VIII', 'VII', 'VI', 'V', 
                   'IV', 'III', 'II', 'I' ];
  var result = [];
  
  for (var i = 0; num > 0; i++) {
    if (num > 1000) { 
      i = 0; 
    }
    
    if ((num - numbers[i] < 0) === false) {
      result.push(numerals[i]);
      num = num - numbers[i]; 
    }
  }
  return result.join("");
}
*/
