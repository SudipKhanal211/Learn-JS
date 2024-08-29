/* we have learned about string in 02_DataType but we will revise here as well
1. How do we declare string?
2. how to concatinate strings and different datatypes?
3. What are template Literail?

*/

// string cann also be declered using:

string1= new String ("sudip")
// here new String makes an string object by which methods can be applied.
console.log(string1);
console.log(typeof(string1));
  
// lets see how to add strings and numbers together:

string2 = "This is string";
string3 ="This is another string";

// here we have 2 ways to put these string together:

// this is old way to concat strings.
// console.log(string2+" and "+string3); 

// this way of concat is practiced in job market
// console.log(`${string2} and ${string3}`);

// this was all about string now lets move on methods of string
// note: we will only see necessary methods.

//  .length is used to know how many characters are there in string.
console.log(string1.length)

//  .indexOf() is used to check the index of particular character.
// note: Index always starts form 0 whereas, length is counted from 1.

index= string2.indexOf('i')
console.log(index);


// toUppercase() is used to convert characters into upper case.
string = string1.toUpperCase();
console.log(string)

// toLowerCase() is just viceversa of uppercase.
string4= string.toLowerCase();
console.log(string4)


// trim() is used to remove space.

string5 = "  This is note of js   "
string5 = string5.trim();
console.log(string5)


// replace() is used to replace characters.
string6= "We cannot replace characters";
string6= string6.replace("cannot","can") 
console.log(string6);

// we can explore more methods while building projects.