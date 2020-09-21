// DOM - Single Element Selectors

let val;

// Use getElementById
val = document.getElementById('task-title')
val = document.getElementById('task-title').id;
val = document.getElementById('task-title').className;
val = document.getElementById('task-title').innerText;

// Change styling using getElementById
document.getElementById('task-title').style.background = 'skyblue';
document.getElementById('task-title').style.padding = '20px';

// Change content using getElementById
const taskTitle = document.getElementById('task-title');
taskTitle.textContent = 'New Text';
taskTitle.innerText = 'My New Text';
taskTitle.innerHTML = '<span style="color:red;">Task</span> List';


// Use Query Selector
val = document.querySelector('#task-title'); // // select an element by id
val = document.querySelector('.card-title'); // select an element by class
val = document.querySelector('h5'); // select an element by name

// Change styling using Query String
document.querySelector('li').style.color = 'red'; // selects only the first li element
document.querySelector('ul li').style.background = 'gray'; // selects only the first li element
document.querySelector('li:nth-child(3)').style.background = 'crimson'; // selects only the third li element

// Change content using Query String
document.querySelector('li:nth-child(4)').textContent = 'Hello World!';
document.querySelector('li:nth-child(odd)').style.color = 'blue'; // this will select only first element because query selector is a single element selector
document.querySelector('li:nth-child(even)').style.color = 'orange';


// Output
console.log(val);