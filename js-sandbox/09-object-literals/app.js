// Object Literal

const person = {
    firstName: 'Steve',
    lastName: 'Smith',
    age: 30,
    email: 'steve@gmail.com',
    hobbies: ['football', 'cricket'],
    address: {
        city: 'Bangalore',
        State: 'Karnataka'
    },
    getBirthYear: function(){
        return 2020 - this.age;
    }
}

let val;
val = person;

// Get specific values
val = person['firstName'];
val = person.firstName; // recommended way
val = person.age;
val = person.email;
val = person.hobbies[0]; // returns football
val = person.address.city; // returns Bangalore
val = person.getBirthYear(); // returns 1989

// Object with in Array
const people = [
    {name: 'Jose', age: 30},
    {name: 'Jomon', age: 40}
];
for(let i=0; i<people.length; i++) {
    console.log(people[i].name); // loop through people array and print the names
}

// Output
console.log(val);