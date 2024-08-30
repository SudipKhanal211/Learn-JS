// Date objects= objects that contain values that represent dates and time.
//               These date abject can be changed of formatted. 

let myDate= new Date();
console.log(myDate);

// .toDateString() gives time till day.
console.log(myDate.toDateString());

// .toString() gives date and time as well.
console.log(myDate.toString())

// gives year 
console.log(myDate.getFullYear());

// gives current month.
console.log(myDate.getMonth());

// gives current date
console.log(myDate.getDate());

// gives current hours.
// We can do same for minutes, second and miliseconds.
console.log(myDate.getHours());

// gives current days in numbers. For example: Monday=1, Here day is counted from 0.
console.log(myDate.getDay());

// .getTime Returns the stored time value in milliseconds since midnight, January 1, 1970 UTC.
// console.log(myDate.getTime());



// We can also set time and date as per our need using .setDate().
