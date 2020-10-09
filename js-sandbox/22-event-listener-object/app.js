// Event Listener and Event Object

// Event listener
document.querySelector('.clear-tasks').addEventListener('click', function(e) {
    console.log('hello from anonymus function attached to the event');
    e.preventDefault();
});

document.querySelector('.clear-tasks').addEventListener('click', clickMeFunction);
function clickMeFunction(e) {
    console.log('hello from click me function');
    e.preventDefault();
}

// Event objects
document.querySelector('.clear-tasks').addEventListener('click', clickMeFunction);
function clickMeFunction(e) {
    e.preventDefault();
    
    let val = e;

    // Get event target element
    val = e.target; // get the whole element
    val = e.target.id; // get the id
    val = e.target.className; // get all classes
    val = e.target.classList; // get all classes as collection
    
    // Modify the target element properties
    e.target.innerText = 'hello'; // change the button text

    // Get event type = click
    val = e.type;

    // Timestamp
    val = e.timeStamp;

    // Get coordinates relative to the window
    val = e.clientY;
    val = e.clientX;

    // Get coordinates relative to the element
    val = e.offsetY;
    val = e.offsetX;

    // Output
    console.log(val);

    
}