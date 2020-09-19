// Condition & Comparison

// if-else statement structure

// if(something) {
//     do something
// } else {
//     do something else
// }

let id = 100;
// id = '100'; // Uncomment to TEST below code

// Checks only value

// Equal to
if(id == 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Not equal to
if(id != 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Checks value and type

// Equal to
if(id === 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Not equal to
if(id !== 101) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Test if undefined
// newId = 122; // Uncomment to test below code
if(typeof newId !== 'undefined'){
    console.log(`The id is ${newId}`);
} else {
    console.log('No id');
}

// Greater or less than
// Greater than
if(id > 10) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// Less than
if(id < 2) {
    console.log('Correct');
} else {
    console.log('Incorrect');
}

// If else-if
const color = 'reddd';

if(color === 'red'){
    console.log('Color is Red');
} else if(color === 'green') {
    console.log('Color is Green');
} else if(color === 'blue') {
    console.log('Color is Blue');
} else {
    console.log('Color is not an RGB!')
}

// Logical operators
//  AND &&
const name = 'Steve';
const age = 15; // Change input to test different conditions
if(age > 0 && age < 12) {
    console.log(`${name} is a child!`);
} else if(age >= 13 && age <= 19) {
    console.log(`${name} is a teenager!`);
} else {
    console.log(`${name} is an adult!`);
}

// OR ||
if(age < 16 || age > 65) {
    console.log(`${name} is not eligible for the compitition!`);
} else {
    console.log(`${name} is eligible for the compitition!`);
}


// Ternary Operator
id = 200;
console.log(id === 201 ? 'Correct' : 'Incorrect');

// Without braces - Not recommended
if(id === 100)
    console.log('Corrrect');
else
    console.log('Incorrect');




