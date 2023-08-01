// Declare a global variable called "animal" and set it to 'dog'.
var animal = 'dog';

// Function "myPet" returns the value of the global variable "animal".
function myPet() {
  return animal;
}

// Function "yourPet" declares a local variable called "animal" and sets it to 'cat'.
// This local variable shadows the global variable "animal" within this function's scope.
function yourPet() {
  let animal = 'cat';
  return animal;
}

// Output the results of calling both functions to the browser console.
console.log('myPet result: ' + myPet()); // Output: myPet result: dog
console.log('yourPet result: ' + yourPet()); // Output: yourPet result: cat
