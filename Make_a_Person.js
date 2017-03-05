/* My solution for https://www.freecodecamp.com/challenges/make-a-person */

var Person = function(firstAndLast) {
  var first; // Private variable
  var last;  // Private variable
  this.getFirstName = function() {
    return first;
  };
  this.getLastName = function() {
    return last;
  };
  this.getFullName = function() {
    return first + " " + last;
  };
  this.setFirstName = function(val) {
    first = val;
  };
  this.setLastName = function(val) {
    last = val;
  };
  this.setFullName = function(val) {
    first = val.split(" ")[0];
    last = val.split(" ")[1];
  };
  this.setFullName(firstAndLast); // function call
};

var bob = new Person('Bob Ross');
