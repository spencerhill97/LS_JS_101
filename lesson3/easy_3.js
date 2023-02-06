/*
// Exercise 1:

Write three different ways to remove all of the elements from the following array:

let numbers = [1, 2, 3, 4];

// Answer:
1)
while (0 < numbers.length) {
  numbers.shift();
}

2)
numbers.length === 0

3)
numbers.splice(0, numbers.length);

*/

/*
// Exercise 2:

What will the following code output?

console.log([1, 2, 3] + [4, 5]);

// Answer:
1,2,34,5

*/

/*
// Exercise 3:

What will the following code output?

let str1 = "hello there";
let str2 = str1;
str2 = "goodbye!";
console.log(str1);

Try to answer without running the code.

// Answer:
'hello there'

*/

/*
// Exercise 4:

What will the following code output?

let arr1 = [{ first: "value1" }, { second: "value2" }, 3, 4, 5];
let arr2 = arr1.slice();
arr2[0].first = 42;
console.log(arr1);

Try to answer without running the code.

// Answer:
[{ first: 42 }, { second: "value2" }, 3, 4, 5]

*/

/*
// Exercise 5:

The following function unnecessarily uses two return statements to return boolean values.
Can you rewrite this function so it only has one return statement and does not explicitly use either true or false?

function isColorValid(color) {
  if (color === "blue" || color === "green") {
    return true;
  } else {
    return false;
  }
}

Try to come up with at least two different solutions.

// Answer:
function isColorValid(color) {
  return color === 'blue' || color === 'green';
}

*/
