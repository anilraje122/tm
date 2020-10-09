// Keyboard and Input Events

const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');
const select = document.querySelector('select');

// Clear input
taskInput.value = '';

// form events
form.addEventListener('submit', runEvent);

// Input events
taskInput.addEventListener('keydown', runEvent2);
taskInput.addEventListener('keyup', runEvent2);
taskInput.addEventListener('keypress', runEvent2);
taskInput.addEventListener('focus', runEvent2);
taskInput.addEventListener('blur', runEvent2);
taskInput.addEventListener('cut', runEvent2);
taskInput.addEventListener('paste', runEvent2);
taskInput.addEventListener('input', runEvent2);

// Select events
select.addEventListener('change', runEvent2)


function runEvent(e) {
    e.preventDefault();
    console.log(`EVENT TYPE: ${e.type}`);
    // Get input value
    console.log(taskInput.value);
    console.log(e.target.value);
}

function runEvent2(e) {
    console.log(e.target.value);
    heading.innerText = e.target.value;
    console.log('focus/blur/cut/paste');
}
