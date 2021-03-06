// ES6 Classes

class Person {
  constructor(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
  }
  greeting() {
    return `Hello There ${this.firstName} ${this.lastName}`;
  }
  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageData = new Date(diff);
    return Math.abs(ageData.getUTCFullYear() - 1970);
  }
  getsMarried(newLastName) {
    this.lastName = newLastName;
  }
  static addNumbers(x, y) {
    return x + y;
  }
}

const mary = new Person("Mary", "Williams", "11-13-1980");
console.log(mary);
console.log(mary.greeting());
console.log(mary.calculateAge());
mary.getsMarried("Thompson");
console.log(mary.greeting());

// Static method should be called with Class name not the object name
console.log(Person.addNumbers(2, 3));
