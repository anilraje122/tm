// Type conversions

let val;

// Number to String
val = String(10);
val = String(4+4);

// Bool to String
val = String(true);

// Date to String
val = String(new Date());

// Array to String
val = String([1,2,3,4]);

// toString() method works same as String()
val = (5).toString();
val = (true).toString();

// String to Number
val = Number('5');

// Boolean to Number
val = Number(true);
val = Number(false);

// Null to Number
val = Number(null);

// (NaN) String to Number
val = Number('hello');  // returns NaN

// Using parseInt
val = parseInt('100.10000');

// Using parseFloat
val = parseFloat('33.45');

// Numbers and String
const val1 = 5;
const val2 = String(10);
const sum = val1 + val2; // Output would be concatined inputs since one of them is a String : 510
console.log(sum);

// Output
console.log(val);
console.log(typeof val);
// console.log(val.length); // works only on String
console.log(val.toFixed(2)); // works only on Number
console.log(sum);


