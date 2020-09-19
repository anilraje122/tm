// Loops

// Simple For loop
for(let i=1; i<=5; i++) {
    console.log('For loop value :' + i);
}


// For loop with break and coninue
for(let i=1; i<=10; i++) {
    if(i === 2) {
        console.log('2 is my fav number!');
        continue;
    }
    if(i === 7) {
        console.log('Break the loop at number : 7');
        break;
    }
    console.log('For loop value : ' + i);
}


// While loop
let i = 1;
while(i <= 5) {
    console.log('While loop value : ' + i);
    i++;
}


// Do While loop
let j = 1;
do {
    console.log('Do while loop value : ' + j);
    j++;
} while(j <= 5);


// Looping through an Array using For loop
cars = ['ford', 'chevy', 'honda', 'maruti'];
for(let i=0; i < cars.length; i++) {
    console.log(cars[i]);
}


// Looping through an Array using For Each - Recommended way of iterating through an Array
colors = ['red', 'green', 'blue', 'violet'];
colors.forEach( function (color, index) {
    console.log(`${index} : ${color}`); // displays both index and value
});


// Map
const users = [
    {id: 1, name: 'Jose'},
    {id: 2, name: 'Anil'},
    {id: 3, name: 'Binu'},
    {id: 4, name: 'Sara'},
];

const ids = users.map(function(user){
    return user.id;
})

console.log(ids); // gets all the ids of users


// For In loop
const user = {
    firstname: 'Anil',
    lastname: 'Raj',
    age: 30
}

for(let x in user) {
    console.log(`${x} : ${user[x]}`); // You must use Object[key]. user.x will not work
}




