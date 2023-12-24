// Nathaniel Barrera
// The goal of this program is to calculate the hypotenuse of a 
// triangle by prompting the user to input the other two sides:
// a^2 + b^2 = c^2

let sideA = prompt("What is the length of side A?");
let sideB = prompt("What is the length of side B?");

console.log(`The hypotenuse of ${sideA} and ${sideB} is ${sideA ** 2 + sideB ** 2}`);