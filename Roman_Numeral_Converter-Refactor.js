const numerals = {
         1000: 'M', 
         900: 'CM', 
         500: 'D', 
         400: 'CD', 
         100: 'C', 
         90: 'XC', 
         50: 'L', 
         40: 'XL', 
         10: 'X', 
         9: 'IX', 
         5: 'V', 
         4: 'IV', 
         1: 'I'
    }
    
const keys = Object.keys(numerals).sort((a, b) => b - a).map(x => Number(x));
//  keys.map(x => numerals[x]);

function convertToRoman(num) {
	function conversion(num, romans) {
		return (num > keys[i]) ? conversion(num - i, romans + numerals[i]) : "";
	}
	return conversion(num, "")
}

convertToRoman(1)




function conversion(num, romans) {
        if (num===0)
              return "";
        for(var i=0; i<keys.length; i++) {
              var div = Math.floor(num/keys[i]);
              if (div >0 && num%keys[i]===0)
                  return conversion(num - div *keys[i], romans + numerals[i].repeat(div));
        }
    }
