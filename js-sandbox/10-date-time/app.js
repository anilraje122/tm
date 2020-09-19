// Date & Time

let val;
const today = new Date();
let birthday = new Date('12-28-1990');

birthday = new Date('12-28-1990 11:20:00');
birthday = new Date('Dec 28 1990');
birthday = new Date('12/28/1990');

// returns todays date object
val = today;

// returns todays date string
val = today.toDateString();

// get time, day, mnonth, year
val = today.getMonth();
val = today.getDay();
val = today.getFullYear();
val = today.getHours();
val = today.getMinutes();
val = today.getSeconds();
val = today.getMilliseconds();

// Get today's timestamp
val = today.getTime();

// Set time, day, mnonth, year
birthday.setMonth(2);
birthday.setDate(12);
birthday.setFullYear(1992);
birthday.setHours(5);
birthday.setMinutes(20);
birthday.setSeconds(30);


// Output
console.log(birthday);
console.log(typeof val);
console.log(val);