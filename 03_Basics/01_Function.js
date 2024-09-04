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


// 
