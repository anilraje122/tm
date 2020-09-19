// Window Methods / Objects / Properties

/********
Note : Alert, prompt, confirm examples are commented to avoid page refresh.
Uncomment required example and watch the console for the output
********/

// Console is child element of window
window.console.log('Hello from window.console');
console.log('Hello from console');

// Alert
// window.alert('Hello from window.alert')
// alert('Hello from alert') 

// Prompt
// const input = prompt('Enter a number : ');
// alert(input);

// Confirm
// if(confirm('Are you sure?')) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }

let val;

// Outer height and width of Window
val = window.outerHeight;
val = window.outerWidth;

// Inner height and width of Window
val = window.innerHeight;
val = window.innerWidth;

// Scroll points
val = window.scrollY;
val = window.scrollX;

// Location Object
val = window.location;
val = window.location.hostname; // returns the hostname : 127.0.0.1
val = window.location.port; // returns the PORT number
val = window.location.search; // returns the query string
// window.location.href = 'http://google.com'; // redirect the page to target URL specified - same is commented to avoid redirection in this example
// window.location.reload(); // Keep refresh the page - same is commented to avoid refersh

// History Object
// window.history.go(-1); // redirect to last page accessed from browser history - commenting the same to avoid page refersh
val = window.history.length; // returns the length of the history

// Navigator Object - Gets information about the browser
val = window.navigator;
val = window.navigator.appName; // returns the browser name - always returns netscape!!
val = window.navigator.appVersion; // returns the browser version
val = window.navigator.userAgent; // similar to app version
val = window.navigator.platform; // returns what OS client browser is running on
val = window.navigator.language; // returns browser language







// Output
console.log(val);

