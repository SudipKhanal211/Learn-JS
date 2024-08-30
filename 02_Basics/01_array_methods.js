// Array is the collection of data/elements in a silgle variables.

Arr= ["sudip","Khanal",20,];
// array is decleared using square brackets.
// Indexing starts from 0.

// console.log(Arr[1]);
// output is khanal as it is 2nd element of the array.

// NOTE: array can be manuplated.

// Array Methods.
// Array methods helps us to operate arrays. It also helps to manuplate array.

let myArr= [1,2,3,4,5,6]


// .push() is used to add element at the last of array.
myArr.push(7);
// console.log(myArr)


// .pop() remove last element of the array
myArr.pop();
// console.log(myArr)

// .unshift() add element at the 0th index of array.
myArr.unshift(10);
// console.log(myArr)
// as the element is added at 0th index, the index of other element shifts by 1.

// .shift() remove 1st element of array.
myArr.shift();
// console.log(myArr);


// .include(element) is used to check if tha array content that element or not. It returns Boolean value.
console.log(myArr.includes(4));
// console.log(myArr.includes(9));


// .indexof(element) is used to know the index of element
index = myArr.indexOf(3);
// console.log(index);


// .join() return array into string.
// console.log( typeof(myArr.join()))


// .slice(start,end) helps to get that range of data in array. The last end index is not included.
slice= myArr.slice(0,5);
// console.log(slice);
// console.log(myArr);


// .splice(start,end) same as slice but it includes end index and remove remaning element from orginal array.

arr1= [1,2,3,4,5,6,7,8]
splice= arr1.splice(2,6)
console.log(splice);
console.log(arr1)



