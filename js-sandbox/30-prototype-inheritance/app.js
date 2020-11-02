// Prototype Inheritance
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function() {
    return `Hello ${this.firstName} ${this.lastName}`;
}

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// Customer
function Customer(firstName, lastName, phone, membership) {
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

// Inherit Person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype returns Customer()
Customer.prototype.constructor = Customer;

// Greeting
Customer.prototype.greeting = function() {
    return `Hello ${this.firstName} ${this.lastName}, Welcome to our Company`;
}

const customer1 = new Customer('Tom', 'Smith', '7899179778', 'Standard');
console.log(customer1);
console.log(customer1.greeting());