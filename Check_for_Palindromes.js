function palindrome(str) {
  str = str.toLowerCase().replace(/[\W_]/g, "");
  return str === str.split("").reverse().join("");
}
/* This is an ES6 solution that does not follow the D.R.Y. principle.
const palindrome = s =>  s.toLowerCase().replace(/[\W_]/g, "") === s.toLowerCase().replace(/[\W_]/g, "").split("").reverse().join("");
*/
palindrome("eye");                             // Should return true.
palindrome("race car");                        // Should return true.
palindrome("not a palindrome");                // Should return false.
palindrome("A man, a plan, a canal. Panama");  // Should return true.
palindrome("never odd or even");               // Should return true.
palindrome("nope");                            // Should return false.
palindrome("almostomla");                      // Should return false.
palindrome("My age is 0, 0 si ega ym.");       // Should return true.
palindrome("1 eye for of 1 eye.");             // Should return false.
palindrome("0_0 (: /-\ :) 0-0");               // Should return true.
