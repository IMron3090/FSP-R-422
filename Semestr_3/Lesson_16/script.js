console.log(first);
var first;
let second;
console.log(first);

const third ="third value";

first = true;
let w = 4;
w = w + 1;
w += 1;
w++; // +1
console.log(w);
w--; // +1
console.log(w);
// -= /= *=

const myPet = 'armadillo';
console.log('I own a pet ${myPet}.');
console.log("I own a pet " + myPet);

console.log(typeof 1);
console.log(typeof "You");
console.log(typeof true);

let groceryitem = 'mango';

switch (groceryitem) {
    case 'tomato':
        console.log('Tomatoes are $0.49');
        break;
    case 'papaya':
        console.log('Papayas are $1.29');
        break;
    case 'lime':
            console.log('Limes are $1.49');
        break;
    default:
        console.log('Invalid item')    
        break;                    
}

let age = 18;

if (age >=18) {
    console.log('Turn on the lights!');
} else {
    console.log('Turn off the lights!');
}

age >= 18 ? console.log('Turn on the lights!') : console.log('Turn off the lights!');

