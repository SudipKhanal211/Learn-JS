/*
Datatype conversion is the peocess which conatins certain keywords to change the type of data.  
    for example: 
    // let age= 20
// console.log(typeof (age));  => this will give number as the output.

// lets store age in another variable and change its data type.
// convertAge= age; 
// convertAge = (String(age)); =>'String(age)' is used to convert data type of age to string.
// console.log(typeof convertAge); 
    

*/

let age= 20
// checking datatype of age.
 console.log(typeof (age));  

// lets store age in another variable and change its data type.
convertAge= age; 
convertAge = (String(age));
console.log(typeof convertAge); 

/*
like the same way there is many keyword that helps to convert datatype from one to another.
1. String(variable) is used to convert any datatype to String. 
2. Number(variable) is used to convert any datatype to number.
3. Boolean(variable) is used to convert any datatype to boolean, and many more.
*/

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "hello"
let str2 = " Sudip"

let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(1 + "2");
// console.log("1" + 2 + 2);
// console.log(1 + 2 + "2");

// console.log( (3 + 4) * 5 % 3);

// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
++gameCounter;
console.log(gameCounter);

