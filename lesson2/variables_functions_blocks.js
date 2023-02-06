/*
// Exercise 1:
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);

// Answer: This prints ['red', 'green', 'blue', 'yellow'].
  - line 1 color is initialized to the string 'yellow'
  - line 2 colors is initialized to an array of 3 strings
  - line 8 invokes the updateColors and the value of colors is passed as an arguement
    - this is pass by reference because the value of colors is an object type
    - the parameter colors has the same name as the global variable colors, so the
      parameter is confined to local scope and shadows the global variable
    -both colors have the same pointers stored in memory to the same array
    -the push method is called on the parameter colors and passes the global variable
      colors as an argument. Color is available in the inner scope because it is
      declared on the outer scope.
    -the push method mutates the array that both the global colors and the local 
      colors points to
    -On line 9 the global variable colors is printed to the console.

/*
// Exercise 2:
let color = 'yellow';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors)
console.log(colors);

// Answer: 
  - line 1 and 2 global variables are declared
  - line 8 invokes updateColors and passes the colors array as an argument
    - the parameter colors and global variable colors have the same name so the
      parameter shadows the global variable. However the value being passed is
      object type so they both store the same pointer to the same array in memory
    - their is only one argument being passed, so the second parameter color is
      initialized to 'undefined.' The global variable color and parameter color
      have the same identifier, so this parameter shadows the global variable color.
    - the function calls the push method on the local colors and appends the value
      of the color parameter to the end of the caller, undefined.
  - line 9 the global variable colors is passed as an argument to the console.log
    built in function and prints the array ['red', 'green', 'blue', undefined]

  This is a good example of variable scope and variables shadowing each other. Because
  color is declared in updateColors and globaly, the parameter color has no relation
  other than name to the global variable color. When the function is invoked it has no
  argument to intialize color, so it is initialized with undefined.

/*
// Exercise 3:
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
}

updateColors(colors, color1);
updateColors(colors, color2);
console.log(colors);

// Answer:
  This prints ['red', 'green', 'blue', 'purple', 'pink']
  - line 1 color1 is initialized to the string 'purple'
  - line 2 color2 is initialized to the string 'pink'
  - line 3 colors is initialized to an array with 3 strings
  - line 9 updateColors is invoked and the array colors and the string color1
    are passed as arguments
      - updateColors begins execution and the parameter colors is assigned to the
        value of the argument colors. The colors parameter shadows the argument because
        they have the same identifiers. This is pass-by-reference because the
        argument being passed is an array.
      - the second parameter color1 is passed and initialized to the parameter color.
        This is an example of pass-by-value because it's primitive and the parameter
        is only initalized to a copy of the value of color1 and both variables point to different
        locations in memory.
      - the local colors calls the push method and appends the value of color1 to the
        array. This mutates the array so both colors are still pointint to the same
        modified array.
    - line 10 updateColors is invoked again with colors and color2 as arguments
      - the same concept as the first. The global variable colors and the parameter colors
        have the same identifiers, so the parameter shadows the global variable. An array is
        being passed, so both variables have the same pointer stored in memory.]
      - color2 is passed as an argument and color is assigned to a copy of the value color2.
        Both variables are pointing to different strings in memory and are completely different.
      - The console.log function is called and passes the modified colors array as 
        an argument.
*/

