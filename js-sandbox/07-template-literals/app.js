// Template Literals

const name = 'John';
const age= 32;
const job = 'Web Developer';
const city = 'Bangalore';

// without template string (ES5)

html = '<ul>' + 
    '<li>Name : ' + name + '</li>' + 
    '<li>Age : '+ age +'</li>' + 
    '<li>Job : '+ job +' </li>' + 
    '<li> City: '+ city +'</li></ul>';
document.write(html);

// template literal way (ES6)

function hello() {
    return 'hello';
}

htmlNew = `<ul>
            <li> ${name} </li>
            <li> ${age} </li>
            <li> ${job} </li>
            <li> ${city} </li>
            <li> ${hello()} </li>
            <li> ${age>30?'over 30':'under 30'} </li>
           </ul>`;
document.write(htmlNew);