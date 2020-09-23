// Remove and Replace Elements

// Replace element -> h5 - tasks
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'new-task-title';

// Add Class
newHeading.className = 'text-class';

// Add new text node
newHeading.appendChild(document.createTextNode('New Tasks'));

// Get old heading
const oldHeading = document.querySelector('h5#task-title')

// Get parent
const cardAction = document.querySelector('.card-action');

// Output
console.log(newHeading);
console.log(oldHeading);

// Replace the h5 - tasks
cardAction.replaceChild(newHeading, oldHeading);



// Remove Element -> li (List Item)
const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove the first element
lis[0].remove();

// Remove child element
list.removeChild(lis[1]);


// Classes & Attributes
const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;

// Get class list
val = link.classList;
val = link.classList[0]; // get the first class
// Add class
link.classList.add('test-class');
val = link.classList;
// Remove class
link.classList.remove('test-class');
val = link.classList;

// Attributes
val = link.getAttribute('href');
// Add attribute
link.setAttribute('href', 'http://google.com');
val = link.hasAttribute('href'); // returns true or false
val = link.hasAttribute('title'); // returns true or false
// Check attribute
link.setAttribute('title', 'Google');
val = link.hasAttribute('title'); // returns true or false
// Remove attribute
link.removeAttribute('title');
val = link.hasAttribute('title'); // returns true or false

// Output
console.log(val);

