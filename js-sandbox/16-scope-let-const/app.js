// Scopes - let, const and var

// Global scope
var a = 1;
let b = 2;
const c = 3;
console.log(`Inital Values : a = ${a}, b = ${b}, c = ${c}`);

// Function scope
function test() {
    var a = 4;
    let b = 5;
    const c = 6;
    console.log('Function Scope : ', a, b, c);
}
test();


// Block scope
if(true) {
    var a = 7;
    let b = 8;
    const c = 9;
    console.log('If Scope : ', a, b, c);
}

// Scope inside Loop
for(let a=0; a<10; a++) {
    console.log(`Loop : ${a}`);
}

console.log('Global Scope : ', a, b, c);




