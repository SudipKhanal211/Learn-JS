// loops is used to repeat the certain task time and again according to the condition given.

// there are many typer of loops for example:

// for:
/* 
Syntax:
for (initial value; condition ; increment/decrement) {
    rest of the code
    
} */


// loop to print number from 1 to 10
for (let i = 1; i <=10; i++) {
    // console.log(i);
    
}

// print only even number from 1 to 20
for (let i = 1; i <=20; i++) {
    if (i%2==0) {
        // console.log(i)
    }
    
}
// print only odd number from 1 to 20
for (let i = 1; i <=20; i++) {
    if (i%2!=0) {
        // console.log(i)
    }
    
}

// print multiplication table from 1 to 10

// for (let i = 1; i<=10; i++) {
//     for (let j = 1; j <=10; j++) {
//        console.log(`${i}*${j}= ${i}*${j} `) 
//     }
    
// }

// We can also skip or terminate progrm using break or continue:

// break:

for (let i = 0; i <11; i++) {
    // console.log(i)
    if (i==5) { 
        break
        // break will not allow to print further loops and end the program.
    }
}


// continue
for (let i = 0; i <11; i++) {
    if (i==5) { 
        // console.log(`number 5`)
        continue
        // continue will allow to print further loop by skiping number 5
    }
}

/*likely we also have while and do while loop:
while:
    syntax::
    while (condition) {
        code 
    }

    */
// write a code to print all odd numbers from 1 to 10

let i=1

while (i<=10) {
  
    if (i%2==0) {
    // console.log(i)
        
    } else {
        // console.log("odd number")
    }
    i++
}


// do while:
    // Syntax:

    a=1

    do {
        if (a%2==0) {
            // console.log("even number")
        } else {
            // console.log(a);
        }
        a++
    } while (a<=10);


    // Similarly we also have array loops.

    // for of:

    arr=[1,3,5,7,8,2,6]
    for (const num of arr) {
        if (num %2==1){
            // console.log(num)
        }
    }

// We also can use for of loop for strings and maps.

// we cannot use for of loop for object so we use for in loops.

// For in:

myObj={
    name: "Sudip",
    age: 20,
    address: "Nepal",
    Occupation: "Student",
}
// here new object is created lets use for in loop.

for (const key in myObj) {   
    // console.log(key);
    
    console.log(key, " ", myObj[key]);
    

}


// ForEach loop:

// this is used in array:

const coding=["Javascript","java","Python","C#"]
    coding.forEach( (name)=>{
    // console.log(name);
})

// We can inject function inside foreach loop as well:

fun= ()=>{
    console.log("Hello JS Learners");
    
}


coding.forEach(fun)

// LETS SEE HOW TO HANDLE OBJECT INSIDE ARRAY:

 const myCodename= [
    {
        name:"Javascript",
        filename:"js"
    },
    {
        name:"Python",
        filename:"py"
    },
    {
        name:"JAVA",
        filename:"java"
    }
 ]
 myCodename.forEach((item)=>{
    // console.log(item)
    console.log(item.name)
    console.log(item.filename)


 })