// Local session and storage

// Set local storage item
localStorage.setItem('name', 'Anil');
localStorage.setItem('age', '30');

// Get item
const name = localStorage.getItem('name');
const age = localStorage.getItem('age');
console.log(name, age);

// Clear storage
localStorage.clear();

// Remove item
localStorage.removeItem('name');

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const task = document.getElementById('task').value;
    let tasks;
    if(localStorage.getItem('tasks') == null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem('tasks'));
    }

    tasks.push(task);

    localStorage.setItem('tasks', JSON.stringify(tasks));
});

let tasks = JSON.parse(localStorage.getItem('tasks'));
tasks.forEach((item) => {
    console.log(item);
});

// Set session storage
sessionStorage.setItem('name', 'Dinil')



