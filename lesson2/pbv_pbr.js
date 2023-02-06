/*
// Exercise 1:
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
}

let myWord = 'Hello';
changeMyWord(myWord);
console.log(myWord);

// Answer: This prints 'Hello' twice. A primitive value is passed to changeMyWord,
so the parameters is initialized to a copy of myWords value. The console.log invocation on
line 2 prints 'Hello' because the reassignment occurs on the next line.
/*

/*
// Exercise 2:
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
myWord = changeMyWord(myWord);
console.log(myWord);

// Answer: This prints 'Hello' and 'HELLO.' This happens because myWord is reassigned
to the return value of the function changeMyWord. It prints 'Hello' on the first line on line
2 after it's invoked and then reassigns the value on line 3. Then returns the reassigned
value.
*/

/*
// Exercise 3:
function changeMyWord(word) {
  console.log(word);
  word = word.toUpperCase();
  return word;
}

let myWord = 'Hello';
let myOtherWord = changeMyWord(myWord);
console.log(myWord);
console.log(myOtherWord);

// Answer: This prints 'Hello', 'Hello', and 'HELLO.' Another variable is initialized
to the value of changeMyWord with myWord being passed as an arguement, again myWords
value is primitive so it remains unaffected by myOtherWords assignment to changeMyWords
return value. During the function invocation, the initial value 'Hello' is printed to 
the console before execution of the function body is completed.
*/

/*
// Exercise 4:
function changeMyWords(words) {
  console.log(words);
  words[0] = 'Hi';
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

// Answer: Prints ['Hello', 'Goodbye'] and ['Hi', 'Goodbye] because changeMyWords 
passes a reference as an argument. The parameter words is initialized to the value of 
myWords which is a pointer to an array. The array that myWords and words are pointing 
to has the element at the zero index reassigned to the string 'Hi'. 
*/

/*
// Exercise 5:
function changeMyWords(words) {
  console.log(words);
  words = ['Hi', 'Goodbye'];;
}

let myWords = ['Hello', 'Goodbye'];
changeMyWords(myWords);
console.log(myWords);

// Answer: Prints ['Hello', 'Goodbye'] twice. When changeMyWords is invoked, words
is initialized to the value of the argument myWords which is a reference type. Both
the parameter words and global variable myWords now have the same pointer stored in
memory to the same array. However, words is reassigned to a new array and the pointer
is updated.
*/
