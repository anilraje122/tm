// Constructor and this keyword

// Person constructor
function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calcAge = function () {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);

    }
    // check the value of 'this' keyword inside constructor
    console.log('value of this keyword inside constructor:');
    console.log(this);
}
// Check the value of 'this' keyword inside global scope
console.log('value of this keyword in global scope:');
console.log(this);

// Create instances of constructor
const anil = new Person('anil', '12-28-1990');
const binil = new Person('binil', '12-28-2000');
console.log(`anil's age is ${anil.calcAge()}`);
console.log(`binil's age is ${binil.calcAge()}`);