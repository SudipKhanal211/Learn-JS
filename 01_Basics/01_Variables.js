// variables are the container that store value which can be modified or changed as requires.

/* 
Variables can be decleared using Let, Var and const.
Where,
    Var and Let are mutable (Whose values can be changed).
    Const is immutable(Whose value cannot be changed).

    Var is used inside a function .
    Let and const can be used globally once decleared.
*/

let firstName= "Alex";
var lastName ="Sharma";
const City = "Dang";

// let's update values of variables.

firstName= "Sudip";
lastName ="Khanal";
// City ="Kathmandu"; 
// City will through error as it is const and vaalue cannot be changes 


console.log(firstName);
console.log(lastName);
console.log(City);

// NOTE: WE AVOID USING var TO DECLEAR VARIABLE BECAUSE OF SCOPED ISSUE.