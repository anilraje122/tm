// var, let, const

/* var ----------------- */

var name = 'Anil';
console.log(name);

name = 'Binil';
console.log(name);

//  Initializing a variable without any value
var greeting;
greeting = 'Hello';
console.log(greeting);

// Variables can include letters, numbers, _, $
// It cannot start with a number
// var 1name = 'Jose'; // Error
var $name = 'Binu'; // not recommended
console.log($name);
var _name = 'Mukesh'; // not recommended
console.log(_name);

// Multi word vars
var firstName = 'Manu'; // Camel case - recommended
var first_name = 'Sai'; // Underscore
var FirstName = 'Naveen'; // Pascal case - recommnends for ES6 class name


/* let ------------------- */

let lname = 'Akhil';
console.log(lname);

lname = 'Shafeeq';
console.log(lname);


/* Const ------------------ */

const cname = 'Nikhil';
console.log(cname);
// cname = 'Mukesh'; // Error
// console.log(cname);

const person = {
    name: 'Jomon',
    age: '20'
}
console.log(person);
person.name = 'Dave'; // we can change the value inside an object even if it is a const variable
person.age = 30;
console.log(person);
// person = {address: 'Bangalore'}; // Error:  we can re-assing a const variable
// console.log(person);


