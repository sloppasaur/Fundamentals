// Nathaniel Barrera
// These are the notes taken from Chapter 3

// ----------; Arrays ----------
// Arrays are a list of values, and can even contain different data types.

// Creates an array of strings:
arr1 = ["black", "orange", "pink"];

// Creates an array of 10 undefined values
arr2 = new Array(10);

// Creates an array with an int 10
arr3 = [10];

// Creates an array with multiple variables of different types:
let arr4 = ["hi there", 5, true];
console.log(typeof arr4[0]);
console.log(typeof arr4[1]);
console.log(typeof arr4[2]);

// when using "const" to make an array, you can change the values in the array,
// but you can't change the array itself.

// ----------Accessing Elements----------
cars = ["Toyota", "Renault", "Volkswagon"];
console.log(`Accessing Brand: ${cars[0]}`);

// ----------Overwriting Elements----------
cars[0] = "Tesla";
console.log(`Accessing Brand: ${cars[0]}`);

// You can even add Elements:
cars[-1] = "Fiat";
cars[3] = "Kia";
console.log(cars);

// ----------The Length Property----------
// Arrays have a built in property called Length:
colors = ["black", "orange", "pink"];
booleans = [true, false, false, true];
emptyArray = [];

console.log(`The Length of colors is: ${colors.length}`);
console.log(`The Length of booleans: ${booleans.length}`);
console.log(`The Length of an empty Array: ${emptyArray.length}`);

// Access the last element of the array
lastElement = colors[colors.length - 1];

// Keep in mind that if you add an element that skips nonfilled 
// elements, it will stiil count those elements as undefined elements
numbers = [12, 24, 36];
numbers[5] = 48;
console.log(numbers.length);
console.log(numbers);

// ----------Array Methods----------
// there are multiple methods that can be used in an Array other than
// length

// Here's the push() method:
favoriteFruits = ["grapefruit", "orange", "lemon"];
favoriteFruits.push("tangerine");   // Adds tangerine to the end of the Array

// You can store the length in variable:
let lenOfFavoriteFruits = favoriteFruits.push("lime"); // stores the value of 5:
console.log(favoriteFruits);

// The splice method lets you add elements in any part of the Array:
let arrOfShapes = ["circle", "triangle", "rectangle", "pentagon"];
console.log(arrOfShapes);
arrOfShapes.splice(2, 0, "square", "trapezoid");    
console.log(arrOfShapes);   // The length of the array is so long it \n each line

// You can combine arrays with the "concat" method:
let arr5 = [1, 2, 3];
let arr6 = [4, 5, 6];
let arr7 = arr5.concat(arr6);
console.log(arr7);

// You can also do this:
let arr8 = arr7.concat(7, 8, 9);
console.log(arr8);

// You can delete methods in multiple ways.
// One of the ways it the pop() method. This will remove the last element of the
// array.
arr8.pop();
console.log(arr8);

// the shift() method will remove the first element in the array:
arr8.shift();
console.log(arr8);

// The splice() method can be used to delete values as well:
arr8.splice(1, 3);
console.log(arr8);

// The operator delete will delete the specified spot of the array, but will
// not affect the rest of the indices. The old spot will become defined:
delete arr8[0];
console.log(arr8);

// You can find elements using the find() method. Note that this is actually a
// function:
arr8 = [2, 6, 7, 8];
let findValue = arr8.find(function(e) {return e === 6 });
let findValue2 = arr8.find(e => e === 10);
console.log(findValue, findValue2);

// Often you want to know what position of the element you want is on. You can 
// do that with the indexOf() method:
let findIndex = arr8.indexOf(6);
let findIndex2 = arr8.indexOf(10);
console.log(findIndex, findIndex2); // findIndex2 should return -1 since it dosen't exist in the array.

let animals = ["dog", "horse", "cat", "platypus", "dog"];
let lastDog = animals.lastIndexOf("dog");
console.log(lastDog);

// ----------Sorting Arrays----------
// There is a built in method for sorting arrays:
let names = ["James", "Alicia", "Fatiha", "Maria", "Bert"];
names.sort();
console.log(names);

let ages = [18, 33, 40, 56, 72];
ages.sort();
console.log(ages);