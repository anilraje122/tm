// Traversing DOM

let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item:first-child');
val = listItem;
val = list;

// Get child nodes
val = list.childNodes;
val = list.childNodes[0];
val = list.childNodes[0].nodeName;

val = list.childNodes[1].nodeType;
// 1 - Element
// 2 - Attribute
// 3 - Text node
// 8 - Comment
// 9 - Document itself
// 10 - Doctype

// Get children element nodes
val = list.children;
val = list.children[0];
list.children[1].textContent = 'Hello';

// Get children of children
val = list.children[3].children[0];
val = list.children[3].children[0];
list.children[3].children[0].id = 'test-link';

// First and Last childs
val = list.firstChild;
val = list.firstElementChild;
val = list.lastChild;
val = list.lastElementChild;

// Get child element count
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement;

// Get parent of parent
val = listItem.parentElement.parentElement;

// Get sibilings node
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.previousSibling;
val = listItem.previousElementSibling;

// Output
console.log(val);