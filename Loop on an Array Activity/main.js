//Array flattener activity
// Define a function arrayFlattener with a 2d array as parameter:
// [1,[2,3],4,5]

//Returning a new 1 dimensional array like, [1,2,3,4]

function arrayFlattener(arr) {
  var newArr = [];

  for (var i = 0; i < arr.length; i++) {
    newArr = newArr.concat(arr[i]);
  }

  return newArr;
}

//testing...
console.log(arrayFlattener([1, [2, 3], 4, 5]));

