/*
// Exercise 1:
let myWord = 'Hello';
let myOtherWord = myWord;

console.log(myWord);
console.log(myOtherWord);

// Answer: Both console.log invocations will pring 'Hello.' That's because on line
2 myOtherWord was assigned the value of myWord which was a primitive value. They
are different strings pointing at different locations in the memory.
*/

/*
// Exercise 2:
let myWord = 'Hello';
let myOtherWord = myWord;
myWord = 'Goodbye';

console.log(myWord);
console.log(myOtherWord);

// Answer: The console.log invocation on myWord will print 'Goodbye' and the console.log
invocation on myOtherWord will print 'Hello.' Although myOtherWord is initialized
to the value of myWord, they both point to strings at different memory addresses. So
when myWord is initialized to the string 'Goodbye' it has no affect on what string
myOtherWord points to.
*/

/*
// Exercise 3:
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords[0] = 'Hi';

console.log(myWords);
console.log(myOtherWords);

// Answer: Both console.log invocation will print ['Hi', 'Goodbye']. Both variables
are stored in different locations, but because they're both initialized to the same
array both variable memory addresses have pointers to the same array. When an object
type data is mutated the pointer that is stored at the variables memory address does
not change.
*/

/*
// Exercise 4:
let myWords = ['Hello', 'Goodbye'];
let myOtherWords = myWords;
myWords = ['Hi', 'Bye'];

console.log(myWords);
console.log(myOtherWords);

// Answer: The console.log myWords invocation prints ['Hi', 'Bye'] and the console.log
invocation for myOtherWords prints ['Hello', 'Goodbye']. Both variables were initialized
to the same array, so both variables had the same pointer or reference stored in
their memory adddresses. However, myWords is reassigned to a new array, so the original
pointer stored in myWords memory address is updated to the new array and myOtherWords
pointer never changes.
*/

/*
// Exercise 5:
let myWords = ['Hello', 'Goodbye'];
let myWord = myWords[0];
myWords[0] = 'Hi';

console.log(myWords);
console.log(myWord);

// Answer: This prints ['Hi', 'Goodbye'] and 'Hello.' On line 1 myWords is initialized
to the array ['Hello', 'Goodbye']. On line 2 myWord is initiazlied to the element
at the zero index in the myWords array which returns the string 'Hello.' Strings are
primitive values so myWord has no relation to any of the elements of Mywords.
*/

/*
// Exercise 6:
let myWords = ['Hello', 'Goodbye'];
let myWord = 'Hi';
myWords[0] = myWord;
myWord = 'Hello';

console.log(myWords);
console.log(myWord);

// Answer: This prints ['Hi', 'Goodbye'] and 'Hello.' On line 1 myWordsis declared initialized
to an array of two strings and on line 2 myWord is declared and initialized to the string
'Hi.' On line 3 the element at index zero in myWords is set to the return value of
myWord. On line 4 myWord is reassigned to a string 'Hello.' The reassignment on line
4 has no affect on myWords element at the zero index because primritive values don't have
pointers or use reference.
*/
