// Nathaniel Barrera
// These are the notes taken from Chapter 3

// ---------- Arrays ----------
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

