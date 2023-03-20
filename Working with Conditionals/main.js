
let response;

function isOldEnoughToVote(age) {
  if (age >= 18) response = true;
  else response = false;

  return response;
}

//open the browser console to check results
console.log('results: ', isOldEnoughToVote(18));
