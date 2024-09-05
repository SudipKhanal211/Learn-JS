/* Scope is the block where the line of code is written to make it more readable.
 There are two type of scope: 
1. Local Scope 
2. Global scope
*/

// The object is also decleared with "{ }" but objects comes with key:value pair and scope/block contain lines of code.
 
// local scope:

{
    let var1= "This is first line inside local scope"
    const var2= "This is second line inside local scope"
    var var3= "This is third line inside local scope"

// console.log(var1);
// console.log(var2);
console.log(var3);

// The console output will shown without error without any errors as it is inside the block/scope

}

// lets see what will be the output if we console outside the block.

// console.log(var1);
// console.log(var2);


var3="this is modified outside of the block"
console.log(var3);

// here the variable decleared with let and cost will show error as it is executed outside of block

// NOTE: let and const are local scoped variable but the var is global scoped. 