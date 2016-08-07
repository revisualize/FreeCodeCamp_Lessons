const spinalCase = s => s.replace(/([a-z])([A-Z])/g, '$1-$2').toLowerCase().replace(/[\s_]/g, '-');
/*
function spinalCase(str) {
  str = str.replace(/([a-z])([A-Z])/g, '$1-$2');
  return str.toLowerCase().replace(/[\s_]/g, '-');
}
*/
spinalCase("This Is Spinal Tap"); // should return "this-is-spinal-tap".
spinalCase("thisIsSpinalTap"); // should return "this-is-spinal-tap".
spinalCase("The_Andy_Griffith_Show"); // should return "the-andy-griffith-show".
spinalCase("Teletubbies say Eh-oh"); // should return "teletubbies-say-eh-oh".
