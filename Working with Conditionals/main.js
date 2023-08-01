// Declare a variable to store the response of the voting eligibility check.
let response;

// Function to check if a person is old enough to vote based on their age.
function isOldEnoughToVote(age) {
  // Check if the provided age is greater than or equal to 18.
  // If true, assign the variable "response" the value "true" (eligible to vote).
  // Otherwise, assign the variable "response" the value "false" (not eligible to vote).
  if (age >= 18) {
    response = true;
  } else {
    response = false;
  }

  // Return the value of the variable "response" which indicates the voting eligibility status.
  return response;
}

// Open the browser console to check the results.
console.log('results: ', isOldEnoughToVote(18));
