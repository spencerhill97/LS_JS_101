/*
// Exercise 1:
Will the following functions return the same results?

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}

console.log(first());
console.log(second());

Try to answer without running the code or looking at the solution.

// Answer:
They do not return the same thing. Second() returns undefined because it's missing
semi colons. JS will return undefined if return is not followed with any characters
on the same line and missing semicolons.

*/

/*
// Exercise 2:
What does the last line in the following code output?

let object = { first: [1] };
let numArray = object["first"];
numArray.push(2);

console.log(numArray); //  => "[1, 2]"
console.log(object);

Try to answer without running the code or looking at the solution.


// Answer:
{ first: [1, 2] }

*/

/*
// Exercise 3:
(A)
function messWithVars(one, two, three) {
  one = two;
  two = three;
  three = one;
}

let one = ["one"];
let two = ["two"];
let three = ["three"];

messWithVars(one, two, three);

console.log(`one is: ${one}`);
console.log(`two is: ${two}`);
console.log(`three is: ${three}`);

// Answer:
(A) Prints
'one is ['one']'
'two is ['two']'
'three is ['three']'
(B) Prints
'one is ['one']'
'two is ['two']'
'three is ['three']'
(C) Prints
'one is ['two']'
'two is ['three']'
'three is ['one']'

*/

/*
// Exercise 4:
Ben was tasked to write a simple JavaScript function to determine whether an input 
string is an IP address using 4 dot-separated numbers, e.g., 10.4.5.11. He is not 
familiar with regular expressions.

Alyssa supplied Ben with a function named isAnIpNumber. It determines whether a string 
is a numeric string between 0 and 255 as required for IP numbers and asked Ben to use it. 
Here's the code that Ben wrote:

function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      break;
    }
  }

  return true;
}

Alyssa reviewed Ben's code and said, "It's a good start, but you missed a few things. You're not returning a false condition, and you're not handling the case when the input string has more or less than 4 components, e.g., 4.5.5 or 1.2.3.4.5: both those values should be invalid."

Help Ben fix his code.

// Answer:
function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split(".");
  if (dotSeparatedWords.length !== 4) {
    return false;
  }

  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false;
    }
  }

  return true;
}

*/