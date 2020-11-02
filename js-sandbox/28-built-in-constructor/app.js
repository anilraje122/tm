// Built-in constructors

// Strings
const name1 = 'Anil';
const name2 = new String('Mukesh'); // Used only in special cases

console.log(name1);
console.log(name2);
console.log('hello ' + name1);
console.log('hello ' + name2);
console.log(typeof name1); // string
console.log(typeof name2); // object
console.log(name2 === 'Mukesh'); // returns false because the types are different even though the values are same
console.log(name2 == 'Mukesh'); // returns true since the value are same

// Number
const num1 = 10;
const num2 = new Number(20);
console.log(typeof num1); // number
console.log(typeof num2); // object

// Boolean
const bool1 = true;
const bool2 = new Boolean(false);
console.log(typeof bool1);
console.log(typeof bool2);

// Function
const getSum1 = function(x, y) {
    return x+y;
}
const getSum2 = new Function('x', 'y', 'return x+y');
console.log(getSum1(1, 2)); // return 3
console.log(getSum2(1, 2)); // return 3

// Object
const john = {
    name: "John",
    age: 30
}
const jane = new Object({
    name: 'Jane',
    age: 20
})
console.log(john);
console.log(jane);

// Arrays
const array1 = [1,2,3,4];
const array2 = new Array([10,20,30]);
console.log(array1);
console.log(array2);