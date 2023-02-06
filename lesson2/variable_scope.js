/*
//Exercises 1: 
let num = 5;

function myFunc() {
  num = 10;
}

myFunc();
console.log(num);

// Answer: 10
*/

/*
// Exercises 2:
let num = 5;

function myFunc() {
  console.log(num);
  num = 10;
}

myFunc();
console.log(num);

// Answer: 10
*/

/*
// Exercise 3:
let num = 5;

function myFunc() {
  let num = 10;
}

myFunc();
console.log(num);

// Answer: 5
*/

/*
// Exercise 4:
let num = 5;

function myFunc() {
  console.log(num);
  let num = 10;
}

myFunc();
console.log(num);

// Answer: *5* ReferenceError because because the console.log method tries print
the value of num before it is declared!
*/

/*
// Exercise 5:
let num = 5;

function myFunc(num) {
  num = 10;
}

myFunc();
console.log(num);

// Answer: 5
*/

/*
// Exercise 6:
let num = 1;

while (num < 3) {
  num += 1;
}

console.log(num);

// Answer: 3
*/

/*
// Exercise 7:
let num = 1;

while (num < 3) {
  let num = 5;
  num += 1;
}

console.log(num);

// Answer: 6 *the contional expression is referencing the global variable and read
by JS first. Then the new num is declared locally and will be incremented by one
on each iteration of the loop. Therefore the global variable num will never be 
incremented, so the loops conditional expression will never evaluate as true
*/
