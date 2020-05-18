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

// --- Functions
function calculateAge(birthYear) {
    return 2020 - birthYear;
}

function f(x) {
    console.log(`inside f: x=${x}`);
    x = 5;
    console.log(`inside f: x=${x} (after assignment)`);
}
let x = 3;
console.log(`before calling f: x=${x}`);
f(x);
console.log(`after calling f: x=${x}`);

var ageX = calculateAge(1990);
console.log("Age of X is " + ageX);

// --- Function Statements and Expressions
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            return firstName + ' teaches kids how to code.';
        case 'driver':
            return firstName + ' drives a cab in Lisbon.'
        case 'designer':
            return firstName + ' designs beautiful websites.'
        default:
            return firstName + ' does something else.'

    }
}

console.log(whatDoYouDo('teacher', 'X'));