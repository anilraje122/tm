// Numbers and Math functions

const num1 = 100;
const num2 = 50;
let val;

// Simlpe Math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI; // Returns value of Pi
val = Math.E;
val = Math.round(2.8);
val = Math.round(2.2);
val = Math.ceil(2.2);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-21);
val = Math.pow(2,3); // 2**3
val = Math.min(4,2,6,3,1); // returns the min number : 1
val = Math.max(4,6,233,54,63); // returns the max number : 233
val = Math.random(); // returns a random number
val = Math.floor(Math.random() * 20 + 1); // returns a number between 1 - 20

// Output
console.log(val);