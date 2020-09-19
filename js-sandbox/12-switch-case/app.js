// Switch case

let color = 'red';
color = 'blue';
color = 'yellow';

// Simple switch
switch(color) {
    case 'red':
        console.log('Color is Red');
        break;
    case 'green':
        console.log('Color is Green');
        break;
    case 'blue':
        console.log('Color is Blue');
        break;
    default:
        console.log('Color is not an RGB');
        break;
}

// Another Switch example with Date method
let day;
switch(new Date().getDay()) {
    case 0:
        day = 'Sunday';
        break;
    case 1:
        day = 'Monday';
        break;
    case 2:
        day = 'Tuesday';
        break;
    case 3:
        day = 'Wednesday';
        break;
    case 4:
        day = 'Thursday';
        break;
    case 5:
        day = 'Friday';
        break;
    case 6:
        day = 'Saturday';
        break;
}
console.log(`Today is ${day}`);

