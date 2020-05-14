var now = 2018;
var yearX = 1989;
var fullAge = 18;

var firstName = "Schlumpfi";
var civilStatus = "single";
var isMarried = false;

if (civilStatus === "married") {
    console.log(firstName + " is married!");
} else {
    console.log(firstName + " is not married!");
}

if (isMarried) {
    console.log("Flag is set.");
} else {
    console.log("Flag is disabled.");
}

console.log(true && true);
console.log(true || false);
console.log(!(true || false));

// Tenary Operator
var age = 16;
age >= 18 ? console.log('greater than 18') : console.log('less than 18');
var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

// type coercion.
var height = 23;

if (height == '23') {
    console.log('The == operator does type coercion!');
}