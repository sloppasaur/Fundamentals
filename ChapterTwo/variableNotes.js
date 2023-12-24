// This is notes on creating variables

// Declaring Variables

// The first time you declare a variable, you need to use the special word to create it:
let firstname = "Maria";
var a = 10;
const name = "Nathan";

// Every time after the first call you can just call the name and do not have to use the special word:
firstname = "Olivia";

// var has a global scope, meaning variables defined with var can be used in the entire script.
// let has block scope, maening variables defined with let can only be used in the block it was created.
// const is used for assigning a value to a variable that will not be changed.

// you can use backticks (`) in javascript:
let language = "JavaScript";
let message = `Let's learn ${language}`;
console.log(message);

// Escape Characters
// "\" will let you use things that would normally be seen by the interpreter:
// \n and \\ would create a new line and show a backslash resepectively

// Number
// The number datatype can can represent a plethora of different numeral formats:
// decimals, exponenpials, octals, hexadecimals, and binary numbers can be included.
let intNum = 1;
let decNum = 1.5;
let expNum = 1.4e15;
let octNum = 0o10; // in decimals it would be 8
let hexNum = 0x3E8; // decimal version would be 1000
let binNum = 0b101; // decimal version would be 5

// for numbers bigger than 2^53 - 1 and smaller than -(2^53 - 1), the BigInt data type 
// can be used and is recognized by using the letter "n" at the end of the number:
let bigNum = 90071992547409920n;

// Keep in mind that you cannot mix up a regular number data type with the BigInt data type:
// This would cause an error.
// let result = bigNum + intNum;   
// console.log(result);  

// Booleans
// Booleans can hold two values: true or false.
let bool1 = true;
let bool2 = false;

// Symbol
// A new data type in ES6, symbols can be used when it is important for variables to not be 
// equal, even though their value and type are the same.
// Take the two examples with one using symbol:
let str1 = "JavaScript is fun!";
let str2 = "JavaScript is fun!";
console.log("These two strings are the same:", str1 === str2);

let sym1 = Symbol("JavaScript is fun!");
let sym2 = Symbol("JavaScript is fun!");
console.log("These two symbols are the same:", sym1 === sym2); 

// Undefined variables are variables that don't have a value assigned to it.
// null is an empty value. null is all lowercase.

// Converting Data types:
// It is best to not rely on the interpreter when you want to add or combine variables
let nr1 = 2;
let nr2 = '2';
console.log(nr1 + nr2); // The answer should be 4, but the output is 22 due to concatenation.

// There are 3 different conversion methods: String(), Number(), Boolean().

// Arithetic Operators:
// var + var for addition or concatenation
// var - var for subtration
// var * var for multiplication
// var / var for division
// var ** var for exponentiation
// var % var for modulus

// Unary Operators
// var++ to increment positively
// var-- to decrement

// prefix and postfix operators
// --var will execute the incrementation/decrementation
// before sending the variable through
// var++ will execute the incrementation/decrementation
// after sending the variable through