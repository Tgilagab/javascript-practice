
// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
let num1 = parseInt(prompt("give me a num !"));
let num2 = parseInt(prompt("give me a second num ! "));
// Compare the two numbers
const larger = (num1 > num2) ? `the larger number is ${num1}` : `the larger numer is ${num2}`;
// Alert the larger number
console.log(larger);
window.alert(larger + '\n' + `num1 is ${typeof(num1)}` + '\n' + `num2 is ${typeof(num2)}`);
