// Function is the collection of code that perfrom specific task when invoked.

// Lets create function that says my name:

function myName() {
    console.log("My name is Sudip Khanal.")
}
// function invoked:
myName();

// Write the function that add 2 numbers together:

function sum(num1,num2) {
    // num1 and num2 are parameters.
    result= num1+num2
    console.log(result)
    return result
        
}
// 2,3 are arguments which goes in params.
sum(2,3)


// ________________Function with objects and array_______________.

function cartPrice(...num1) {
    return num1
}
console.log(cartPrice(100,200,600,899))

// NOTE: ...num1 collect all the arguments and store it in array 


// Objects in function

const User = {
    Name: "Sudip",
    Bill: 799
};

function checkObject(anyObject) {
    // Just log the name from the passed object
    console.log(`${anyObject.Name}`);
}

// Call the function with the User object
checkObject(User);


// Array in Function:


// Declare an array with three elements: a string, a number, and another string
const myArray = ["sudip", 20, "Developer"];

// Define a function named 'Element' that takes an array as an argument
function Element(getArray) {
    // Return the array that was passed as an argument to the function
    return getArray;
}

// Call the 'Element' function with 'myArray' as the argument
// and log the returned array to the console
console.log(Element(myArray));


// ______________Immedietly invoked function_______________

// Immediately Invoked Function Expressions (IIFE)


(function fn(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('Sudip')
