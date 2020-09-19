// Arrays

// Create some arrays
let numbers = [13,65,23,56,89];
const numbers2 = new Array(45,23,45,56,67);
const fruits = ['apple', 'orange', 'banana'];
const mixed = ['hello', true, 122, undefined, new Date(), null, {a:1, b:2}]

// Array length
val = numbers.length;

// Check if is Array
val = Array.isArray(numbers); // check if the input is an array or not

// Get single value
val = numbers[0]; // returns value at index = 0

// Insert into Array
numbers[2] = 100; // set new value to array index = 2

// Find index of a value
val = numbers.indexOf(13);


// Mutating Array with different methods

// push
numbers.push(2000); // Add on to End
numbers.unshift(4000); // Add on to Start
numbers.pop(); // Remove one element from the End
numbers.shift(); // Remove one elememnt from Start
numbers.splice(1, 1); // Removes an element from a specific index : splice(index, number of elements to remove)
numbers.reverse(); // Reverse an array
val = numbers.concat(numbers2); // Concatinate two arrays
val = fruits.sort(); // Sorts an Array

// Use the compare function to sort an array
val = numbers.sort(function(x, y){
    return x - y;
});

// Use the compare function to sort an array in reverse
val = numbers.sort(function(x, y){
    return y - x;
});

// Find an element as per a condition
function under20(num) {
    return num<20;
}
val = numbers.find(under20)


// Output
console.log(numbers);
console.log(val);