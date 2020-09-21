// DOM - Document Object Model

let val;

val = document;

val = document.all;
val = document.all[1]; 
val = document.all.length;

val = document.head;

val = document.body;

val = document.doctype;

val = document.domain;

val = document.URL;

val = document.characterSet;

val = document.contentType;

val = document.forms; // return all forms
val = document.forms[0].id;
val = document.forms[0].action;
val = document.forms[0].className;
val = document.forms[0].classList;

val = document.links; // return all anchor tag

val = document.scripts; // returns all scripts attached
val = document.scripts[0].getAttribute('src'); // get the attributs of script tag

val = document.images; // returns all image tags
// get all the images source attributs
let imgArr = Array.from(val);
imgArr.forEach((item) => console.log(item.getAttribute('src')))


// Output
console.log(val);