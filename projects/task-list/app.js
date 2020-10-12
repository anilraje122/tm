// Define UI vars
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearbtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners = () => {
    // Add task event
    form.addEventListener('submit', addTask);
}

// Add new task
addTask = (e) => {
    if(taskInput.value === '') {
        alert('add a task');
    }

    // create li element
    const li = document.createElement('li');
    // Add class
    li.className = 'collection-item';
    // Create text node and append to li
    li.appendChild(document.createTextNode(taskInput.value));
    // Create new link element
    const link = document.createElement('a');
    // Add class
    link.className = 'delete-item secondary-content';
    // Add icon
    link.innerHTML = '<i class="fa fa-remove"></i>';
    // Append link to li
    li.appendChild(link);
    // Add li element to ul
    console.log(li);
    taskList.appendChild(li);
    // Clear input
    taskInput.value = '';


    e.preventDefault();   
}

loadEventListeners();




