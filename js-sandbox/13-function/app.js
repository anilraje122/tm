// Function

// Function declaration
// Set default values in ES5/old way
function greet(firstName, lastName) {
    if(typeof firstName === 'undefined') { firstName = 'Anju'} 
    if(typeof lastName === 'undefined') { lastName = 'Thomas'}
    return 'Hello ' + firstName + ' ' + lastName;
}

// Function invokation / Function call
console.log(greet('Anil', 'Raj'));
console.log(greet());



// Function declaration
// Set default values for the parameters as per ES6
function greet(firstName = 'Amala', lastName = 'Thomas') { 
    return 'Hello ' + firstName + ' ' + lastName;
}

// Function call
console.log(greet('Anil', 'Raj'));
console.log(greet());



// Function expression
const square = function(x = 4) {
    return x*x;
};
console.log(square(8)); // returns square of 8 = 64
console.log(square()); // returns square of 4 (default value of parameter) = 16 



// Immidiatly Invoked Function Expression - IIFEs
// It invokes on the fly - no need to call the function seperatly
(function(name){
    console.log('Hello ' + name);
})('Anil');



// Property methods
const todo = {
    add: function() {
        console.log('Add todo!');
    },
    edit: function(id) {
        console.log(`Edits todo ${id}`);
    }
}

// Add new property method outside of Object
todo.delete = function() {
    console.log('Delete todo');
}

// Output of Property method
todo.add();
todo.edit('#122');
todo.delete();