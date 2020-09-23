// Create elements

// Create li element
const li = document.createElement('li');

// Add class to it
li.className = 'collection-item';

// Add id
li.id = 'new-item';

// Add attribute
li.setAttribute('name', 'new-item');

// Create text node and append
li.appendChild(document.createTextNode('New List Item'));

// Create new link element
const link = document.createElement('a');

// Add class to new link element
link.className = 'delete-item secondary-content';

// Add href attribute to link element
link.setAttribute('href','#');

// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link into li
li.appendChild(link);

// Append li as child to ul
document.querySelector('ul.collection').appendChild(li);

// Output
console.log(li);
console.log(link);