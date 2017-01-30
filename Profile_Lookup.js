//Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["Javascript", "Gaming", "Foxes"]
    }
];

function lookUpProfile(firstName, prop){           // Basic function with two params
   for (var i = 0; i < contacts.length; i++) {     // you know a basic for loop through the contacts array.
        if (firstName === contacts[i].firstName) { // if the contact i has a firstName that matches my firstName param
            return contacts[i].hasOwnProperty(prop) ? contacts[i][prop] : "No such property"; // true
        }  // Ternary: if (contacts[i].hasOwnProperty(prop)) { return that contacts prop value } 
    }      // else ... return that it doesn't have the property
    return "No such contact"; // after the loop is completed. That means the contact wasn't found. 
}                             // because the function would have *HALTED* with the first return statement.



/* Challenge without Comments.
function lookUpProfile(firstName, prop){
// Only change code below this line
   for (var i = 0; i < contacts.length; i++) {
        if (firstName === contacts[i].firstName) {
            return contacts[i].hasOwnProperty(prop) ? contacts[i][prop] : "No such property";
        }
    }
    return "No such contact";
// Only change code above this line
}
*/

/* -- breaking the challenge apart with the instuctions:
 
// A lookUpProfile function that takes firstName 
// and a property (prop) as arguments has been pre-written for you.
function lookUpProfile(firstName, prop){
   for (var i=0; i < contacts.length; i++){
      // The function should check if firstName 
      // is an actual contact's firstName 
      if (contacts[i]["firstName"] == firstName) {
         // and the given property (prop) is a property of that contact.
         if(contacts[i].hasOwnProperty(prop)) {
             // If both are true, 
             // then return the "value" of that property.
             return contacts[i][prop]; 
          } else {
             // If prop does not correspond to any valid properties
             // then return "No such property".
             return "No such property";
          }
       }
   }
   // If firstName does not correspond to "any" contacts (key word is any)
   // then return "No such contact"
   return "No such contact";
}
*/

/* Another way to solve the challenge:

function lookUpProfile(firstName, prop){
  var result = "No such contact";
  for (var i=0; i<contacts.length; i++) {
    if (contacts[i].firstName===firstName) {
      if (contacts[i].hasOwnProperty(prop)) {
        result = contacts[i][prop];
        break;
      }
      else {
         result = "No such property";
         break;
      }
    }
  }
  return result;
}

*/


// Change these values to test your function
lookUpProfile("Kristian", "lastName"); // should return "Vos"
lookUpProfile("Sherlock", "likes"); // should return ["Intriguing Cases", "Violin"]
lookUpProfile("Harry","likes"); // should return an array
lookUpProfile("Bob", "number"); // should return "No such contact"
lookUpProfile("Akira", "address"); // should return "No such property"


/*  I am putting this down here because
    it is a bit of a more complicated 
    solution that works quite well:
    (Even thought is uses nested ternary operators)

function lookUpProfile(firstName, prop) {
  var contact = contacts.find(x => x.firstName === firstName);
  return contact ? contact.hasOwnProperty(prop) ? contact[prop] : 'No such property' : 'No such contact';
}

*/
