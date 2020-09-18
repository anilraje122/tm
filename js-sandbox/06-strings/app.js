// String and String fucntions

const firstName = 'Anil';
const lastName = 'Raj';
age = 30;
const str = 'Hello there, My name is Anil';
const tags = 'web,development,programming,coding';

let val;

// Concatination
val = firstName + ' ' + lastName;

// Append
val = 'David';
val += ' Bekham';

val = 'Hello, My name is ' + firstName + 'and I am ' + age;

// Escape char
val = 'That\'s awesome, I can\'t wait'; // "\" is an escape character

// Length
val = firstName.length;

// concat()
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = lastName.toLowerCase();

// Get characters from a String
val = firstName[0]; // returns 'A'


// IndexOf()
val = firstName.indexOf('n');
val = 'anilraj'.lastIndexOf('a');

// charAt()
val = firstName.charAt(0);


// Get last char
val = lastName.charAt(lastName.length-1);

// substring()
val = firstName.substring(0,3);

// slice()
val = firstName.slice(0,3);
val = firstName.slice(-3); // get last 3 chars

// split()
val = str.split(' '); // split the string into array
val = tags.split(','); // split the string into array

// replace()
val = str.replace('Anil', 'Binil');

// includes()
val = str.includes('Anil'); // returns true
val = str.includes('foo'); // returns false


// Output
console.log(val);