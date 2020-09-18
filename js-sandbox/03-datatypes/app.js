// Datatypes : Primitive and Reference
// Primitive : String, Number, Boolean, Null, Undefined, Symbols (ES6)
// Reference : Arrays, Object Literals, Functions, Dates, Anything else..
// Js is dynamically typed lang: same variable can hold mulitple types

// Primitive

// String
const name = 'Anil Raj';
console.log(typeof name); // typeof returns the type of the variable

// Number
const age = 29;
console.log(typeof age);

// Boolean
const hasKids = false;
console.log(typeof hasKids);

// Null
const car = null;
console.log(typeof car); // it returns the type as an object but it is a bug in Js

// Undefined
let test;
console.log(typeof test);

// Symbol
const sym = Symbol();
console.log(typeof sym);


// Reference types - Objects

// Array
const hobbies = ['football', 'video games', 'movies'];
console.log(typeof hobbies);

// Object Literal
const address = {
    city: 'Bangalore',
    state: 'KA'
};
console.log(typeof address);

// Date
const today = new Date();
console.log(today);
console.log(typeof today);

