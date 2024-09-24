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
    console.log(i)
    if (i==5) { 
        break
        // break will not allow to print further loops and end the program.
    }
}


// continue
for (let i = 0; i <11; i++) {
    if (i==5) { 
        console.log(`number 5`)
        continue
        // continue will allow to print further loop by skiping number 5
    }
}