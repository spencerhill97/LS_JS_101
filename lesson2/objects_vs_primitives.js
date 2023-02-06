/*
// Question 1:

let myWord = 'Hello';
myWord.concat(' there.');

console.log(myWord);

// Answer: myWord is initialized to the string 'Hello.' Calling the concat method
on myWord appends the string ' there' to the end of it and returns a new string. 
The execution continues and 'Hello' is printed to the console.
*/

/*
// Question 2:

let myWord = 'Hello';
myWord.repeat(3);
console.log(myWord);
myWord.replace('H', 'J');
console.log(myWord);
myWord.split(' ');
console.log(myWord);

// Answer: Each of the console.log invocations pring 'Hello.' All of the method
invocations return new strings because strings are immutable.
*/

/*
// Question 3:

let myWords = ['Hello'];
myWords.push('Goodbye');

console.log(myWords);

// Answer: ['Hello', 'Goodbye' ] is printed to the console. The push invocation on
myWords adds the string 'Goodbye' to the end of the myWords array. The push
method mutates the array.
*/

/*
// Question 4:

let myWords = ['Hello'];
myWords.concat(['Goodbye']);

console.log(myWords);

// Answer: ['Hello'] is printed to the console even though myWords is an Array.
The method invocation concat returns a new array and does mutate the caller. You
need to check the documentation if you're unsure on the method calls behavior.
*/

/*
// Question 5:

let myWords = ['Hello'];
myWords[0].toUpperCase();

console.log(myWords);

// Answer: Prints ['Hello'] because the toUpperCase() method is invoked on the 
string at index 0 of myWords. The program returns the string at index 0 and replaces
the string with all uppercase characters.
*/

/*
// Question 6:

let myWords = ['Hello'];
myWords[0] = myWords[0].toUpperCase();

console.log(myWords);

// Answer: Prints ['HELLO'] because line 2 of the code is reassigning the element
at index 0 of myWords to the original string with all upppercase characters. Arrays and
it's elements are mutable.
*/


