/*
Exercise 1:

Will the code below raise an error?

let numbers = [1, 2, 3];
numbers[6] = 5;

Bonus:

let numbers = [1, 2, 3];
numbers[6] = 5;
numbers[4];  // what will this line return?

Answer:
The following code will not return an error. The unset elements such as numbers[4]
will return undefined!

*/

/*
Exercise 2:
How can you determine whether a given string ends with an exclamation mark (!)?

let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

Answer:
You can you call the endsWith method on both variables:

console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));

*/

/*
Exercise 3:
Determine whether the following object of people and their age contains an entry
for 'Spot':

let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

Answer:
if ('Spot' in ages) {
  console.log('Spot found!');
} else {
  console.log('Spot not in ages.');
}

My example returns a string to be clear to the user. If you the output as a boolean
is acceptable you can call the hasOwnProperty() method.

ages.hasOwnProperty('Spot');

You could also use the call the includes method after calling Object.keys on ages:

Object.keys(ages).includes('Spot');

*/

/*
Exercise 4:
Using the following string, create a new string that contains all lowercase letters 
except for the first character, which should be capitalized. (See the example output.)

let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

Answer:
let result = munstersDescription[0].toUpperCase()
           + munstersDescription.slice(1).toLowerCase()

*/

/*
Exercise 5:
What will the following code output?

console.log(false == '0');
console.log(false === '0');

Answer:
The first line of code will return true because it will coerce the string to a number
and then evaluate the operands. False coerces to 0.
The second line of code will return false because both operands are different data
types and the strict equality operator compares value and data type

*/

/*
Exercise 6:
We have most of the Munster family in our ages object:

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

Add entries for Marilyn and Spot to the object:

let additionalAges = { Marilyn: 22, Spot: 237 };

Answer:
Object.assign(ages, additonalAges);

*/

/*
Exercise 7:
Determine whether the name Dino appears in the strings below -- check each string
separately):

let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

Answer:
/Dino/.test(str1);
/Dino/.test(str2);

*/

/*
Exercise 8:
How can we add 'Dino' to the flinstones array?

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];

Answer:
flintstones.push('Dino');

*/

/*
Exercise 9:
In the previous problem, our first answer added 'Dino' to the array like this:

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

How can we add 'Dino' and 'Hoppy' to the array?

Answer:
The push method can take more than one argument!

flinstones.push('Dino', 'Hoppy');

*/

/*
Exercise 10:
Return a new version of this sentence that ends just before the word house. Don't 
worry about spaces or punctuation: remove everything starting from the beginning of 
house to the end of the sentence.

let advice = "Few things in life are as important as house training your pet dinosaur.";

// Expected return value:
// => 'Few things in life are as important as '

Answer:
let indexOfHouse = advice.indexOf('house');
let result = advice.slice(0, indexOfHouse);
console.log(result);

*/