/*
// Exercise 4:
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1);
updateColors(newColors, color2);
console.log(colors);

// Answer:
  This prints ['red', 'green', 'blue', 'purple', 'pink']
  - line 1 and 2 declare variables and initialize them to strings
  - line 3 declares a variable colors and initializes it to an array of strings
  - line 10 declares newColors and initializes it to the return value of updateColors and
    passes the colors array (pass by reference) and the color1 string (pass by value) as arguments.
    - The colors argument is assigned to a parameter with the same identifier, so the
      parameter colors will shadow the outer scope colors. The colors argument being
      passed is reference type, so the parameter and argument are now both pointing to
      the same array in memory
    - The function calls the push method on the colors parameter array and appends the
      value of color to the end of the shared array.
    - The function returns the value of the colors parameter
    - newColors return value is now ['red', 'green', 'blue', 'purple'];
  - line 11 updateColors is invoked again and passes the newColors array (p.b.r.) and
    passes the color 2 string (p.b.v.) as arguments
    - There is no shadowing between parameters on this invocation because the parameters and
      arguments have different identifiers here.
    - Colors and newColors now store the same pointer in memory to the same array. Color and
      color2 have the same value but they both point to two completely different strings in
      memory
    - The push method is called on colors and the value of color is appended to the end
      of the array
    - The function then returns the value of colors
    - new colors return value is now ['red', 'green', 'blue', 'purple', 'pink']
  - line 12 prints the value of colors
*/

/*
// Exercise 5:
let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors);
addColor(colors, color);
console.log(newColors);

// Answer:
  This prints ['red', 'green', 'blue'].
  On line 1 color is declared and initialized to a string.
  On line 2 colors is declared and initialzied to an array with 3 strings.
  
  Two functions are declared:
    
  - addColor which defines two parameters colors and color. It calls push on colors
    passing in color as an argument.
  
    - removeColor which defines one parameter colors. It reassigns the global variable
    color to the pop method called on the array colors. This returns the last element
    of colors.
  
  On line 14 new color is intialized to the value of the removeColor invocation with
  the colors array passed as an argument. At this point the colors parameter, which
  shadows the colors argument are both pointing to the same array. The pop method
  is called on colors and the return value is assigned to the gobal variable color.
  The modified value of the local colors and global colors is ['red', 'green']. The 
  function then returns the value of colors which is a pointer or reference to the same
  array as colors.

  On line 15 addColor is invoked and the colors array and color string are passed as
  arguments. The colors parameter and colors argument both point reference the same
  array because it's an argument type being passed. The push method is called on colors
  and the value of color is appended to the end of the array. This operation mutates
  the reference to the colors array and every variable that points to this array is
  affected. The function then returns a reference to the colors array.

  Line 16 prints the value of newColors ['red', 'green', 'blue']
*/

/*
// Exercise 6:
function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

// Answer:
  This prints 'hello', 'Hello', 'hello!!!'
  Line 9 delcares word and is initialized to the string 'hello.'
  
  Line 10 declares capitalizedWord and initializes it to the return value of the
  invocation of capitalize with the value of word passed as an argument. The function
  returns a new string which is word with a leading capital

  Line 11 declares exclaimedWord and is initalized to the function invocation of
  exclaim with capitalizedWord passed as an argument. This invocation concatenates
  the global variable word to '!!!' and returns the value.

  Line 13 prints 'hello'
  Line 14 prints 'Hello'
  Line 15 prints 'hello!!!'
*/

/*
// Exercise 7:
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word);
let exclaimedWord = exclaim(capitalizedWord);

console.log(word);
console.log(capitalizedWord);
console.log(exclaimedWord);

// Answer:
  This prints 'hello', 'Hello', 'Hello!!!'
  Line 9 we declare a variable word and initialize it to the string 'hello.'
  Line 10 we declare a variable capitalizeWord and initialized it to the invocation of
  capitalize with word passed as an argument.
    - the parameter and argument here have the same identifier, so parameter shadows
      the argument.
    - toUpperCase is called on the first letter of word. This returns 'H.'
    - the String method slice is called on word, passing the index 1 as an argument.
      This returns 'ello.'
    - These two strings are concatenated using the + operator. This returns 'Hello.'
    - 'Hello' is returned and assigned to caipitalizeWord
  Line 11 we declare a variable exclaimedWord and initazlie it to the invocation of
  exclaim with capitalizedWord passed as an argument.
    - word is concatenated to '!!!' using the + operator
    - the function returns the new string 'Hello!!!' and is assigned to exclaimedWord

  Line 13 prints 'hello'
  line 14 prints 'Hello'
  line 15 prints 'Hello!!!'
*/

