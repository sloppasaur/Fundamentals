// Nathaniel Barrera
// The goal of this project is to calculate BMI.
// Take the height in inches and the weight in pounds
// convert the values to centimeters and kilos.

// Get the initial height and weight measurements in pounds
let heightIn = 75;
let weightPds = 230.7;

// Covert the values to the metric system
let convertToCms = heightIn * 2.54;
let convertToKilos = weightPds / 2.2046;

// Ouput the new height and weight to the console
console.log(`Height: ${convertToCms}cm`);
console.log(`Weight: ${convertToKilos}Kg`);

// Calc the BMI (Weight / (height^2))
const bmiCalc = convertToKilos / ((convertToCms / 100) ** 2);

// Output the BMI to the console
console.log(`Calculated BMI: ${bmiCalc}`);