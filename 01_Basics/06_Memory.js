/* 
In js there is two type of memory:
1. Stack
2.Heap

Stack store primitive data type and Heap store non-primitive/Refrence type of data.

Note: While changing value of data from stcak it changes on the copy of that data and While changing value of data from heap it changes Orginal data.


 */

// example of stack

name="sudip"
newName= name;
newName= "khanal"
console.log(name);
console.log(newName)

// here the output of name is sudip which is assigned at first but the output of newName is khanal.
// the orginal data is not changes here as stack gives copy when manuplation is done.


// example of heap:

person={
    name: "Sudip",
    age: 20
}

newPerson= person;

// newPerson.age=19

console .log (person)
console.log(newPerson);


// here while changing valye of age it changes in both as heap give refrence when manuplation is done