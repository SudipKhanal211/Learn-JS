/*
While writing code we don't want to run every line of code, the executation of code is controlled using controlflow statements

types of control flow:
*/

// ----------------------if statement-----------------------

// syntax:


// if (condition) {
    
// }

let age= 17
if (age=>18) {
    // console.log ("can vote")
}

// _______________ if else statement___________
let number = -5;

if (number > 0) {
    console.log("The number is positive.");
} else {
    console.log("The number is negative.");
}

// __________________if elseif else__________________
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}


// _______________Switch____________________

let dayNumber = 3; 

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");
}



