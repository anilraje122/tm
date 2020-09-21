// DOM - Multi Element Selectors


// Use getElementById
let items;
items = document.getElementsByClassName('collection-item'); // get all the li elements with class name specified
items[2].style.color = 'red';
items[1].textContent = 'Hello';
console.log(items);

const listItems = document.querySelector('ul').getElementsByClassName('collection-item');
console.log(listItems);


// Use getElementByTagName
let lis;
lis = document.getElementsByTagName('li');
console.log(lis);
console.log(lis[0]);
lis[3].style.color = 'blue';

// convert html collection into array
lis = Array.from(lis);
// reverse the array
lis.reverse();
// change the color of first element and observe the output
lis[0].style.color = 'green';
console.log(lis);
// Iterate through each li
lis.forEach((li, index) => {
    li.textContent = `${index}: Hello`;
});



// Use Query Selector All
let allItems = document.querySelectorAll('ul.collection li.collection-item');
console.log(allItems);
allItems.forEach((li, index) => {
    li.textContent = `${index}: Hello Query Selector All`;
});

let liOdd = document.querySelectorAll('li:nth-child(odd)')
liOdd.forEach((li, index) => {
    li.style.background = 'gray'
});

let liEven = document.querySelectorAll('li:nth-child(even)')
for(let i=0; i<liEven.length; i++) {
    liEven[i].style.background = 'lightyellow';
}